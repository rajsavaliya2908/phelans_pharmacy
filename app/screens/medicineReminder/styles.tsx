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
    marginVertical: styleConfig.smartHeightScale(20),
    alignSelf: 'center',
  },
  timeContainer: {
    backgroundColor: COLORS.grey,
    flexDirection: 'row',
    borderRadius: styleConfig.countPixelRatio(5),
    marginHorizontal: styleConfig.smartHeightScale(20),
    marginVertical: styleConfig.smartWidthScale(5),
    paddingHorizontal: styleConfig.smartWidthScale(5),
  },
  timeIcon: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    marginHorizontal: styleConfig.smartWidthScale(10),
    marginVertical: styleConfig.smartWidthScale(10),
    resizeMode: 'contain',
  },
  line: {
    marginVertical: styleConfig.smartHeightScale(5),
    width: styleConfig.smartWidthScale(1),
    opacity: 0.2,
    backgroundColor: COLORS.black,
  },
  timeTitleContainer: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    justifyContent: 'center',
    flex: 1,
  },
  timeTitle: {fontSize: styleConfig.countPixelRatio(18)},
  time: {fontSize: styleConfig.countPixelRatio(18)},
  pickTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: styleConfig.smartWidthScale(10),
    justifyContent: 'center',
  },
  dropDownIcon: {
    marginStart: styleConfig.smartWidthScale(5),
    height: styleConfig.countPixelRatio(15),
    width: styleConfig.countPixelRatio(15),
    resizeMode: 'contain',
  },
  input: {
    marginHorizontal: styleConfig.smartWidthScale(30),
    marginVertical: styleConfig.smartHeightScale(10),
    borderRadius: styleConfig.countPixelRatio(8),
    backgroundColor: COLORS.grey,
    height: styleConfig.smartHeightScale(70),
    fontSize: styleConfig.countPixelRatio(18),
    paddingHorizontal: styleConfig.smartWidthScale(10),
  },
  btnContainer: {
    marginVertical: styleConfig.smartHeightScale(10),
    marginHorizontal: styleConfig.smartWidthScale(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightBtnText: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.white,
  },
  rightBtnContainer: {
    borderRadius: styleConfig.countPixelRatio(8),
    paddingVertical: styleConfig.smartHeightScale(8),
    marginHorizontal: styleConfig.smartWidthScale(5),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
  },
  leftBtnText: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.white,
  },
  leftBtnContainer: {
    height: styleConfig.smartHeightScale(35),
    borderRadius: styleConfig.countPixelRatio(8),
    paddingVertical: styleConfig.smartHeightScale(8),
    marginHorizontal: styleConfig.smartWidthScale(5),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
  },
  reminderTitle: {
    fontSize: styleConfig.countPixelRatio(18),
    alignSelf: 'center',
    marginVertical: styleConfig.smartHeightScale(10),
    color: COLORS.lightBlue,
  },
});

export default styles;
