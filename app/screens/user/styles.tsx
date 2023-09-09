import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

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
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    color: COLORS.red,
    alignSelf: 'center',
    fontFamily: 'FiraSans-Medium',
    marginVertical: styleConfig.smartHeightScale(20),
    fontSize: styleConfig.countPixelRatio(28),
  },
  storeNameContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartWidthScale(14),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartWidthScale(10),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  storeName: {
    flex: 1,
    marginHorizontal: styleConfig.smartWidthScale(5),
    color: COLORS.black,
    fontSize: styleConfig.countPixelRatio(18),
  },
  downArrowIcon: {
    marginHorizontal: styleConfig.smartWidthScale(5),
    width: styleConfig.countPixelRatio(16),
    height: styleConfig.countPixelRatio(16),
    resizeMode: 'contain',
  },
  email: {
    marginHorizontal: styleConfig.smartWidthScale(30),
    fontSize: styleConfig.countPixelRatio(18),
    marginVertical: styleConfig.smartHeightScale(20),
  },
  lineContainer: {
    height: styleConfig.smartHeightScale(1),
    marginHorizontal: styleConfig.smartWidthScale(100),
    marginVertical: styleConfig.smartHeightScale(10),
    backgroundColor: COLORS.black,
    opacity: 0.2,
  },
  personalInfoTitle: {
    color: COLORS.darkblue,
    alignSelf: 'center',
    marginVertical: styleConfig.smartHeightScale(10),
    fontSize: styleConfig.countPixelRatio(22),
  },
  input: {
    fontSize: styleConfig.countPixelRatio(16),
    paddingVertical: styleConfig.smartHeightScale(15),
    marginHorizontal: styleConfig.smartWidthScale(20),
    padding: 0,
  },
  inputLineContainer: {
    height: styleConfig.smartHeightScale(1),
    marginHorizontal: styleConfig.smartWidthScale(20),
    backgroundColor: COLORS.black,
    opacity: 0.1,
  },
  btnContainer: {
    marginVertical: styleConfig.smartHeightScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: styleConfig.countPixelRatio(5),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  btnText: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.white,
    paddingVertical: styleConfig.smartHeightScale(10),
  },
});

export default styles;
