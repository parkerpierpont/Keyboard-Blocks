import React from "react";
import { Keyboard } from "@register-ui/keyboard-base-react";
import { GlobalKeyboardButtons } from "./components";

export default function GlobalKeyboardPage() {
  return (
    <div
      onMouseDown={e => e.preventDefault()}
      className="global-keyboard-container"
    >
      <Keyboard global={true}>
        <GlobalKeyboardButtons />
      </Keyboard>
    </div>
  );
}
