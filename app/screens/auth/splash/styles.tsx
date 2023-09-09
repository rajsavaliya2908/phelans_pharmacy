import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: styleConfig.countPixelRatio(90),
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: styleConfig.countPixelRatio(32),
    fontFamily: 'FiraSans-Regular',
    marginHorizontal: styleConfig.smartWidthScale(20),
    marginVertical: styleConfig.smartHeightScale(20),
  },
  loaderContainer: {
    height: styleConfig.countPixelRatio(70),
    width: styleConfig.countPixelRatio(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
