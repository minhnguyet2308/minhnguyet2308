interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

export interface ColorType {
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryWhiteHexRBGA: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
  primaryBacgroundContent: string;
  darkShadow: string;
  fixColorWhite: string;
  fixColorBlack: string;
}
interface themeDarkMode {
  light: ColorType;
  dark: ColorType;
}
export const COLORS: themeDarkMode = {
  light: {
    primaryBacgroundContent: "#614385",
    darkShadow: "#1A1616",
    primaryRedHex: "#DC3535",
    primaryOrangeHex: "#FFA500",
    primaryBlackHex: "#ffffff",
    primaryDarkGreyHex: "#808080",
    secondaryDarkGreyHex: "#C0C0C0",
    primaryGreyHex: "#D3D3D3",
    secondaryGreyHex: "#D3D3D3",
    primaryLightGreyHex: "#52555A",
    secondaryLightGreyHex: "#DCDCDC",
    primaryWhiteHex: "#000000",
    primaryBlackRGBA: "rgba(255,255,255,0.5)",
    secondaryBlackRGBA: "rgba(255,255,255,0.7)",
    fixColorWhite: "#ffffff",
    fixColorBlack: "#000000",
    primaryWhiteHexRBGA: "rgba(0,0,0,0.7)",
  },
  dark: {
    primaryBacgroundContent: "#614385",
    darkShadow: "#B4B5E5",
    primaryRedHex: "#DC3535",
    primaryOrangeHex: "#D17842",
    primaryBlackHex: "#0C0F14",
    primaryDarkGreyHex: "#141921",
    secondaryDarkGreyHex: "#21262E",
    primaryGreyHex: "#252A32",
    secondaryGreyHex: "#252A32",
    primaryLightGreyHex: "#52555A",
    secondaryLightGreyHex: "#AEAEAE",
    primaryWhiteHex: "#FFFFFF",
    primaryBlackRGBA: "rgba(12,15,20,0.5)",
    secondaryBlackRGBA: "rgba(0,0,0,0.7)",
    fixColorWhite: "#ffffff",
    fixColorBlack: "#000000",
    primaryWhiteHexRBGA: "rgba(255,255,255,0.7)",
  },
};

interface FontFamily {
  SpaceMono: string;
}

export const FONTFAMILY: FontFamily = {
  SpaceMono: "SpaceMono",
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
