import {forwardRef} from 'react';
import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './styles';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {ModalImagePickerProps} from '../typings/modalimagepicker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styleConfig from '../../../config/styleConfig';
import string from '../../../utils/string';

const ModalImagePicker = forwardRef<BottomSheetModal, ModalImagePickerProps>(
  ({onCameraPress, onGalleryPress}, ref) => {
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
          <Text style={styles.title}>{string.selectOption}</Text>
          <Text style={styles.btnTxt} onPress={onCameraPress}>
            {string.camera}
          </Text>
          <Text style={styles.btnTxt} onPress={onGalleryPress}>
            {string.gallery}
          </Text>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default ModalImagePicker;
