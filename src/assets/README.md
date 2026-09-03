# Assets

Static application assets live here and are grouped by their runtime purpose.

```text
assets/
├── animations/   # Motion files such as Lottie JSON
├── brand/        # Canonical logos and app-icon source artwork
├── fonts/        # Licensed application font files
├── icons/        # Small reusable symbols and icon artwork
├── images/       # Photos, illustrations, logos and backgrounds
└── index.ts      # Public asset exports
```

## Conventions

- Use lowercase kebab-case filenames, such as `empty-orders.png`.
- Include the role or state in the name when useful, such as
  `avatar-placeholder-dark.png`.
- Keep feature-specific assets near their feature if they are not reused.
- Keep canonical brand source artwork in `brand/`; generated app icons belong
  in the native `ios/` and `android/` resource folders.
- Export reusable images from the category's `index.ts` instead of adding raw
  `require()` calls throughout components.
- Optimize binary assets before committing them and remove source/export files
  that are not used at runtime.
- Do not commit licensed fonts without confirming redistribution rights.
- Add the required runtime library and Metro configuration before importing SVG
  or Lottie files directly.
