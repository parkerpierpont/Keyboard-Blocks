import {
  createLowercase,
  createUppercase,
  createSymbols
} from "./language-transformers";
import { KeyboardSymbol } from "../keyboard-interfaces";

export const createLayout = (
  lang: KeyboardSymbol
): {
  default: string[];
  shift: string[];
  mobileDefault: string[];
  mobileShift: string[];
  mobileSymbol: string[];
  numbers: string[];
} => {
  const { default: base, shift } = lang;
  const baseExtended = base;
  const shiftExtended = shift;
  const baseCondensed = lang.mobileDefault
    ? lang.mobileDefault
    : createLowercase(base);
  const shiftCondensed = lang.mobileShift
    ? lang.mobileShift
    : createUppercase(shift);
  const symbolCondensed = lang.mobileSymbol
    ? lang.mobileSymbol
    : createSymbols(base, shift);
  const numbers = ["1 2 3", "4 5 6", "7 8 9", "{numpad-1} 0 {bksp}"];

  return {
    default: baseExtended,
    shift: shiftExtended,
    mobileDefault: baseCondensed,
    mobileShift: shiftCondensed,
    mobileSymbol: symbolCondensed,
    numbers
  };
};
