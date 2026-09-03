import { StyleSheet } from 'react-native';
import { appColors, fontFamilies, typography } from '../../../theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  // No justifyContent: 'center' here — a centered ScrollView re-centers
  // itself every time the keyboard opens/closes, which is what reads as
  // the screen "jumping" when you tap into a field.
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 26,
    paddingTop: 120,
    paddingBottom: 40,
  },

  grabber: {
    width: 70,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#C7C7C7',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 16,
  },

  formHead: {
    marginBottom: 20,
  },

  title: {
    fontFamily: fontFamilies.bricolage.semiBold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.5,
    marginBottom: 8,
  },

  info: {
    fontFamily: fontFamilies.dmSans.medium,
    fontSize: 14,
    lineHeight: 20,
    color: appColors.textSecondary,
  },

  field: {
    marginBottom: 18,
  },

  fieldLabel: {
    ...typography.label,
    color: appColors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  forgotWrap: {
    alignSelf: 'flex-end',
    marginTop: -6,
    marginBottom: 22,
  },

  forgotText: {
    fontFamily: fontFamilies.dmSans.medium,
    fontSize: 13,
    color: appColors.accent,
  },

  btnPrimary: {
    backgroundColor: appColors.accent,
    borderRadius: 10,
    paddingVertical: 14,
    minHeight: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  btnPrimaryText: {
    fontFamily: fontFamilies.dmSans.bold,
    fontSize: 16,
    color: appColors.white,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#dfdfdf',
  },

  dividerText: {
    fontFamily: fontFamilies.dmSans.medium,
    fontSize: 12,
    color: appColors.textSecondary,
    marginHorizontal: 12,
  },

  btnGhost: {
    borderWidth: 1,
    borderColor: '#e0e0e1',
    borderRadius: 10,
    paddingVertical: 13,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnGhostText: {
    fontFamily: fontFamilies.dmSans.bold,
    fontSize: 16,
  },

  btnPressed: {
    opacity: 0.85,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  switchText: {
    fontFamily: fontFamilies.dmSans.regular,
    fontSize: 13,
    color: appColors.textSecondary,
  },

  switchLink: {
    fontFamily: fontFamilies.dmSans.bold,
    fontSize: 13,
    color: appColors.accent,
  },
});

export { styles };