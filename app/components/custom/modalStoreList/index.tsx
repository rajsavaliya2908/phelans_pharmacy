import React, {forwardRef, useEffect, useMemo, useState} from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {useSelector} from 'react-redux';
import styleConfig from '../../../config/styleConfig';
import {storeList} from '../../../redux/typings/storeList';
import ItemStore from '../itemStore';
import Methods from '../../../utils/methods';
import {Constant} from '../../../utils/constants';
// import {AppState} from '../../../redux';

interface ModalStoreListProps {
  onStoreItemPress: (item: storeList.storeDetail) => void;
}

const ModalStoreList = forwardRef<BottomSheetModal, ModalStoreListProps>(
  ({onStoreItemPress}, ref) => {
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
    const [storeList, setStoreList] = useState<storeList.storeDetail[]>([]);
    const {bottom: safeBottomArea} = useSafeAreaInsets();
    // const selector = useSelector((s: AppState) => s);
    // const storeList = selector.storeList.storeListResponse;
    const contentContainerStyle = useMemo(
      () => ({
        paddingBottom: safeBottomArea || styleConfig.smartHeightScale(6),
      }),
      [safeBottomArea],
    );
    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

    const renderBackdrop = (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop disappearsOnIndex={-1} {...props} />
    );

    const renderStoreItem = (props: {
      item: storeList.storeDetail;
      index: number;
    }) => {
      return <ItemStore {...props} onStoreItemPress={onStoreItemPress} />;
    };
    useEffect(() => {
      getStoreListFromStorage();
    }, []);

    const getStoreListFromStorage = async () => {
      try {
        const storeList = (await Methods.getPref(
          Constant.storeList,
        )) as storeList.storeDetail[];
        if (storeList && storeList.length) {
          setStoreList(storeList);
        }
      } catch (error) {
        setStoreList([]);
      }
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        enableDismissOnClose={true}
        backdropComponent={renderBackdrop}
        contentHeight={animatedContentHeight}>
        <BottomSheetView
          style={contentContainerStyle}
          onLayout={handleContentLayout}>
          <FlatList data={storeList} renderItem={renderStoreItem} />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default ModalStoreList;
