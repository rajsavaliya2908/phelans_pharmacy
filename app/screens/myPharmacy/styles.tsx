import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: styleConfig.countPixelRatio(28),
    color: COLORS.red,
    marginVertical: styleConfig.smartHeightScale(20),
    alignSelf: 'center',
  },
  marginExtra: {
    marginTop: styleConfig.smartHeightScale(10),
  },
  svContainer: {
    flexGrow: 1,
  },
  storeDetailContainer: {
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  storeName: {
    marginVertical: styleConfig.smartHeightScale(2),
    fontSize: styleConfig.countPixelRatio(16),
    fontWeight: 'bold',
  },
  storeAddress: {
    marginVertical: styleConfig.smartHeightScale(2),
    fontSize: styleConfig.countPixelRatio(16),
  },
  lineContainer: {
    height: styleConfig.smartWidthScale(2),
    backgroundColor: COLORS.black,
    opacity: 0.0789,
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  storeInfoContainer: {
    flexDirection: 'row',
    marginHorizontal: styleConfig.smartWidthScale(30),
    marginVertical: styleConfig.smartHeightScale(15),
  },
  sectionInfoContainer: {
    marginStart: styleConfig.smartWidthScale(30),
  },
  logo: {
    width: styleConfig.countPixelRatio(28),
    height: styleConfig.countPixelRatio(28),
    marginTop: styleConfig.smartHeightScale(12),
    resizeMode: 'contain',
  },
  sectionTitle: {
    color: COLORS.red,
    fontWeight: '600',
    fontSize: styleConfig.countPixelRatio(18),
  },
  sectionDetail: {
    color: COLORS.black,
    fontSize: styleConfig.countPixelRatio(16),
    marginTop: styleConfig.smartHeightScale(10),
  },
  additionalInfo: {
    color: COLORS.black,
    fontSize: styleConfig.countPixelRatio(16),
    marginTop: styleConfig.smartHeightScale(10),
    marginHorizontal: styleConfig.smartWidthScale(30),
  },
  map: {
    marginVertical: styleConfig.smartHeightScale(20),
    alignSelf: 'center',
    height: styleConfig.smartWidthScale(200),
    width: styleConfig.width - styleConfig.smartWidthScale(60),
  },
});

export default styles;
