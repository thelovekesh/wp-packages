"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Children", {
  enumerable: true,
  get: function () {
    return _react.Children;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _react.Component;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _react.Fragment;
  }
});
Object.defineProperty(exports, "StrictMode", {
  enumerable: true,
  get: function () {
    return _react.StrictMode;
  }
});
Object.defineProperty(exports, "Suspense", {
  enumerable: true,
  get: function () {
    return _react.Suspense;
  }
});
Object.defineProperty(exports, "cloneElement", {
  enumerable: true,
  get: function () {
    return _react.cloneElement;
  }
});
exports.concatChildren = concatChildren;
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _react.createContext;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _react.createElement;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _react.createRef;
  }
});
Object.defineProperty(exports, "forwardRef", {
  enumerable: true,
  get: function () {
    return _react.forwardRef;
  }
});
Object.defineProperty(exports, "isValidElement", {
  enumerable: true,
  get: function () {
    return _react.isValidElement;
  }
});
Object.defineProperty(exports, "lazy", {
  enumerable: true,
  get: function () {
    return _react.lazy;
  }
});
Object.defineProperty(exports, "memo", {
  enumerable: true,
  get: function () {
    return _react.memo;
  }
});
Object.defineProperty(exports, "startTransition", {
  enumerable: true,
  get: function () {
    return _react.startTransition;
  }
});
exports.switchChildrenNodeName = switchChildrenNodeName;
Object.defineProperty(exports, "useCallback", {
  enumerable: true,
  get: function () {
    return _react.useCallback;
  }
});
Object.defineProperty(exports, "useContext", {
  enumerable: true,
  get: function () {
    return _react.useContext;
  }
});
Object.defineProperty(exports, "useDebugValue", {
  enumerable: true,
  get: function () {
    return _react.useDebugValue;
  }
});
Object.defineProperty(exports, "useDeferredValue", {
  enumerable: true,
  get: function () {
    return _react.useDeferredValue;
  }
});
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function () {
    return _react.useEffect;
  }
});
Object.defineProperty(exports, "useId", {
  enumerable: true,
  get: function () {
    return _react.useId;
  }
});
Object.defineProperty(exports, "useImperativeHandle", {
  enumerable: true,
  get: function () {
    return _react.useImperativeHandle;
  }
});
Object.defineProperty(exports, "useInsertionEffect", {
  enumerable: true,
  get: function () {
    return _react.useInsertionEffect;
  }
});
Object.defineProperty(exports, "useLayoutEffect", {
  enumerable: true,
  get: function () {
    return _react.useLayoutEffect;
  }
});
Object.defineProperty(exports, "useMemo", {
  enumerable: true,
  get: function () {
    return _react.useMemo;
  }
});
Object.defineProperty(exports, "useReducer", {
  enumerable: true,
  get: function () {
    return _react.useReducer;
  }
});
Object.defineProperty(exports, "useRef", {
  enumerable: true,
  get: function () {
    return _react.useRef;
  }
});
Object.defineProperty(exports, "useState", {
  enumerable: true,
  get: function () {
    return _react.useState;
  }
});
Object.defineProperty(exports, "useSyncExternalStore", {
  enumerable: true,
  get: function () {
    return _react.useSyncExternalStore;
  }
});
Object.defineProperty(exports, "useTransition", {
  enumerable: true,
  get: function () {
    return _react.useTransition;
  }
});

var _react = require("react");

/**
 * External dependencies
 */
// eslint-disable-next-line @typescript-eslint/no-restricted-imports

/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} WPElement
 */

/**
 * Object containing a React component.
 *
 * @typedef {import('react').ComponentType} WPComponent
 */

/**
 * Object containing a React synthetic event.
 *
 * @typedef {import('react').SyntheticEvent} WPSyntheticEvent
 */

/**
 * Object containing a React synthetic event.
 *
 * @template T
 * @typedef {import('react').RefObject<T>} RefObject<T>
 */

/**
 * Object that provides utilities for dealing with React children.
 */

/**
 * Creates a copy of an element with extended props.
 *
 * @param {WPElement} element Element
 * @param {?Object}   props   Props to apply to cloned element
 *
 * @return {WPElement} Cloned element.
 */

/**
 * A base class to create WordPress Components (Refs, state and lifecycle hooks)
 */

/**
 * Creates a context object containing two components: a provider and consumer.
 *
 * @param {Object} defaultValue A default data stored in the context.
 *
 * @return {Object} Context object.
 */

/**
 * Returns a new element of given type. Type can be either a string tag name or
 * another function which itself returns an element.
 *
 * @param {?(string|Function)} type     Tag name or element creator
 * @param {Object}             props    Element properties, either attribute
 *                                      set to apply to DOM node or values to
 *                                      pass through to element creator
 * @param {...WPElement}       children Descendant elements
 *
 * @return {WPElement} Element.
 */

/**
 * Returns an object tracking a reference to a rendered element via its
 * `current` property as either a DOMElement or Element, dependent upon the
 * type of element rendered with the ref attribute.
 *
 * @return {Object} Ref object.
 */

/**
 * Component enhancer used to enable passing a ref to its wrapped component.
 * Pass a function argument which receives `props` and `ref` as its arguments,
 * returning an element using the forwarded ref. The return value is a new
 * component which forwards its ref.
 *
 * @param {Function} forwarder Function passed `props` and `ref`, expected to
 *                             return an element.
 *
 * @return {WPComponent} Enhanced component.
 */

/**
 * A component which renders its children without any wrapping element.
 */

/**
 * Checks if an object is a valid WPElement.
 *
 * @param {Object} objectToCheck The object to be checked.
 *
 * @return {boolean} true if objectToTest is a valid WPElement and false otherwise.
 */

/**
 * @see https://reactjs.org/docs/react-api.html#reactmemo
 */

/**
 * Component that activates additional checks and warnings for its descendants.
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#useid
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#useinsertioneffect
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
 */

/**
 * @see https://reactjs.org/docs/hooks-reference.html#usetransition
 */

/**
 * @see https://reactjs.org/docs/react-api.html#starttransition
 */

/**
 * @see https://reactjs.org/docs/react-api.html#reactlazy
 */

/**
 * @see https://reactjs.org/docs/react-api.html#reactsuspense
 */

/**
 * Concatenate two or more React children objects.
 *
 * @param {...?Object} childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return {Array} The concatenated value.
 */
function concatChildren(...childrenArguments) {
  return childrenArguments.reduce((accumulator, children, i) => {
    _react.Children.forEach(children, (child, j) => {
      if (child && 'string' !== typeof child) {
        child = (0, _react.cloneElement)(child, {
          key: [i, j].join()
        });
      }

      accumulator.push(child);
    });

    return accumulator;
  }, []);
}
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param {?Object} children Children object.
 * @param {string}  nodeName Node name.
 *
 * @return {?Object} The updated children object.
 */


function switchChildrenNodeName(children, nodeName) {
  return children && _react.Children.map(children, (elt, index) => {
    if (typeof elt?.valueOf() === 'string') {
      return (0, _react.createElement)(nodeName, {
        key: index
      }, elt);
    }

    const {
      children: childrenProp,
      ...props
    } = elt.props;
    return (0, _react.createElement)(nodeName, {
      key: index,
      ...props
    }, childrenProp);
  });
}
//# sourceMappingURL=react.js.map