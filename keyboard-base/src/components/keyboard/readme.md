# reg-keyboard

This component is can handle inputs both globally, as well as scoping itself to only handle inputs that share the same parent. It is meant to be a container for multiple ```reg-keyboard-button``` elements.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                                      | Type      | Default |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `global`      | `global`       | If true, this keyboard will listen and attempt to control any input that has the class ```global-keyboard```. If false, this keyboard will listen and attempt to control any input beneath the current parent element of this component that has the class ```local-keyboard```. | `boolean` | `true`  |
| `inputWithin` | `input-within` | If set to true, and an input is put within the bounds of this keyboard, a press of a keyboard button will trigger focus on the keyboard element.                                                                                                                                 | `boolean` | `false` |


## Events

| Event           | Description                                                                                                                                                                                                                                                                                                                                                                                     | Type                          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `buttonPressed` | When the keyboard recieves a button press, this event will be dispached with the ```buttonName``` of the keyboard-button. Allows you to trigger side-effects (or primary event handling if a button's ```pressAction``` is set to 'none').                                                                                                                                                      | `CustomEvent<string>`         |
| `layoutChange`  | Inputs can have a dom property ```data-layout="{something}"``` that allows them to pass the name of a layout back to the keyboard component. If the keyboard detects that the current input has a different 'data-layout' property than the previous input, it will fire this event, which provides the name of the new layout specified on the current input's ```data-layout``` dom property. | `CustomEvent<null \| string>` |
| `openChange`    | When the keyboard becomes active or inactive, this event will fire to alert whether the keyboard is currently'in use / open' (true) or not (false).                                                                                                                                                                                                                                             | `CustomEvent<boolean>`        |


## CSS Custom Properties

| Name               | Description                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--keyboard-width` | This property will be added to the keyboard component to give a pixel value for the current total width of the keyboard. This will assist in your ability to accurately size keyboard keys. |


----------------------------------------------

*Keyboard-Blocks Web Component Library* - 2020
