export { KeyboardLayoutEngine } from "./keyboard-layout-engine";

export { english } from "./languages/english";

export interface KeyboardSymbol {
  default: string[];
  shift: string[];
  mobileDefault: string[];
  mobileShift: string[];
  mobileSymbol: string[];
}

export interface KeyboardButtonProps {
  addValue?: string;
  buttonName?: string;
  onPressed?: () => void | null;
  deleteValue?: number | "clear";
  pressAction?: "add" | "delete" | "none";
  innerHtml: string;
}
