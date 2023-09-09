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
  title: {
    fontSize: styleConfig.countPixelRatio(28),
    color: COLORS.red,
    marginVertical: styleConfig.smartHeightScale(30),
    alignSelf: 'center',
  },
  serviceNameContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartWidthScale(10),
    borderRadius: styleConfig.countPixelRatio(5),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartWidthScale(10),
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  serviceName: {
    flex: 1,
    marginHorizontal: styleConfig.smartWidthScale(5),
    color: COLORS.black,
    fontSize: styleConfig.countPixelRatio(16),
  },
  downArrowIcon: {
    marginHorizontal: styleConfig.smartWidthScale(5),
    width: styleConfig.countPixelRatio(16),
    height: styleConfig.countPixelRatio(16),
    resizeMode: 'contain',
  },
  input: {
    marginHorizontal: styleConfig.smartWidthScale(30),
    marginVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(8),
    backgroundColor: COLORS.grey,
    height: styleConfig.smartHeightScale(80),
    fontSize: styleConfig.countPixelRatio(18),
    paddingHorizontal: styleConfig.smartWidthScale(10),
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
});

export default styles;
