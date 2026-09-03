export const fontFamilies = {
  bricolage: {
    regular: 'BricolageGrotesque-Regular',
    medium: 'BricolageGrotesque-Medium',
    semiBold: 'BricolageGrotesque-SemiBold',
    bold: 'BricolageGrotesque-Bold',
    extraBold: 'BricolageGrotesque-ExtraBold',
  },
  dmSans: {
    regular: 'DMSans-Regular',
    medium: 'DMSans-Medium',
    semiBold: 'DMSans-SemiBold',
    bold: 'DMSans-Bold',
  },
} as const;

export const typography = {
  display: {
    fontFamily: fontFamilies.bricolage.bold,
    fontSize: 40,
    letterSpacing: -1,
    lineHeight: 48,
  },
  body: {
    fontFamily: fontFamilies.dmSans.regular,
    fontSize: 17,
    lineHeight: 26,
  },
  label: {
    fontFamily: fontFamilies.dmSans.semiBold,
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 18,
  },
} as const;
