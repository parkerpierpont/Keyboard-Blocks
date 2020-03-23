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
  arabic: string;
  burmese: string;
  english: string;
  farsi: string;
  french: string;
  georgian: string;
  german: string;
  hebrew: string;
  hindi: string;
  italian: string;
  japanese: string;
  kannada: string;
  korean: string;
  russian: string;
  sindhi: string;
  spanish: string;
  swedish: string;
  thai: string;
  turkish: string;
  ukrainian: string;
  urdu: string;
}
