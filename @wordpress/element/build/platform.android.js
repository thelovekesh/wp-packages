"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

/**
 * External dependencies
 */
const Platform = { ..._reactNative.Platform,
  OS: 'native',
  select: spec => {
    if ('android' in spec) {
      return spec.android;
    } else if ('native' in spec) {
      return spec.native;
    }

    return spec.default;
  },
  isNative: true,
  isAndroid: true
};
var _default = Platform;
exports.default = _default;
//# sourceMappingURL=platform.android.js.map