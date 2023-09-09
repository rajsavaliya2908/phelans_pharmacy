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
  welcome: {
    color: COLORS.red,
    alignSelf: 'center',
    fontFamily: 'FiraSans-Medium',
    fontSize: styleConfig.countPixelRatio(28),
  },
  inputContainer: {
    marginVertical: styleConfig.smartHeightScale(15),
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingVertical: styleConfig.smartHeightScale(10),
    marginHorizontal: styleConfig.smartWidthScale(30),
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
