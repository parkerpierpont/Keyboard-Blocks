import { KeyboardSymbol } from "../../../utils/keyboard-interfaces";
const german: KeyboardSymbol = {
  default: [
    "^ 1 2 3 4 5 6 7 8 9 0 \u00DF \u00B4 {bksp}",
    "{tab} q w e r t z u i o p \u00FC +",
    "{lock} a s d f g h j k l \u00F6 \u00E4 # {enter}",
    "{shift1} < y x c v b n m , . - {shift2}",
    ".com @ {space}"
  ],
  shift: [
    '\u00B0 ! " \u00A7 $ % & / ( ) = ? ` {bksp}',
    "{tab} Q W E R T Z U I O P \u00DC *",
    "{lock} A S D F G H J K L \u00D6 \u00C4 ' {enter}",
    "{shift1} > Y X C V B N M ; : _ {shift2}",
    ".com @ {space}"
  ]
};
export default german;
