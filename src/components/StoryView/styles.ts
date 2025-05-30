import { StyleSheet } from 'react-native';
import {
  Colors,
  Metrics,
  moderateScale,
  scale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    alignSelf: 'center',
  },
  divStory: {
    alignSelf: 'center',
    height: '100%',
    width: Metrics.screenWidth,
    paddingBottom: moderateScale(4),
  },
  imgStyle: {
    width: Metrics.screenWidth,
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    resizeMode: 'contain',
  },
  progressiveImageContainer: {
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  parentView: {
    flex: 1,
  },
  rootViewStyle: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  customView: {
    position: 'absolute',
    flexDirection: 'column',
    width: Metrics.screenWidth,
    zIndex: 999,
  },
  topView: {
    position: 'absolute',
    flexDirection: 'column',
    width: Metrics.screenWidth,
    zIndex: 99,
  },
  bottomView: {
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  mainView: {
    position: 'absolute',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  progressView: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
  },
  contentVideoView: {
    flex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  progressBarArray: {
    flexDirection: 'row',
    position: 'absolute',
    top: verticalScale(10),
    height: verticalScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    left: 10,
    right: 10,
  },
  progressBarContainer: {
    flex: 1,
    margin: moderateScale(2),
    borderRadius: verticalScale(10),
  },
  currentBarContainer: {
    position: 'absolute',
    top: 0,
    margin: 0,
  },
  //ProfileHeader
  userContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  barUsername: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    marginLeft: scale(8),
  },
  verifyIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginLeft: scale(5),
  },
  closeIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
    marginRight: scale(8),
    tintColor: Colors.activeColor,
  },
  userView: {
    flexDirection: 'row',
    position: 'absolute',
    top: verticalScale(30),
    width: '98%',
    alignItems: 'center',
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginLeft: scale(12),
    color: 'white',
  },
  message: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    marginTop: verticalScale(3),
    marginLeft: scale(12),
    color: 'white',
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderView: {
    flex: 1,
    position: 'absolute',
    top: '50%',
    left: '45%',
  },
  loaderStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  overlayViewStyle: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  overlayMiddleViewStyle: {
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  overlayTopViewStyle: {
    top: 100,
  },
  overlayBottomViewStyle: {
    bottom: 100,
  },
});

export default styles;
