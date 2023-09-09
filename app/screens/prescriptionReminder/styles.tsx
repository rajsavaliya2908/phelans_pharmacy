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
  title: {
    fontSize: styleConfig.countPixelRatio(28),
    color: COLORS.red,
    marginVertical: styleConfig.smartHeightScale(30),
    alignSelf: 'center',
  },
  question: {
    fontSize: styleConfig.countPixelRatio(18),
    color: COLORS.black,
  },
  reminderTitleContainer: {
    marginHorizontal: styleConfig.smartHeightScale(20),
  },
  input: {
    borderRadius: styleConfig.countPixelRatio(8),
    backgroundColor: COLORS.grey,
    marginVertical: styleConfig.smartHeightScale(10),
    height: styleConfig.smartHeightScale(70),
    fontSize: styleConfig.countPixelRatio(18),
    paddingHorizontal: styleConfig.smartWidthScale(10),
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
    marginHorizontal: styleConfig.smartWidthScale(10),
    justifyContent: 'center',
  },
  btnContainer: {
    marginVertical: styleConfig.smartHeightScale(30),
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
