import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartHeightScale(15),
    marginHorizontal: styleConfig.smartWidthScale(30),
    borderRadius: styleConfig.countPixelRatio(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconContainer: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    marginHorizontal: styleConfig.smartWidthScale(5),
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconStyle: {
    width: styleConfig.countPixelRatio(22),
    height: styleConfig.countPixelRatio(22),
    resizeMode: 'contain',
  },
  rightIcon: {
    width: styleConfig.countPixelRatio(15),
    height: styleConfig.countPixelRatio(15),
    resizeMode: 'contain',
  },
  inputStyle: {
    marginHorizontal: styleConfig.smartWidthScale(5),
    fontSize: styleConfig.countPixelRatio(16),
    flex: 1,
    paddingHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(10),
  },
});

export default styles;
