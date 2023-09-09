import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  safeAreaCcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  kavContainer: {
    flex: 1,
  },
  checkLogo: {
    width: styleConfig.countPixelRatio(80),
    height: styleConfig.countPixelRatio(80),
    marginVertical: styleConfig.smartHeightScale(50),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.red,
    textAlign: 'center',
    fontSize: styleConfig.countPixelRatio(36),
  },
  subTitle: {
    color: COLORS.red,
    opacity: 0.6,
    textAlign: 'center',
    fontSize: styleConfig.countPixelRatio(22),
  },
  titleContainer: {
    marginVertical: styleConfig.smartHeightScale(30),
    alignSelf: 'center',
  },
  suggetionText: {
    color: COLORS.darkblue,
    textAlign: 'center',
    fontSize: styleConfig.countPixelRatio(20),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: styleConfig.smartHeightScale(10),
    marginVertical: styleConfig.smartHeightScale(80),
    backgroundColor: COLORS.red,
    borderRadius: styleConfig.countPixelRatio(30),
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  btnTxt: {
    fontSize: styleConfig.countPixelRatio(20),
    color: COLORS.white,
  },
});

export default styles;
