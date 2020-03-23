import {
  Host,
  Element,
  Component,
  State,
  Listen,
  h,
  Prop,
  Event,
  EventEmitter
} from "@stencil/core";
import ResizeObserver from "resize-observer-polyfill";
@Component({
  tag: "reg-keyboard",
  styleUrl: "keyboard.css",
  shadow: false
})
export class MyComponent {
  selectionStart: number | null;

  selectionEnd: number | null;

  resizeObserver: ResizeObserver;

  keyboardId: number = keyboardIds++;

  @Element() hostElement: HTMLRegKeyboardElement;

  @State() focusedInput: HTMLInputElement | null = null;
  @State() layout: string | null = null;

  /**
   * If true, this keyboard will listen and attempt to control any input that has the class ```global-keyboard```.
   * If false, this keyboard will listen and attempt to control any input beneath the current parent element of this component that has the class ```local-keyboard```.
   */
  @Prop() global: boolean = true;

  /**
   * Inputs can have a dom property ```data-layout="{something}"``` that allows them to
   * pass the name of a layout back to the keyboard component. If the keyboard detects that
   * the current input has a different 'data-layout' property than the previous input, it will
   * fire this event, which provides the name of the new layout specified on the current input's
   * ```data-layout``` dom property.
   */
  @Event() layoutChange!: EventEmitter<string | null>;

  /**
   * When the keyboard becomes active or inactive, this event will fire to
   * alert whether the keyboard is currently'in use / open' (true) or not (false).
   */
  @Event() openChange!: EventEmitter<boolean>;

  @Listen("focusin", { target: "window" })
  onFocusElement(e: FocusEvent) {
    if (this.global !== true) return;
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.classList.contains("global-keyboard")) return;
    const input = e.target;
    input.addEventListener("input", this.onFocusedInputChange);
    input.addEventListener("focusout", this.onFocusOutElement);
    this.selectionStart = input.selectionStart;
    this.selectionEnd = input.selectionEnd;
    let layout = null;

