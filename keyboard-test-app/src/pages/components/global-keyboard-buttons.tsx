import React from "react";
import { KeyboardLayoutEngine, english } from "../../keyboard-layouts";

export function GlobalKeyboardButtons() {
  return (
    <>
      <KeyboardLayoutEngine template={english} format="mobile" />
    </>
  );
}
