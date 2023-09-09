import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  safeAreaCcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeAreaInside: {
    flex: 1,
    backgroundColor: COLORS.blue,
    position: 'relative',
  },
  container: {
    paddingVertical: styleConfig.smartWidthScale(3),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  rowContainer: {
    marginVertical: styleConfig.smartWidthScale(3),
    marginHorizontal: styleConfig.smartWidthScale(3),
    flexDirection: 'row',
    flex: 1,
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
  callLogo: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    resizeMode: 'contain',
  },
  callBtnContainer: {
    width: styleConfig.smartWidthScale(130),
    alignSelf: 'center',
    paddingHorizontal: styleConfig.smartWidthScale(5),
    paddingVertical: styleConfig.smartHeightScale(5),
    marginVertical: styleConfig.smartHeightScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.white,
    borderWidth: styleConfig.countPixelRatio(1),
    borderRadius: styleConfig.countPixelRatio(30),
  },
  callNow: {
    fontSize: styleConfig.countPixelRatio(16),
    fontWeight: 'bold',
    color: COLORS.white,
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
});

export default styles;
