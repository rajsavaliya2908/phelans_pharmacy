import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  safeAreaCcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: styleConfig.countPixelRatio(28),
    color: COLORS.red,
    marginVertical: styleConfig.smartHeightScale(30),
    alignSelf: 'center',
  },
  container: {
    paddingVertical: styleConfig.smartWidthScale(3),
    flex: 1,
  },
  rowContainer: {
    marginVertical: styleConfig.smartWidthScale(3),
    marginHorizontal: styleConfig.smartWidthScale(3),
    flexDirection: 'row',
    flex: 1/3,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginHorizontal: styleConfig.smartWidthScale(3),
    flex: 1,
  },
  menuImage: {
    width: styleConfig.countPixelRatio(120),
    height: styleConfig.countPixelRatio(120),
    resizeMode: 'contain',
  },
  menuTitle: {
    marginVertical: styleConfig.smartHeightScale(15),
  },
});

export default styles;