    if (e.target.dataset?.layout) {
      layout = e.target.dataset.layout;
    }
    this.onFocusIn(layout, input, false);
  }

  @Listen("focusin", { target: "parent" })
  onFocusParentElement(e: FocusEvent) {
    if (this.global === true) return;
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.classList.contains("local-keyboard")) return;
    const input = e.target;
    input.addEventListener("input", this.onFocusedInputChange);
    input.addEventListener("focusout", this.onFocusOutElement);
    this.selectionStart = input.selectionStart;
    this.selectionEnd = input.selectionEnd;
    let layout = null;

    if (e.target.dataset?.layout) {
      layout = e.target.dataset.layout;
    }
    this.onFocusIn(layout, input, true);
  }

  onFocusIn = (
    layout: string | null,
    input: HTMLInputElement,
    global: boolean
  ) => {
    this.layoutChange.emit(layout);
    if (global) {
      this.openChange.emit(true);
    }
    this.layout = layout;
    this.focusedInput = input;
  };

  onFocusOutElement = (e: FocusEvent) => {
    this.focusedInput = null;
    this.openChange.emit(false);
    e.target?.removeEventListener("focusout", this.onFocusOutElement);
    e.target?.removeEventListener("input", this.onFocusedInputChange);
  };

  onFocusedInputChange = (e: InputEvent) => {
    console.log("change");
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.selectionStart = target.selectionStart + 1;
    this.selectionEnd = target.selectionEnd + 1;
  };

  setCursorPosition = (pos: number) => {
    window.requestAnimationFrame(() => {
      this.focusedInput.selectionStart = pos;
      this.focusedInput.selectionEnd = pos;
    });
  };

  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        this.hostElement.style.setProperty(
          "--keyboard-width",
          Math.round(width) + "px"
        );
        this.hostElement.style.setProperty(
          "--keyboard-height",
          Math.round(height) + "px"
        );
      }
    });

    const initialSize = this.hostElement.getBoundingClientRect();
    this.hostElement.style.setProperty(
      "--keyboard-width",
      String(Math.round(initialSize.width) + "px")
    );
    this.hostElement.style.setProperty(
      "--keyboard-height",
      String(Math.round(initialSize.height) + "px")
    );

    this.resizeObserver.observe(this.hostElement);

    if (document?.activeElement) {
      if (!(document.activeElement instanceof HTMLInputElement)) return;
      const target: HTMLInputElement = document.activeElement as HTMLInputElement;
      let shouldAttach: boolean = false;
      if (target.classList.contains("local-keyboard") && this.global !== true) {
        const parentEl = this.focusedInput.parentElement;
        const searchClass = `keyboard-parent-${this.keyboardId}`;
        parentEl.classList.add(searchClass);
        if (target.closest(searchClass)) {
          parentEl.classList.remove(searchClass);
          shouldAttach = true;
        }
      }

      if (
        target.classList.contains("global-keyboard") &&
        this.global === true
      ) {
        shouldAttach = true;
      }

      if (shouldAttach) {
        const input = target;
        input.addEventListener("input", this.onFocusedInputChange);
        input.addEventListener("focusout", this.onFocusOutElement);
        this.selectionStart = input.selectionStart;
        this.selectionEnd = input.selectionEnd;
        let layout = null;

        if (target.dataset?.layout) {
          layout = target.dataset.layout;
        }

        this.layoutChange.emit(layout);
        this.openChange.emit(true);
        this.layout = layout;
        this.focusedInput = input;
      }
    }
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this.hostElement);
  }

  @Listen("keyboardButtonPress")
  handleRegKeyboardButtonPress(
    e: CustomEvent<
      | { action: "add"; value: string }
      | { action: "delete"; value: number | "clear" }
    >
  ) {
    console.log(e.detail.action, e.detail.value);
    if (e.detail.action === "add") {
      this.onKeyboardButtonPressAdd(e.detail.value);
    } else if (e.detail.action === "delete") {
      if (e.detail.value === "clear") {
        this.focusedInput.value = "";
        this.selectionStart = 0;
        this.selectionEnd = 0;
      } else {
        this.onKeyboardButtonPressDelete(e.detail.value);
      }
    }
  }

  onKeyboardButtonPressAdd = (k: string) => {
    if (
      document.activeElement !== this.focusedInput &&
      document.activeElement.closest("input") !== this.focusedInput
    )
      return;
    if (this.focusedInput !== null) {
      const el = this.focusedInput;
      const val = this.focusedInput.value;
      const selStart = el.selectionStart;
      const newVal = val.slice(0, selStart) + k + val.slice(el.selectionEnd);
      el.value = newVal;
      const newStartPos = selStart + k.length;
      this.setCursorPosition(newStartPos);
    }
  };

  onKeyboardButtonPressDelete = (k: number) => {
    if (
      document.activeElement !== this.focusedInput &&
      document.activeElement.closest("input") !== this.focusedInput
    )
      return;
    if (this.focusedInput !== null) {
      const el = this.focusedInput;
      const val = this.focusedInput.value;
      const selStart = el.selectionStart;
      const newVal = val.slice(0, selStart - k) + val.slice(el.selectionEnd);
      el.value = newVal;
      const newStartPos = selStart - k;
      this.setCursorPosition(newStartPos);
    }
  };

  render() {
    const { focusedInput } = this;

    if (focusedInput !== null) {
      focusedInput.selectionStart = focusedInput.selectionEnd = this.selectionStart;
    }

    return (
      <Host
        class={{
          keyboardRoot: true,
          "keyboardRoot-active": !!focusedInput,
          "keyboardRoot-inactive": !focusedInput,
          [`keyboardRoot-layout-${this.layout}`]: this.layout !== null
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
let keyboardIds = 0;
