import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {},
  btnTxt: {
    color: COLORS.darkblue,
    fontSize: styleConfig.countPixelRatio(20),
    marginVertical: styleConfig.smartHeightScale(8),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  title: {
    marginVertical: styleConfig.smartHeightScale(10),
    fontSize: styleConfig.countPixelRatio(22),
    color: COLORS.black,
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
});

export default styles;
