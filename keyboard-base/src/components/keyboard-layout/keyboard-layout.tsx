import {
  Host,
  Component,
  h,
  Element,
  State,
  Prop,
  Watch,
  Listen
} from "@stencil/core";
import {
  KeyboardSymbol,
  keyboardLanguage,
  KeyboardLanguageMap,
  languageMapping,
  createLayout
} from "../../index";
import { KeyboardButtonProps } from "../../utils/keyboard-interfaces";
import ResizeObserver from "resize-observer-polyfill";
import english from "../../utils/languages/english";

@Component({
  tag: "reg-keyboard-layout",
  styleUrl: "keyboard-layout.scss"
})
export class KeyboardLayout {
  containerElement?: HTMLDivElement;
  resizeObserver?: ResizeObserver;

  @State() template: {
    default: string[];
    shift: string[];
    mobileDefault: string[];
    mobileShift: string[];
    mobileSymbol: string[];
    numbers: string[];
  };

  @State() layoutState: {
    symbols: boolean;
    caps: boolean;
    shift: boolean;
  } = { symbols: false, caps: false, shift: false };

  @Element() element: HTMLRegKeyboardLayoutElement;

  /**
   * The type of keyboard layout you'd like to render
   */
  @Prop() layout: "condensed" | "condensedNumpad" | "desktop" | "numpad" =
    "condensedNumpad";
  @Watch("layout")
  watchHandler(newValue, oldValue) {
    if (newValue === oldValue) return;
    this.layoutState = { symbols: false, caps: false, shift: false };
  }

  /**
   * If you'd like to modify a certain key, you can create an object that has
   * keys you'd like to modify.
   */
  @Prop() customKeys?: {
    [Key: string]: Omit<KeyboardButtonProps, "onPressed">;
  };

  /**
   * The language you'd like the keyboard to use (uses built-in language files).
   */
  @Prop() language: keyboardLanguage = "english";

  /**
   * If you'd like to use a different language than the build-in languages.
   */
  @Prop() customLanguageTemplate?: KeyboardSymbol;

  @Listen("pressed")
  onKeyboardButtonPressed(e: CustomEvent<string>) {
    console.log(e.detail);
    this.fireAfterKeyPress(e.detail);
  }

  determineLayout = (): string[] => {
    const {
      layout,
      layoutState: { symbols, caps, shift },
      template
    } = this;
    if (layout === "condensed" || layout === "condensedNumpad") {
      if (symbols) {
        return template["mobileSymbol"];
      } else if (caps || shift) {
        return template["mobileShift"];
      } else {
        return template["mobileDefault"];
      }
    } else if (layout === "desktop") {
      if (caps || shift) {
        return template["shift"];
      } else {
        return template["default"];
      }
    }
  };

  async componentDidLoad() {
    const handleOpenChange = (e: CustomEvent<boolean>) => {
      if (e.detail === false) {
        this.layoutState = { symbols: false, caps: false, shift: false };
      }
    };
    const keyboard = this.element.closest("reg-keyboard");
    keyboard.addEventListener("openChange", handleOpenChange);
    console.log(keyboard);
    const t = this.customLanguageTemplate
      ? createLayout(this.customLanguageTemplate)
      : await this.resolveLanguage(this.language);
    this.template = t;
  }

  resolveLanguage = async (
    language: keyof KeyboardLanguageMap
  ): Promise<{
    default: string[];
    shift: string[];
    mobileDefault: string[];
    mobileShift: string[];
    mobileSymbol: string[];
    numbers: string[];
  }> => {
    if (language === "english") return createLayout(english);
    const languageFile = languageMapping[language];
    const lang = createLayout(languageFile);
    return lang;
  };

  setupResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        this.containerElement.style.setProperty(
          "--keyboard-width",
          Math.round(width) + "px"
        );
        this.containerElement.style.setProperty(
          "--keyboard-height",
          Math.round(height) + "px"
        );
      }
    });

    const initialSize = this.containerElement.getBoundingClientRect();
    this.containerElement.style.setProperty(
      "--keyboard-width",
      String(Math.round(initialSize.width) + "px")
    );
    this.containerElement.style.setProperty(
      "--keyboard-height",
      String(Math.round(initialSize.height) + "px")
    );

    this.resizeObserver.observe(this.containerElement);
  };

  disconnectedCallback() {
    if (this.containerElement) {
      this.resizeObserver.unobserve(this.containerElement);
    }
  }

  handleCaseChangeKeyPress = (caseChange: "symbols" | "caps" | "shift") => {
    this.layoutState = {
      ...this.layoutState,
      [caseChange]: !this.layoutState[caseChange]
    };
  };

  fireAfterKeyPress = (keyName: string) => {
    if (keyName !== "shift" && keyName !== "caps" && this.layoutState.shift) {
      this.layoutState = { ...this.layoutState, shift: false };
    }
  };

  createKeyInfo = (k: string): KeyboardButtonProps => {
    const {
      customKeys,
      layoutState: { shift }
    } = this;
    if (!!customKeys && Object.keys(customKeys).includes(k)) {
      return customKeys[k];
    }

    switch (k) {
      case "{bksp}":
        return {
          deleteValue: 1,
          buttonName: "backspace",
          pressAction: "delete",
          text: "⌫"
        };
      case "{tab}":
        return {
          addValue: "  ",
          buttonName: "tab",
          pressAction: "add",
          text: "⇥"
        };
      case "{lock}":
        return {
          onPressed: () => {
            this.handleCaseChangeKeyPress("caps");
          },
          buttonName: "lock",
          pressAction: "none",
          text: "⇪"
        };
      case "{enter}":
        return {
          buttonName: "enter",
          pressAction: "none",
          text: "↩"
        };
      case "{shift1}" || "{shift2}":
        return {
          onPressed: () => {
            this.handleCaseChangeKeyPress("shift");
          },
          buttonName: "shift",
          pressAction: "none",
          text: shift ? `⬆` : "⇧"
        };
      case "{symbol}":
        return {
          onPressed: () => {
            this.handleCaseChangeKeyPress("symbols");
          },
          buttonName: "symbol",
          pressAction: "none",
          text: "?123"
        };
      case "{space}":
        return {
          addValue: " ",
          buttonName: "space",
          pressAction: "add",
          text: " "
        };
      case "{numpad-1}":
        return {
          addValue: ".",
          buttonName: "period",
          pressAction: "add",
          text: "."
        };
      default:
        return {
          addValue: k,
          buttonName: k,
          pressAction: "add",
          text: k
        };
    }
  };

  KeyboardLayout = (props: { type: "keyboard" | "numbers" }) => {
    const layout =
      props.type === "keyboard"
        ? this.determineLayout()
        : this.template["numbers"];
    const ButtonKey = (props: { name: string }) => {
      const finalProps = this.createKeyInfo(props.name);
      return (
        <reg-keyboard-button {...finalProps}>
          <slot name={finalProps.buttonName}></slot>
        </reg-keyboard-button>
      );
    };

    const layouts = [];
    layout.forEach(row => {
      let currentRow = [];
      const rowChars = row.split(" ");
      rowChars.forEach(char => {
        currentRow.push(char);
      });
      layouts.push(currentRow);
    });

    return layouts.map(row => (
      <div class="keyboard-row">
        {row.map(key => (
          <ButtonKey name={key}></ButtonKey>
        ))}
      </div>
    ));
  };

  render() {
    const {
      KeyboardLayout,
      resizeObserver,
      containerElement,
      setupResizeObserver
    } = this;
    if (resizeObserver === undefined && containerElement !== undefined) {
      setupResizeObserver();
    }
    return (
      <Host
        class={{
          "keyboard-layout-root": true,
          [`layout-${this.layout}`]: true,
          [`shift`]: this.layoutState.shift,
          [`caps`]: this.layoutState.caps,
          [`symbols`]: this.layoutState.symbols
        }}
      >
        <div
          class="keyboard-layout-container"
          ref={el => (this.containerElement = el as HTMLDivElement)}
        >
          {this.template && <KeyboardLayout type="keyboard" />}
          {this.template &&
            (this.layout === "condensedNumpad" || this.layout === "numpad") && (
              <KeyboardLayout type="numbers" />
            )}
        </div>
      </Host>
    );
  }
}
