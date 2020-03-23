import { KeyboardSymbol } from "../../../utils/keyboard-interfaces";
const spanish: KeyboardSymbol = {
  default: [
    "\u007c 1 2 3 4 5 6 7 8 9 0 ' \u00bf {bksp}",
    "{tab} q w e r t y u i o p \u0301 +",
    "{lock} a s d f g h j k l \u00f1 \u007b \u007d {enter}",
    "{shift1} < z x c v b n m , . - {shift2}",
    ".com @ {space}"
  ],
  shift: [
    '\u00b0 ! " # $ % & / ( ) = ? \u00a1 {bksp}',
    "{tab} Q W E R T Y U I O P \u0308 *",
    "{lock} A S D F G H J K L \u00d1 \u005b \u005d {enter}",
    "{shift1} > Z X C V B N M ; : _ {shift2}",
    ".com @ {space}"
  ],
  mobileDefault: [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift1} z x c v b n m {bksp}",
    "{symbol} {space} {enter}"
  ],
  mobileShift: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "{shift1} Z X C V B N M {bksp}",
    "{symbol} {space} {enter}"
  ]
};
export default spanish;
