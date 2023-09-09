import {StyleSheet} from 'react-native';
import styleConfig from '../../config/styleConfig';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  storeNameContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartWidthScale(10),
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
  inputContainer: {
    backgroundColor: COLORS.blackOpacity,
  },
});

export default styles;
