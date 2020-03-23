import { KeyboardSymbol } from "../keyboard-interfaces";
const turkish: KeyboardSymbol = {
  default: [
    '" 1 2 3 4 5 6 7 8 9 0 * - # {bksp}',
    "{tab} q w e r t y u ı o p ğ ü [ ]",
    "{lock} a s d f g h j k l ş i , {enter}",
    "{shift1} < z x c v b n m ö ç . | $ € {shift2}",
    ".com @ {space}"
  ],
  shift: [
    "é ! ' ^ + % & / ( ) = ? _ ~ {bksp}",
    "{tab} Q W E R T Y U I O P Ğ Ü { }",
    "{lock} A S D F G H J K L Ş İ ; {enter}",
    "{shift1} > Z X C V B N M Ö Ç : \\ ` ´ {shift2}",
    ".com @ {space}"
  ]
};
export default turkish;
