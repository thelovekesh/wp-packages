"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerComponent = void 0;

var _reactNative = require("react-native");

/**
 * External dependencies
 */

/**
 * Registers an app root component allowing the native system to run the app.
 *
 * @param {string}   appKey            Unique app name identifier.
 * @param {Function} componentProvider Function returning the app root React component.
 */
const registerComponent = (appKey, componentProvider) => {
  _reactNative.AppRegistry.registerComponent(appKey, componentProvider);
};

exports.registerComponent = registerComponent;
//# sourceMappingURL=react-platform.native.js.map