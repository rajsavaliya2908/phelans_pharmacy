import React, {forwardRef, useMemo} from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styleConfig from '../../../config/styleConfig';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux';
import {serviceList} from '../../../redux/typings/serviceList';
import ItemService from '../itemService';

interface ModalServiceListProps {
  onServiceItemPress: (item: serviceList.serviceInfo) => void;
}

const ModalServiceList = forwardRef<BottomSheetModal, ModalServiceListProps>(
  ({onServiceItemPress}, ref) => {
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

    const {bottom: safeBottomArea} = useSafeAreaInsets();
    const selector = useSelector((s: AppState) => s);
    const {serviceListResponse} =
      selector.serviceList as serviceList.ServiceListProps;
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
      item: serviceList.serviceInfo;
      index: number;
    }) => {
      return <ItemService {...props} onServiceItemPress={onServiceItemPress} />;
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
          <FlatList data={serviceListResponse} renderItem={renderStoreItem} />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default ModalServiceList;
