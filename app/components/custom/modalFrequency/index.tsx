import {forwardRef} from 'react';
import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styleConfig from '../../../config/styleConfig';
import ItemFrequency from '../itemFrequency';

interface ModalFrequencyProps {
  onFrequencyItemPress: (item: string) => void;
}

const ModalFrequency = forwardRef<BottomSheetModal, ModalFrequencyProps>(
  ({onFrequencyItemPress}, ref) => {
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
    const {bottom: safeBottomArea} = useSafeAreaInsets();

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

    const renderFrequencyItem = (props: {item: string; index: number}) => {
      return (
        <ItemFrequency {...props} onFrequencyItemPress={onFrequencyItemPress} />
      );
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
          <FlatList
            data={['Daily', 'Weekly', 'Monthly']}
            renderItem={renderFrequencyItem}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default ModalFrequency;
