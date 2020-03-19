import { __rest } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import { attachProps, createForwardRef, dashToPascalCase, isCoveredByReact } from './utils';
export const createReactComponent = (tagName) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            const node = ReactDOM.findDOMNode(this);
            attachProps(node, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            const propsToPass = Object.keys(cProps).reduce((acc, name) => {
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (isCoveredByReact(eventName)) {
                        acc[name] = cProps[name];
                    }
                }
                return acc;
            }, {});
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: forwardedRef, style });
            return React.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};
//# sourceMappingURL=createComponent.js.map