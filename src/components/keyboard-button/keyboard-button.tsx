import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'reg-keyboard-button',
  styleUrl: 'keyboard-button.css',
  shadow: false
})
export class KeyboardButton {

  /**
   * The kinds of functions that this button supports.
   * - add: adds a character or string to the input. The string add is defined by the ```addValue``` prop.
   * - delete: removes characters from the input string. The number of characters
   * removed is defined by the ```deleteValue``` prop.
   * - function: executes a custom function passed to the ```customFunction``` prop.
   */
  @Prop() pressAction: 'add' | 'delete' | 'function';

  /**
   * The value that is added to the end of the input if the ```onPressAction``` prop is set to 'add'.
   */
  @Prop() addValue: string = '';

  /**
   * The number of chars that are removed at the end of the input if the ```onPressAction``` prop is set to 'delete'. Can also be set to 'clear' which will delete the whole input field.
   */
  @Prop() deleteValue: number | 'clear' = 1;

  /**
   * The name of the button. Sets custom classes on the button for custom styling.
   * e.g - if name is 'Enter' the main element will get the class of ```keyboardButton-root-Enter``` and the native button element will get the class of ```keyboardButton-Enter```.
   */
  @Prop() buttonName: string;

  /**
   * This event will fire if the ```onPressAction``` prop is set to 'function';
   */
  @Event() pressed: EventEmitter<string>;


  @Event() keyboardButtonPress: EventEmitter<{ action: 'add', value: string } | { action: 'delete', value: number | 'clear' }>;

  handleClick = (_e: MouseEvent) => {
    if (this.pressAction === 'add') {
      this.keyboardButtonPress.emit({ action: 'add', value: this.addValue });
    } else if (this.pressAction === 'delete') {
      this.keyboardButtonPress.emit({ action: 'delete', value: this.deleteValue });
    } else if (this.pressAction === "function") {
      this.pressed.emit(this.buttonName);
    } else {
      return;
    }
  }

  render() {
    return (
      <Host class={{
        "keyboardButton-root": true,
        [`keyboardButton-root-${this.buttonName}`]: !!this.buttonName
      }}>
        <button class={{
          "keyboardButton-nativeButton": true,
          [`keyboardButton-${this.buttonName}`]: !!this.buttonName
        }} onClick={this.handleClick} onMouseDown={(e) => e.preventDefault()}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}