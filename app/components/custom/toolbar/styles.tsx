import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: styleConfig.smartHeightScale(50),
    backgroundColor: COLORS.darkGrey,
    flexDirection: 'row',
  },
  leftBtnContainer: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    width: styleConfig.countPixelRatio(40),
    height: styleConfig.countPixelRatio(40),
    borderRadius: styleConfig.countPixelRatio(20),
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBtn: {
    width: styleConfig.countPixelRatio(22),
    height: styleConfig.countPixelRatio(22),
    resizeMode: 'contain',
  },
  logo: {
    width: '100%',
    height: styleConfig.countPixelRatio(70),
    resizeMode: 'cover',
  },
  rightBtnContainer: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    width: styleConfig.countPixelRatio(40),
    height: styleConfig.countPixelRatio(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleConfig.countPixelRatio(20),
  },
  rightBtn: {
    width: styleConfig.countPixelRatio(40),
    height: styleConfig.countPixelRatio(40),
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    resizeMode: 'contain',
  },
  rightText: {
    fontSize: styleConfig.countPixelRatio(20),
    color: COLORS.white,
  },
  rightTextContainer: {
    width: styleConfig.smartWidthScale(60),
  },
});

export default styles;
