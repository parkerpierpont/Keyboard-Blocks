import React from 'react'
import ReactDOM from 'react-dom'

import { attachProps, createForwardRef, dashToPascalCase, isCoveredByReact } from './utils'

interface RegisterReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef?: React.Ref<ElementType>
  href?: string
  routerLink?: string
  ref?: React.Ref<any>
}

export const createReactComponent = <PropType, ElementType>(tagName: string) => {
  const displayName = dashToPascalCase(tagName)
  const ReactComponent = class extends React.Component<RegisterReactInternalProps<PropType>> {
    componentDidMount() {
      this.componentDidUpdate(this.props)
    }

    componentDidUpdate(prevProps: RegisterReactInternalProps<PropType>) {
      const node = ReactDOM.findDOMNode(this) as HTMLElement
      attachProps(node, this.props, prevProps)
    }

    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props

      const propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase()
          if (isCoveredByReact(eventName)) {
            (acc as any)[name] = (cProps as any)[name]
          }
        }
        return acc
      }, {})

      const newProps: RegisterReactInternalProps<PropType> = {
        ...propsToPass,
        ref: forwardedRef,
        style,
      }

      return React.createElement(tagName, newProps, children)
    }

    static get displayName() {
      return displayName
    }
  }
  return createForwardRef<PropType, ElementType>(ReactComponent, displayName)
}
