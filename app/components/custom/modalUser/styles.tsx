import {StyleSheet} from 'react-native';
import styleConfig from '../../../config/styleConfig';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    borderWidth: styleConfig.countPixelRatio(1),
    borderColor: COLORS.darkGrey,
    marginHorizontal: styleConfig.smartWidthScale(25),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
    paddingVertical: styleConfig.smartHeightScale(10),
  },
  patientTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: styleConfig.countPixelRatio(26),
  },
  patientInfo: {
    color: COLORS.white,
    marginTop: styleConfig.smartHeightScale(2),
    marginBottom: styleConfig.smartHeightScale(10),
    fontSize: styleConfig.countPixelRatio(16),
  },
  closeIconContainer: {
    marginHorizontal: styleConfig.smartWidthScale(2),
    alignSelf: 'flex-end',
    width: styleConfig.countPixelRatio(36),
    height: styleConfig.countPixelRatio(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: styleConfig.countPixelRatio(16),
    height: styleConfig.countPixelRatio(16),
    resizeMode: 'contain',
  },
  bottom: {
    backgroundColor: COLORS.white,
    paddingVertical: styleConfig.smartHeightScale(50),
  },
  selectPatient: {
    color: COLORS.lightBlack,
    fontSize: styleConfig.countPixelRatio(16),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  userNameContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
    paddingVertical: styleConfig.smartWidthScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartWidthScale(10),
    marginHorizontal: styleConfig.smartWidthScale(20),
  },
  userName: {
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
  btnContainer: {
    marginVertical: styleConfig.smartHeightScale(10),
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
