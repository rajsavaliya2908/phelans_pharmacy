import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  kavContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  register: {
    color: COLORS.red,
    alignSelf: 'center',
    fontFamily: 'FiraSans-Medium',
    marginVertical: styleConfig.smartHeightScale(20),
    fontSize: styleConfig.countPixelRatio(28),
  },
  input: {
    marginVertical: styleConfig.smartHeightScale(5),
  },
  btnContainer: {
    height: styleConfig.smartHeightScale(40),
    marginVertical: styleConfig.smartHeightScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: styleConfig.countPixelRatio(10),
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  btnText: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.white,
    paddingVertical: styleConfig.smartHeightScale(10),
  },
  promotionInfoContainer: {
    marginTop: styleConfig.smartHeightScale(20),
    flexDirection: 'row',
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: styleConfig.countPixelRatio(28),
    height: styleConfig.countPixelRatio(28),
    borderRadius: styleConfig.width / 2,
    borderWidth: styleConfig.countPixelRatio(2),
    borderColor: COLORS.conditionGrey,
  },
  checkLogo: {
    width: styleConfig.countPixelRatio(20),
    height: styleConfig.countPixelRatio(20),
    resizeMode: 'contain',
  },
  promotionText: {
    fontSize: styleConfig.countPixelRatio(16),
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
});

export default styles;
