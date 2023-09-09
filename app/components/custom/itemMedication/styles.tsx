import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: styleConfig.countPixelRatio(10),
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartHeightScale(5),
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  time: {
    fontSize: styleConfig.countPixelRatio(16),
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
  title: {
    fontSize: styleConfig.countPixelRatio(16),
    flex: 1,
    textAlign: 'center',
  },
  btnContainer: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    borderRadius: styleConfig.countPixelRatio(15),
    marginHorizontal: styleConfig.smartWidthScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  btnsContainer: {
    paddingVertical: styleConfig.smartHeightScale(5),
    marginHorizontal: styleConfig.smartWidthScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: styleConfig.countPixelRatio(16),
    height: styleConfig.countPixelRatio(16),
    resizeMode: 'contain',
  },
});

export default styles;
