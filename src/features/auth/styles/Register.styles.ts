import { StyleSheet, Platform } from 'react-native';
import { appColors, fontFamilies, typography } from '../../../theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.background,
  },

  backButton: {
    position: 'absolute',
    top: Platform.select({ ios: 54, android: 24, default: 24 }),
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonPressed: {
    opacity: 0.7,
  },

  backButtonText: {
    fontFamily: fontFamilies.dmSans.semiBold,
    fontSize: 18,
    color: appColors.textPrimary,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingTop: Platform.select({ ios: 110, android: 90, default: 90 }),
    paddingBottom: 40,
  },

  formHead: {
    marginBottom: 20,
  },

  eyebrow: {
    ...typography.label,
    color: appColors.accent,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  title: {
    fontFamily: fontFamilies.bricolage.semiBold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.5,
    color: appColors.textPrimary,
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

  input: {
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 14,
    fontFamily: fontFamilies.dmSans.regular,
    fontSize: 15,
    color: appColors.textPrimary,
  },

  // Used inline (not via StyleSheet.create) since TextInput's
  // placeholderTextColor prop needs a plain string, not a style object.
  placeholderColor: {
    color: appColors.textSecondary,
  },

  passwordRow: {
    position: 'relative',
    justifyContent: 'center',
  },

  passwordInput: {
    paddingRight: 60,
  },

  passwordToggle: {
    position: 'absolute',
    right: 14,
  },

  passwordToggleText: {
    fontFamily: fontFamilies.dmSans.semiBold,
    fontSize: 13,
    color: appColors.accent,
  },

  btnPrimary: {
    backgroundColor: appColors.accent,
    borderRadius: 10,
    paddingVertical: 14,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 6,
  },

  btnPrimaryText: {
    fontFamily: fontFamilies.dmSans.bold,
    fontSize: 16,
    color: appColors.textOnAccent,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: appColors.border,
  },

  dividerText: {
    fontFamily: fontFamilies.dmSans.medium,
    fontSize: 12,
    color: appColors.textSecondary,
    marginHorizontal: 12,
  },

  btnGhost: {
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: 10,
    paddingVertical: 13,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnGhostText: {
    fontFamily: fontFamilies.dmSans.bold,
    fontSize: 16,
    color: appColors.textPrimary,
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