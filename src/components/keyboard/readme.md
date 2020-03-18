# reg-keyboard

This component is can handle inputs both globally, as well as scoping itself to only handle inputs that share the same parent. It is meant to be a container for multiple ```reg-keyboard-button``` elements.

<!-- Auto Generated Below -->
w

## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                                      | Type      | Default |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `global` | `global`  | If true, this keyboard will listen and attempt to control any input that has the class ```global-keyboard```. If false, this keyboard will listen and attempt to control any input beneath the current parent element of this component that has the class ```local-keyboard```. | `boolean` | `true`  |


----------------------------------------------
