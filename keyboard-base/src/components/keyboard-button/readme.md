# reg-keyboard-button
This component is to be placed within a ```reg-keyboard``` element. When pressed, this component will tell the keyboard component to update the main input. Styling and button actions being left open allows them to perform nearly any custom action.

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute      | Description                                                                                                                                                                                                                                                                                                                                                                                                      | Type                          | Default     |
| -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `addValue`                 | `add-value`    | The value that is added to the end of the input if the ```onPressAction``` prop is set to 'add'.                                                                                                                                                                                                                                                                                                                 | `string`                      | `""`        |
| `buttonName` _(required)_  | `button-name`  | The name of the button. Sets custom classes on the button for custom styling. e.g - if name is 'Enter' the main element will get the class of ```keyboardButton-root-Enter``` and the native button element will get the class of ```keyboardButton-Enter```.                                                                                                                                                    | `string`                      | `undefined` |
| `deleteValue`              | `delete-value` | The number of chars that are removed at the end of the input if the ```onPressAction``` prop is set to 'delete'. Can also be set to 'clear' which will delete the whole input field.                                                                                                                                                                                                                             | `"clear" \| number`           | `1`         |
| `pressAction` _(required)_ | `press-action` | The kinds of functions that this button supports. - add: adds a character or string to the input. The string add is defined by the ```addValue``` prop. - delete: removes characters from the input string. The number of characters removed is defined by the ```deleteValue``` prop. - none: has no default add or delete actions. You will need to handle custom behavior when the ```pressed``` event fires. | `"add" \| "delete" \| "none"` | `undefined` |
| `text`                     | `text`         | Inner Text, if you want the button to render html strings automatically.                                                                                                                                                                                                                                                                                                                                         | `string \| undefined`         | `undefined` |


## Events

| Event                     | Description                                         | Type                                                                                                |
| ------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `keyboardButtonPress`     |                                                     | `CustomEvent<{ action: "add"; value: string; } \| { action: "delete"; value: number \| "clear"; }>` |
| `keyboardButtonWillPress` | This event will fire on keyboard-button mouse-down; | `CustomEvent<void>`                                                                                 |
| `pressed`                 | This event will fire when the button is pressed;    | `CustomEvent<string>`                                                                               |


## Dependencies

### Used by

 - [reg-keyboard-layout](../keyboard-layout)

### Graph
```mermaid
graph TD;
  reg-keyboard-layout --> reg-keyboard-button
  style reg-keyboard-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Keyboard-Blocks Web Component Library* - 2020
