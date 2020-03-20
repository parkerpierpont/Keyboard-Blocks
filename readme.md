# Virtual Keyboard Blocks
### Building blocks for virtual keyboard components

These are building blocks for making efficient user-interfaces that utilize virtual keyboard components to handle user input. They are composable, and allow for both a global keyboard, and contextual keyboards that simply need to share a parent element.

----------------------------------------------

**Vanilla JS / HTML Example:**

```html
<input class="global-keyboard" name="test-input" />
<div style="padding: 24px; background: #f1f1f1">
  <!-- Isolated Keyboard (only handles inputs within this parent) -->

  <input class="local-keyboard" name="test-input-2" />
  <br />

  <reg-keyboard global='false'>
    <reg-keyboard-button button-name="A" press-action="add" add-value="A">A</reg-keyboard-button>
  </reg-keyboard>

</div>
<!-- Global Keyboard (handles inputs within entire app, besides ones controlled by local keyboards) -->
<reg-keyboard global="true">
  <reg-keyboard-button button-name="A" press-action="add" add-value="A">A</reg-keyboard-button>
</reg-keyboard>
```

----------------------------------------------

**React Example:**

```jsx
import * as React from "react";
import "./styles.scss";
import { Keyboard, KeyboardButton } from "@register-ui/keyboard-base-react";

export default function App() {
  return (
    <input className="global-keyboard" name="test-input" />

    <div style={{padding: 24, background: "#f1f1f1"}}>
      <input className="local-keyboard" name="test-input-2" />
      <br />

      {/* Isolated Keyboard (only handles inputs within this parent) */}
      <Keyboard global={false}>
        <KeyboardButton buttonName="A" pressAction="add" addValue="A">A</KeyboardButton>
      </Keyboard>
    </div>

    {/* Global Keyboard (handles inputs within entire app, besides ones controlled by local keyboards) */}
    <Keyboard global={true}>
        <KeyboardButton buttonName="A" pressAction="add" addValue="A">A</KeyboardButton>
    </Keyboard>
  );
}
```

## Keyboard Component
[Keyboard Component Documentation](https://github.com/parkerpierpont/Keyboard-Blocks/tree/master/keyboard-base/src/components/keyboard)

## Keyboard-Button Component
[Keyboard-Button Component Documentation](https://github.com/parkerpierpont/Keyboard-Blocks/tree/master/keyboard-base/src/components/keyboard-button)