import { KeyboardSymbol } from "../../../utils/keyboard-interfaces";

const french: KeyboardSymbol = {
  default: [
    "\u00B2 & \u00E9 \" ' ( - \u00E8 _ \u00E7 \u00E0 ) = {bksp}",
    "{tab} a z e r t y u i o p ^ $",
    "{lock} q s d f g h j k l m \u00F9 * {enter}",
    "{shift1} < w x c v b n , ; : ! {shift2}",
    ".com @ {space}"
  ],
  shift: [
    "{//} 1 2 3 4 5 6 7 8 9 0 \u00B0 + {bksp}",
    "{tab} A Z E R T Y U I O P \u00A8 \u00A3",
    "{lock} Q S D F G H J K L M % \u00B5 {enter}",
    "{shift1} > W X C V B N ? . / \u00A7 {shift2}",
    ".com @ {space}"
  ]
};

export default french;
