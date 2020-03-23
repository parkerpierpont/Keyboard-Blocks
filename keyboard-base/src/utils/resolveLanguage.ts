import { KeyboardLanguageMap } from "./keyboard-interfaces";
import { createLayout } from "./helpers/create-layout";
import {
  arabic as arabicLang,
  burmese as burmeseLang,
  english as englishLang,
  farsi as farsiLang,
  french as frenchLang,
  georgian as georgianLang,
  german as germanLang,
  hebrew as hebrewLang,
  hindi as hindiLang,
  italian as italianLang,
  japanese as japaneseLang,
  kannada as kannadaLang,
  korean as koreanLang,
  russian as russianLang,
  sindhi as sindhiLang,
  spanish as spanishLang,
  swedish as swedishLang,
  thai as thaiLang,
  turkish as turkishLang,
  ukrainian as ukrainianLang,
  urdu as urduLang
} from "./languages";

export const languageMapping: KeyboardLanguageMap = {
  arabic: arabicLang,
  burmese: burmeseLang,
  english: englishLang,
  farsi: farsiLang,
  french: frenchLang,
  georgian: georgianLang,
  german: germanLang,
  hebrew: hebrewLang,
  hindi: hindiLang,
  italian: italianLang,
  japanese: japaneseLang,
  kannada: kannadaLang,
  korean: koreanLang,
  russian: russianLang,
  sindhi: sindhiLang,
  spanish: spanishLang,
  swedish: swedishLang,
  thai: thaiLang,
  turkish: turkishLang,
  ukrainian: ukrainianLang,
  urdu: urduLang
};

export { createLayout };
