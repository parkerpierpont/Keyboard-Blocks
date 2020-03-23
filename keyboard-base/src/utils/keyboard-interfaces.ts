export interface KeyboardSymbol {
  default: string[];
  shift: string[];
  mobileDefault?: string[];
  mobileShift?: string[];
  mobileSymbol?: string[];
}

export interface KeyboardButtonProps {
  addValue?: string;
  buttonName: string;
  onPressed?: () => void | null;
  deleteValue?: number | "clear";
  pressAction?: "add" | "delete" | "none";
  text?: string;
  customInnerText?: boolean;
}

export type keyboardLanguage = keyof KeyboardLanguageMap;

export interface KeyboardLanguageMap {
  arabic: KeyboardSymbol;
  burmese: KeyboardSymbol;
  english: KeyboardSymbol;
  farsi: KeyboardSymbol;
  french: KeyboardSymbol;
  georgian: KeyboardSymbol;
  german: KeyboardSymbol;
  hebrew: KeyboardSymbol;
  hindi: KeyboardSymbol;
  italian: KeyboardSymbol;
  japanese: KeyboardSymbol;
  kannada: KeyboardSymbol;
  korean: KeyboardSymbol;
  russian: KeyboardSymbol;
  sindhi: KeyboardSymbol;
  spanish: KeyboardSymbol;
  swedish: KeyboardSymbol;
  thai: KeyboardSymbol;
  turkish: KeyboardSymbol;
  ukrainian: KeyboardSymbol;
  urdu: KeyboardSymbol;
}
