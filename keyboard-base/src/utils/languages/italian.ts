import { KeyboardSymbol } from "../keyboard-interfaces";
const italian: KeyboardSymbol = {
  default: [
    "\\ 1 2 3 4 5 6 7 8 9 0 ' \u00EC {bksp}",
    "{tab} q w e r t y u i o p \u00E8 +",
    "{lock} a s d f g h j k l \u00F2 \u00E0 \u00F9 {enter}",
    "{shift1} < z x c v b n m , . - {shift2}",
    ".com @ {space}"
  ],
  shift: [
    '| ! " \u00A3 $ % & / ( ) = ? ^ {bksp}',
    "{tab} Q W E R T Y U I O P \u00E9 *",
    "{lock} A S D F G H J K L \u00E7 \u00B0 \u00A7 {enter}",
    "{shift1} > Z X C V B N M ; : _ {shift2}",
    ".com @ {space}"
  ]
};
export default italian;
