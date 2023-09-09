import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {},
  storeName: {
    paddingHorizontal: styleConfig.smartWidthScale(20),
    paddingVertical: styleConfig.smartHeightScale(8),
    fontSize: styleConfig.countPixelRatio(16),
    color: COLORS.black,
  },
});

export default styles;
