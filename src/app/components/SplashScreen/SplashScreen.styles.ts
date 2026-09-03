import { StyleSheet } from 'react-native';

// import { brandColors } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    backgroundColor: "#fefefe",
    // backgroundColor: brandColors.splashBackground,
    justifyContent: 'center',
    zIndex: 1,
  },
  logo: {
    height: 150,
    width: 150,
  },
});
