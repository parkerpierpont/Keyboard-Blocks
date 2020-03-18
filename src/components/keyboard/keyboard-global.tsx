import { Host, Component, State, Listen, h } from '@stencil/core';
/**
 * This keyboard will listen and attempt to control any input that has the class ```global-keyboard```.
 */
@Component({
  tag: 'reg-keyboard-global',
  styleUrl: 'keyboard.css',
  shadow: false
})
export class GlobalKeyboard {

  selectionStart: number | null;

  selectionEnd: number | null;

  @State() focusedInput: HTMLInputElement | null = null;


  @Listen('focusin', { target: 'window' })
  onFocusElement(e: FocusEvent) {
    console.log(e);
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!(e.target.classList.contains('global-keyboard'))) return;
    const input = e.target;
    input.addEventListener('input', this.onFocusedInputChange);
    input.addEventListener('blur', this.onFocusOutElement);
    this.selectionStart = input.selectionStart;
    this.selectionEnd = input.selectionEnd;
    this.focusedInput = input;
  }

  onFocusOutElement(e: FocusEvent) {
    console.log('blurred');
    this.focusedInput = null;
    e.target.removeEventListener('blur', this.onFocusOutElement);
    e.target.removeEventListener('input', this.onFocusedInputChange);
  }

  onFocusedInputChange = (e: InputEvent) => {
    console.log('change');
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.selectionStart = target.selectionStart + 1;
    this.selectionEnd = target.selectionEnd + 1;
  }

  setCursorPosition = (pos: number) => {
    window.requestAnimationFrame(() => {
      this.focusedInput.selectionStart = pos;
      this.focusedInput.selectionEnd = pos;
    })
  }

  @Listen('keyboardButtonPress')
  handleRegKeyboardButtonPress(e: CustomEvent<{ action: 'add', value: string } | { action: 'delete', value: number | 'clear' }>) {
    console.log(e.detail.action, e.detail.value);
    if (e.detail.action === "add") {
      this.onKeyboardButtonPressAdd(e.detail.value);
    } else if (e.detail.action === "delete") {
      if (e.detail.value === 'clear') {
        this.focusedInput.value = "";
        this.selectionStart = 0;
        this.selectionEnd = 0;
      } else {
        this.onKeyboardButtonPressDelete(e.detail.value);
      }
    }
  }

  onKeyboardButtonPressAdd = (k: string) => {
    // if (document.activeElement !== this.focusedInput && document.activeElement.closest('input') !== this.focusedInput) return;
    if (this.focusedInput !== null) {
      const el = this.focusedInput;
      const val = this.focusedInput.value;
      const selStart = el.selectionStart;
      const newVal = val.slice(0, selStart) + k + val.slice(el.selectionEnd);
      el.value = newVal;
      const newStartPos = selStart + k.length;
      this.setCursorPosition(newStartPos);
    }
  }

  onKeyboardButtonPressDelete = (k: number) => {
    // if (document.activeElement !== this.focusedInput && document.activeElement.closest('input') !== this.focusedInput) return;
    if (this.focusedInput !== null) {
      const el = this.focusedInput;
      const val = this.focusedInput.value;
      const selStart = el.selectionStart;
      const newVal = val.slice(0, selStart - k) + val.slice(el.selectionEnd);
      el.value = newVal;
      const newStartPos = selStart - k;
      this.setCursorPosition(newStartPos);
    }
  }

  render() {
    const { focusedInput } = this;

    if (focusedInput !== null) {
      focusedInput.selectionStart = focusedInput.selectionEnd = this.selectionStart;
    }

    return (
      <Host>
        <reg-keyboard-button button-name="A" on-press-action="add" add-value="A">A</reg-keyboard-button>
        <slot></slot>
      </Host>);
  }
}
