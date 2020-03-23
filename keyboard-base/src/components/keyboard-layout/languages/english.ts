import { KeyboardSymbol } from "../../../utils/keyboard-interfaces";

const english: KeyboardSymbol = {
  default: [
    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "{tab} q w e r t y u i o p [ ] \\",
    "{lock} a s d f g h j k l ; ' {enter}",
    "{shift1} z x c v b n m , . / {shift2}",
    ".com @ {space}"
  ],
  shift: [
    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
    "{tab} Q W E R T Y U I O P { } |",
    '{lock} A S D F G H J K L : " {enter}',
    "{shift1} Z X C V B N M < > ? {shift2}",
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
  ],
  mobileSymbol: [
    "~ ! @ # $ % ^ & * ?",
    "( ) < > + - = _ |",
    `{shift1} / \\ " ' . ; : {bksp}`,
    "{symbol} {space} {enter}"
  ]
};

export default english;
