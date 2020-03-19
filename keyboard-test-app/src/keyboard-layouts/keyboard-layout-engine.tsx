import React, { useState } from "react";
import { KeyboardSymbol, KeyboardButtonProps } from "./keyboard-layout-types";
import { KeyboardButton } from "@register-ui/keyboard-base-react";

export function KeyboardLayoutEngine(props: {
  template: KeyboardSymbol;
  format?: "mobile" | "default";
  replaceKeys?: { [key: string]: KeyboardButtonProps };
}) {
  let { template, format, replaceKeys } = props;

  if (format === undefined) {
    format = "mobile";
  }
  const [isSymbol, setIsSymbol] = useState<boolean>(false);

  const [caseState, setCaseState] = useState<"shift" | "caps" | null>(null);

  let layout!: string;

  const getCurrentLayout = (): string[] => {
    if (format === "default") {
      if (caseState !== null) {
        layout = "layout-shift layout-desktop";
        return template["shift"];
      } else {
        layout = "layout-default layout-desktop";
        return template["default"];
      }
    } else {
      if (isSymbol !== false) {
        layout = "layout-mobile-symbol layout-mobile";
        return template["mobileSymbol"];
      } else if (caseState !== null) {
        layout = "layout-mobile-shift layout-mobile";
        return template["mobileShift"];
      } else {
        layout = "layout-mobile-default layout-mobile";
        return template["mobileDefault"];
      }
    }
  };

  const currentLayout = getCurrentLayout();

  const resolveKeyProperties = (k: string): KeyboardButtonProps => {
    if (replaceKeys && Object.keys(replaceKeys).includes(k)) {
      // @ts-ignore
      return replaceKeys[k as keyof replaceKeys];
    }
    if (k === "{bksp}") {
      return {
        deleteValue: 1,
        buttonName: "backspace",
        pressAction: "delete",
        innerHtml: "⌫"
      };
    } else if (k === "{tab}") {
      return {
        addValue: "  ",
        buttonName: "tab",
        pressAction: "add",
        innerHtml: "⇥"
      };
    } else if (k === "{lock}") {
      return {
        onPressed: () => {
          if (caseState !== "caps") {
            setCaseState("caps");
          } else {
            setCaseState(null);
          }
        },
        buttonName: "lock",
        pressAction: "none",
        innerHtml: "⇪"
      };
    } else if (k === "{enter}") {
      return {
        addValue: "\n",
        buttonName: "enter",
        pressAction: "add",
        innerHtml: "↩"
      };
    } else if (k === ("{shift1}" || "{shift2}")) {
      return {
        onPressed: () => {
          if (caseState === null) {
            setCaseState("shift");
          } else {
            setCaseState(null);
          }
        },
        buttonName: "shift",
        pressAction: "none",
        innerHtml: caseState === "shift" ? `⬆` : "⇧"
      };
    } else if (k === "{symbol}") {
      return {
        onPressed: () => {
          if (isSymbol) {
            setIsSymbol(false);
          } else {
            setIsSymbol(true);
          }
        },
        buttonName: "symbol",
        pressAction: "none",
        innerHtml: "?123"
      };
    } else if (k === "{space}") {
      return {
        addValue: " ",
        buttonName: "space",
        pressAction: "add",
        innerHtml: " "
      };
    }

    return {
      addValue: k,
      buttonName: k,
      pressAction: "add",
      innerHtml: k
    };
  };

  const keyArray: KeyboardButtonProps[][] = [];
  currentLayout.forEach(keyRow => {
    const rowKeyArray: KeyboardButtonProps[] = [];
    keyRow.split(" ").forEach(key => {
      rowKeyArray.push(resolveKeyProperties(key));
    });
    keyArray.push(rowKeyArray);
  });

  return (
    <div className={`keyboard-layout-container ${layout}`}>
      {keyArray.map(keyRow => (
        <div className="keyboard-row">
          {keyRow.map((keyboardKey: KeyboardButtonProps) => {
            const getProperties = () => {
              let keyProps = {};
              if (keyboardKey.pressAction === "add") {
                const { addValue, pressAction, buttonName } = keyboardKey;
                keyProps = {
                  addValue,
                  pressAction,
                  buttonName,
                  onPressed: () => {
                    if (caseState === "shift") {
                      window.requestAnimationFrame(() => {
                        setCaseState(null);
                      });
                    }
                  }
                };
                return keyProps;
              } else if (keyboardKey.pressAction === "delete") {
                const { deleteValue, pressAction, buttonName } = keyboardKey;
                keyProps = {
                  deleteValue,
                  pressAction,
                  buttonName,
                  onPressed: () => {
                    if (caseState === "shift") {
                      window.requestAnimationFrame(() => {
                        setCaseState(null);
                      });
                    }
                  }
                };
                return keyProps;
              } else {
                const { onPressed, buttonName, pressAction } = keyboardKey;
                return { onPressed, buttonName, pressAction };
              }
            };
            const keyProps = getProperties();
            return (
              <>
                <KeyboardButton {...keyProps}>
                  <span
                    dangerouslySetInnerHTML={{ __html: keyboardKey.innerHtml }}
                  />
                </KeyboardButton>
              </>
            );
          })}
        </div>
      ))}
    </div>
  );
}
