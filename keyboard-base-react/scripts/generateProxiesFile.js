const docs = require('../../keyboard-base/dist/docs/docs.json')
const fs = require('fs')
const path = require('path')

const dashToPascalCase = str =>
  str
    .toLowerCase()
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('')

function getAllComponents() {
  const components = docs.components

  const componentObjs = []

  components.forEach(component => {
    /**
     * Vars Needed:
     * ========================
     * tagName: reg-animator
     * React Name: Animator
     * JSX Name: JSX.RegAnimator
     * HTML Name: HTMLRegAnimatorElement
     * ========================
     */

    // Example:
    // export const Animator = /*@__PURE__*/createReactComponent<JSX.RegAnimator, HTMLRegAnimatorElement>('reg-animator');

    let tagName
    let reactName
    let jsxName
    let htmlName

    tagName = component.tag

    const _reactNameArr = component.tag.split('-')
    if (_reactNameArr[0] === 'reg') { _reactNameArr.shift() } // [reg, animator] -> [animator]

    const baseName_Jsx_Html = dashToPascalCase(tagName) // reg-animator -> RegAnimator

    reactName =
      _reactNameArr.length > 1
        ? dashToPascalCase(_reactNameArr.join('-')) // my-component -> MyComponent
        : _reactNameArr[0].charAt(0).toUpperCase() + _reactNameArr[0].slice(1) // [animator] -> Animator

    jsxName = `JSX.${baseName_Jsx_Html}`
    htmlName = `HTML${baseName_Jsx_Html}Element`

    const reactComponentText = `export const ${reactName} = /*@__PURE__*/createReactComponent<${jsxName}, ${htmlName}>('${tagName}');`

    componentObjs.push(reactComponentText)
  })

  return componentObjs
}

const components = getAllComponents()
const data = `
import { JSX } from '@register-ui/keyboard-base';
import { createReactComponent } from './createComponent';\n\n
${components.join('\n')}
`
const destinationPath = path.join(__dirname, '../src/tools/index.ts')
fs.writeFileSync(destinationPath, data)
