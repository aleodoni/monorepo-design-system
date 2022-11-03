import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
  radii,
  space,
} from '@cmc-ui/tokens'

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
    colors,
    fontSizes,
    fontWeights,
    fonts: fontFamily,
    lineHeights,
    radii,
    space,
  },
})
