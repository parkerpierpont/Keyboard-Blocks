# reg-keyboard-button
This component is to be placed within a ```reg-keyboard``` element. When pressed, this component will tell the keyboard component to update the main input. Styling and button actions being left open allows them to perform nearly any custom action.

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute      | Description                                                                                                                                                                                                                                                                                                                                                            | Type                              | Default     |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `addValue`       | `add-value`    | The value that is added to the end of the input if the ```onPressAction``` prop is set to 'add'.                                                                                                                                                                                                                                                                       | `string`                          | `''`        |
| `buttonName`     | `button-name`  | The name of the button. Sets custom classes on the button for custom styling. e.g - if name is 'Enter' the main element will get the class of ```keyboardButton-root-Enter``` and the native button element will get the class of ```keyboardButton-Enter```.                                                                                                          | `string`                          | `undefined` |
| `customFunction` | --             | The custom function to execute if the ```onPressAction``` prop is set to 'function';                                                                                                                                                                                                                                                                                   | `() => void`                      | `null`      |
| `deleteValue`    | `delete-value` | The number of chars that are removed at the end of the input if the ```onPressAction``` prop is set to 'delete'. Can also be set to 'clear' which will delete the whole input field.                                                                                                                                                                                   | `"clear" \| number`               | `1`         |
| `pressAction`    | `press-action` | The kinds of functions that this button supports. - add: adds a character or string to the input. The string add is defined by the ```addValue``` prop. - delete: removes characters from the input string. The number of characters removed is defined by the ```deleteValue``` prop. - function: executes a custom function passed to the ```customFunction``` prop. | `"add" \| "delete" \| "function"` | `undefined` |


## Events

| Event                 | Description | Type                                                                                                |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `keyboardButtonPress` |             | `CustomEvent<{ action: "add"; value: string; } \| { action: "delete"; value: number \| "clear"; }>` |


----------------------------------------------

