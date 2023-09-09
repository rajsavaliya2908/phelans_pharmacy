import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  orTxtContainer: {
    flexDirection: 'row',
    marginVertical: styleConfig.smartHeightScale(30),
    marginHorizontal: styleConfig.smartWidthScale(55),
    alignSelf: 'center',
  },
  orLine: {
    backgroundColor: 'black',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  orTxt: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: styleConfig.countPixelRatio(16),
  },
  welcomeTxt: {
    marginTop: styleConfig.smartHeightScale(25),
    marginBottom: styleConfig.smartHeightScale(40),
    lineHeight: styleConfig.smartHeightScale(30),
    fontSize: styleConfig.countPixelRatio(22),
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    marginVertical: styleConfig.smartHeightScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: styleConfig.countPixelRatio(30),
    marginHorizontal: styleConfig.smartWidthScale(50),
  },
  btnText: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.white,
    paddingVertical: styleConfig.smartHeightScale(10),
  },
  signInBtnColor: {
    backgroundColor: COLORS.blue,
  },
  registerBtnColor: {
    backgroundColor: COLORS.red,
  },
});

export default styles;
