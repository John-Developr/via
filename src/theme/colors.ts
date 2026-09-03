// theme/colors.ts

// Raw color values. Named after the color itself + a weight, not where it's
// used — so a value can be reused across multiple semantic roles without
// the name becoming misleading (e.g. "amber500" instead of "accent" or
// "buttonColor").
const palette = {
  // Ink navy — screen backgrounds, surfaces, borders. Ordered lightest (100)
  // to darkest (900), matching the rest of the scale's convention.
  ink100: '#2C4059', // hairline borders / dividers
  ink200: '#213448', // elevated surface (e.g. pressed/secondary card)
  ink300: '#1B2C40', // base surface (cards, panels)
  ink400: '#132030', // screen background
  ink500: '#0B1420', // app shell / outer background

  // Warm off-white — text and surfaces on dark backgrounds.
  paper100: '#F2EDE4', // primary text on dark
  paper300: '#B9C2CC', // secondary / muted text on dark
  paper500: '#FFFFFF', // pure white, used sparingly (e.g. photo scrims)

  // Accent
  amber500: '#132030', // primary accent — CTAs, active states, highlights

  // Status / semantic hues
  sage500: '#7FA98C', // positive — money owed to you, settled, confirmed
  coral500: '#E8654F', // attention — money you owe, unread, urgent

  // Legacy / neutral (kept for screens not yet migrated to the palette above)
  slate600: '#475569',
  slate900: '#0F172A',
} as const;

// Fixed brand colors that don't belong to a semantic role — values that
// should never change based on theme or context.
export const brandColors = {
  splashBackground: palette.ink500,
} as const;

// Semantic tokens. Screens should import from here, not from `palette`
// directly, so a palette value can change in one place without hunting
// down every usage.
export const appColors = {
  // Surfaces
  background: palette.ink400,
  surface: palette.ink300,
  surfaceElevated: palette.ink200,
  border: palette.ink100,

  // Text
  textPrimary: palette.paper100,
  textSecondary: palette.paper300,
  textOnAccent: palette.ink400, // text placed on top of an amber fill

  // Accent / interactive
  accent: palette.amber500,

  // Status
  positive: palette.sage500, // e.g. "you're owed", settled
  negative: palette.coral500, // e.g. "you owe", unread badge

  // Legacy neutrals, still available if a screen needs a light-mode value
  neutralDark: palette.slate900,
  neutralMid: palette.slate600,
  white: palette.paper500,
  black: palette.ink500
} as const;