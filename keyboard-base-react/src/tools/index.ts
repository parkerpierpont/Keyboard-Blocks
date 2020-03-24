
import { JSX } from '@register-ui/keyboard-base';
import { createReactComponent } from './createComponent';


export const Keyboard = /*@__PURE__*/createReactComponent<JSX.RegKeyboard, HTMLRegKeyboardElement>('reg-keyboard');
export const KeyboardButton = /*@__PURE__*/createReactComponent<JSX.RegKeyboardButton, HTMLRegKeyboardButtonElement>('reg-keyboard-button');
export const KeyboardLayout = /*@__PURE__*/createReactComponent<JSX.RegKeyboardLayout, HTMLRegKeyboardLayoutElement>('reg-keyboard-layout');
