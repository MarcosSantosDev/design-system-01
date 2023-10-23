import { createStitches, defaultThemeMap } from '@stitches/react'

import tokens from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: tokens.colors,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    fonts: tokens.fonts,
    lineHeights: tokens.lineHeights,
    radii: tokens.radii,
    space: tokens.space,
  },
})
