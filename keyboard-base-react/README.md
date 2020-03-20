# React Keyboard Base Components

## Installation

### Step 1:
Place these scripts at the top of your HTML's ```head```:

```html
<script type="module" src="https://unpkg.com/@register-ui/keyboard-base@latest/dist/register-keyboard/register-keyboard.esm.js"></script>
<script nomodule src="https://unpkg.com/@register-ui/keyboard-base@latest/dist/register-keyboard/register-keyboard.js"></script>
```

### Step 2
Install the React types and JSX bindings for intellisense and React-specific syntax:

```shell
npm i @register-ui/keyboard-base-react
```

or

```shell
yarn add @register-ui/keyboard-base-react
```

### Step 3
Finished! Add components to your files like so:

```javascript
import { Keyboard, KeyboardButton } from "@register-ui/keyboard-base-react";
```

## Example:

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
