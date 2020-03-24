import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "reg-keyboard-button",
  styleUrl: "keyboard-button.css",
  shadow: false
})
export class KeyboardButton {
  /**
   * The kinds of functions that this button supports.
   * - add: adds a character or string to the input. The string add is defined by the ```addValue``` prop.
   * - delete: removes characters from the input string. The number of characters
   * removed is defined by the ```deleteValue``` prop.
   * - none: has no default add or delete actions. You will need to handle custom behavior when the
   * ```pressed``` event fires.
   */
  @Prop() pressAction!: "add" | "delete" | "none";

  /**
   * The value that is added to the end of the input if the ```onPressAction``` prop is set to 'add'.
   */
  @Prop() addValue: string = "";

  /**
   * The number of chars that are removed at the end of the input if the ```onPressAction``` prop is set to 'delete'. Can also be set to 'clear' which will delete the whole input field.
   */
  @Prop() deleteValue: number | "clear" = 1;

  /**
   * The name of the button. Sets custom classes on the button for custom styling.
   * e.g - if name is 'Enter' the main element will get the class of ```keyboardButton-root-Enter``` and the native button element will get the class of ```keyboardButton-Enter```.
   */
  @Prop() buttonName!: string;

  /**
   * Inner Text, if you want the button to render html strings automatically.
   */
  @Prop() text?: string;

  /**
   * This event will fire when the button is pressed;
   */
  @Event() pressed!: EventEmitter<string>;

  /**
   * This event will fire on keyboard-button mouse-down;
   */
  @Event() keyboardButtonWillPress!: EventEmitter<void>;

  @Event() keyboardButtonPress!: EventEmitter<
    | { action: "add"; value: string }
    | { action: "delete"; value: number | "clear" }
  >;

  handleClick = (_e: MouseEvent) => {
    if (this.pressAction === "add") {
      this.keyboardButtonPress.emit({ action: "add", value: this.addValue });
      this.pressed.emit(this.buttonName);
    } else if (this.pressAction === "delete") {
      this.keyboardButtonPress.emit({
        action: "delete",
        value: this.deleteValue
      });
      this.pressed.emit(this.buttonName);
    } else {
      this.pressed.emit(this.buttonName);
    }
  };

  handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    this.keyboardButtonWillPress.emit();
  };

  render() {
    return (
      <Host
        class={{
          "keyboardButton-root": true,
          [`keyboardButton-root-${this.buttonName}`]: !!this.buttonName
        }}
      >
        <button
          class={{
            "keyboardButton-nativeButton": true,
            [`keyboardButton-${this.buttonName}`]: !!this.buttonName
          }}
          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
        >
          {this.text && this.text}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
