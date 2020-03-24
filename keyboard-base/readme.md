# Virtual Keyboard Blocks
### Building blocks for virtual keyboard components

These are building blocks for making efficient user-interfaces that utilize virtual keyboard components to handle user input. They are composable, and allow for both a global keyboard, and contextual keyboards that simply need to share a parent element.

**example:**
```html
<head>
  <script src="https://unpkg.com/@register-ui/keyboard-base@latest/dist/register-keyboard/register-keyboard.js"></script>
</head>
<body>
  <input class="global-keyboard" name="test-input" />
  <div style="padding: 24px; background: #eaeaea">
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

  <!-- Global Keyboard using the keyboard-layout component to generate the keys. -->
  <reg-keyboard global="true">
    <reg-keyboard-layout language="english" layout="condensed"></reg-keyboard-layout>
  </reg-keyboard>
</body>
```

## Keyboard Component
[Keyboard Component Documentation](https://github.com/parkerpierpont/Keyboard-Blocks/tree/master/keyboard-base/src/components/keyboard)

## Keyboard-Button Component
[Keyboard-Button Component Documentation](https://github.com/parkerpierpont/Keyboard-Blocks/tree/master/keyboard-base/src/components/keyboard-button)

## Keyboard-Layout Component
[Keyboard-Layout Component Documentation](https://github.com/parkerpierpont/Keyboard-Blocks/tree/master/keyboard-base/src/components/keyboard-layout)