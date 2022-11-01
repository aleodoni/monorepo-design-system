"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontFamily: () => fontFamily,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
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

// src/font-family.ts
var fontFamily = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-sizes.ts
var fontSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  "2xl": 32
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontFamily,
  fontSizes,
  fontWeights
});
