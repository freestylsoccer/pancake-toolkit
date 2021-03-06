import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  white: "#FFFFFF",
  black: "#000000"
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  text1: "#000000",
  text2: "#565A69",
  text3: "#6E727D",
  text4: "#C3C5CB",
  text5: "#EDEEF2",
  bg0: "#FFF",
  bg1: "#F7F8FA",
  bg2: "#EDEEF2",
  bg3: "#CED0D9",
  bg4: "#888D9B",
  bg5: "#888D9B",
  bg6: "#6C7284",
  //specialty colors
  modalBG: "rgba(0,0,0,0.3)",
  advancedBG: "rgba(255,255,255,0.6)",
  //primary" color"s
  primary1: "#E8006F",
  primary2: "#FF8CC3",
  primary3: "#FF99C9",
  primary4: "#F6DDE8",
  primary5: "#FDEAF1",
  // color text
  primaryText1: "#D50066",
  // secondary colors
  secondary1: "#E8006F",
  secondary2: "#F6DDE8",
  secondary3: "#FDEAF1",
  // other
  red1: "#DA2D2B",
  red2: "#DF1F38",
  green1: "#007D35",
  blue1: "#0068FC",
  blue2: "#0068FC",
  error: "#DF1F38",
  success: "#007D35",
  warning: "#FF8F00",

  // dont wanna forget these blue yet
  blue4: "#C4D9F8",
  blue5: "#2172E5",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  text1: "#FFFFFF",
  text2: "#C3C5CB",
  text3: "#8F96AC",
  text4: "#B2B9D2",
  text5: "#2C2F36",
  bg0: "#191B1F",
  bg1: "#212429",
  bg2: "#2C2F36",
  bg3: "#40444F",
  bg4: "#565A69",
  bg5: "#6C7284",
  bg6: "#1A2028",
  modalBG: "rgba(0,0,0,.425)",
  advancedBG: "rgba(0,0,0,0.1)",
  primary1: "#2172E5",
  primary2: "#3680E7",
  primary3: "#4D8FEA",
  primary4: "#376bad70",
  primary5: "#153d6f70",
  primaryText1: "#438BF0",
  secondary1: "#2172E5",
  secondary2: "#17000b26",
  secondary3: "#17000b26",
  red1: "#FF4343",
  red2: "#F82D3A",
  green1: "#27AE60",
  blue1: "#2172E5",
  blue2: "#5199FF",
  error: "#FD4040",
  success: "#27AE60",
  warning: "#FF8F00",
  // dont wanna forget these blue yet
  blue4: "#153d6f70",
  blue5: "#2172E5",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
