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
    marginVertical: styleConfig.smartHeightScale(30),
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
  actionBtnContainer: {
    marginVertical: styleConfig.smartHeightScale(50),
    marginHorizontal: styleConfig.smartWidthScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBtnContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(50),
    backgroundColor: COLORS.red,
    paddingVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(30),
  },
  leftBtnText: {
    fontSize: styleConfig.countPixelRatio(20),
    color: COLORS.white,
  },
  rightBtnContainer: {
    paddingVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(30),
    paddingHorizontal: styleConfig.smartWidthScale(50),
    backgroundColor: COLORS.darkGrey,
  },
  rightBtnText: {
    fontSize: styleConfig.countPixelRatio(20),
    color: COLORS.white,
  },
});

export default styles;
