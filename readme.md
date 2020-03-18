# Stencil Component Starter

These are building blocks for making efficient user-interfaces that utilize virtual keyboard components to handle user input. They are composable, and allow for both a global keyboard, and contextual keyboards that simply need to share a parent element.

**example:**
```
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

## Keyboard Component
[Keyboard Component Documentation](./tree/master/src/components/keyboard)

## Keyboard-Button Component
[Keyboard-Button Component Documentation](./tree/master/src/components/keyboard-button)