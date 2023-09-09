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
  container: {
    flexGrow: 1,
  },
  title: {
    fontSize: styleConfig.countPixelRatio(28),
    color: COLORS.red,
    marginVertical: styleConfig.smartHeightScale(30),
    alignSelf: 'center',
  },
  input: {
    marginHorizontal: styleConfig.smartWidthScale(30),
    marginVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(8),
    backgroundColor: COLORS.grey,
    height: styleConfig.smartHeightScale(100),
    fontSize: styleConfig.countPixelRatio(18),
    paddingHorizontal: styleConfig.smartWidthScale(10),
  },
  photoContainer: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: styleConfig.smartWidthScale(30),
    marginVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(8),
    height: styleConfig.smartHeightScale(110),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraLogo: {
    marginVertical: styleConfig.smartHeightScale(5),
    width: styleConfig.countPixelRatio(40),
    height: styleConfig.countPixelRatio(40),
    resizeMode: 'contain',
  },
  captureImage: {
    height: styleConfig.smartHeightScale(110),
    width: styleConfig.width - styleConfig.smartWidthScale(60),
    resizeMode: 'stretch',
  },
  cameraInfo: {
    marginVertical: styleConfig.smartHeightScale(5),
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.darkblue,
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
