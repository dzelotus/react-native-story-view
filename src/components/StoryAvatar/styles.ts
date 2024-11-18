import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  image: {
    height: '95%',
    width: '95%',
    borderRadius: moderateScale(35),
  },
  imageContainer: {
    height: moderateScale(70),
    width: moderateScale(70),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(35),
    borderColor: '#03A500',
    borderWidth: 3,
    marginRight: moderateScale(10),
  },
  viewedStoryContainer: {
    borderColor: '#CB11AB',
  },
  username: {
    alignSelf: 'center',
    marginRight: moderateScale(16),
    marginTop: moderateScale(6),
    color: Colors.white,
    fontWeight: '500',
  },
});

export default styles;
