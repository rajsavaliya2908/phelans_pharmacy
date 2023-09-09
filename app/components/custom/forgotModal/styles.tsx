import {StyleSheet, Dimensions} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    height: 300,
    marginVertical: height / 4,
    marginHorizontal: width / 9,
    borderRadius: 5,
  },
  textInputContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    width: '100%',
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  modalView: {
    backgroundColor: COLORS.blue,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fPass: {
    color: COLORS.white,
    fontFamily: 'FiraSans-Light',
    fontSize: 20,
  },
  EmailText: {
    color: COLORS.white,
    fontFamily: 'FiraSans-Light',
  },
  emailString: {color: COLORS.black, fontFamily: 'FiraSans-Medium'},
});

export default styles;
