// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

// ../tokens/dist/index.mjs
var colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate900: "#0f172a",
  slate800: "#1e293b",
  slate400: "#94a3b8",
  slate200: "#e2e8f0",
  slate100: "#f1f5f9",
  indigo500: "#6366f1",
  indigo400: "#818cf8",
  teal500: "#14b8a6",
  teal400: "#2dd4bf",
  red500: "#ef4444",
  red400: "#f87171",
  yellow500: "#eab308",
  yellow400: "#facc15",
  green500: "#22c55e",
  green400: "#4ade80"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fontFamily = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts: fontFamily,
    lineHeights,
    radii,
    space
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$indigo400",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "$bold",
  color: "$white",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4"
      },
      big: {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },
  defaultVariants: {
    size: "small"
  }
});
export {
  Button
};
