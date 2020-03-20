import React from "react";
import { KeyboardLayoutEngine, english } from "../../keyboard-layouts";
import { KeyboardButton } from "@register-ui/keyboard-base-react";

export function GlobalKeyboardButtons() {
  return (
    <>
      <KeyboardLayoutEngine template={english} format="mobile" />
      <div className="keyboardNumpad-container">
        <div className="keyboardNumpad-row">
          <KeyboardButton buttonName="1" pressAction="add" addValue="1">1</KeyboardButton>
          <KeyboardButton buttonName="2" pressAction="add" addValue="2">2</KeyboardButton>
          <KeyboardButton buttonName="3" pressAction="add" addValue="3">3</KeyboardButton>
        </div>
        <div className="keyboardNumpad-row">
          <KeyboardButton buttonName="4" pressAction="add" addValue="4">4</KeyboardButton>
          <KeyboardButton buttonName="5" pressAction="add" addValue="5">5</KeyboardButton>
          <KeyboardButton buttonName="6" pressAction="add" addValue="6">6</KeyboardButton>
        </div>
        <div className="keyboardNumpad-row">
          <KeyboardButton buttonName="7" pressAction="add" addValue="7">7</KeyboardButton>
          <KeyboardButton buttonName="8" pressAction="add" addValue="8">8</KeyboardButton>
          <KeyboardButton buttonName="9" pressAction="add" addValue="9">9</KeyboardButton>
        </div>
      </div>
    </>
  );
}
