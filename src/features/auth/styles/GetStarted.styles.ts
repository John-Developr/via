import { StyleSheet, Platform } from 'react-native';
import { appColors, fontFamilies } from '../../../theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.background,
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'flex-end',
  },

  heroBlock: {
    paddingHorizontal: 26,
    paddingTop: 32,
    paddingBottom: Platform.select({
      ios: 44,
      android: 32,
      default: 32,
    }),
  },

  eyebrow: {
    color: appColors.positive,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.3,
    fontFamily: fontFamilies.bricolage.semiBold,
  },

  headline: {
    color: appColors.textPrimary,
    fontSize: 30,
    lineHeight: 38,
    marginBottom: 14,
    fontFamily: fontFamilies.bricolage.semiBold,
  },

  subtext: {
    color: appColors.textSecondary,
    fontSize: 17,
    lineHeight: 21,
    marginBottom: 28,
    fontFamily: fontFamilies.dmSans.medium,
  },

  btnPrimary: {
    backgroundColor: appColors.white,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minHeight: 55,
  },

  btnPrimaryText: {
    color: appColors.textOnAccent,
    fontSize: 16,
    fontFamily: fontFamilies.dmSans.bold,
  },

  btnGhost: {
    borderWidth: 1,
    borderColor: 'rgba(242,237,228,0.35)',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 55,
  },

  btnGhostText: {
    color: appColors.textPrimary,
    fontSize: 16,
    fontFamily: fontFamilies.dmSans.bold,
  },

  btnPressed: {
    opacity: 0.85,
  },
});

export { styles };