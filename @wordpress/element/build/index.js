"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createInterpolateElement: true,
  Platform: true,
  renderToString: true,
  RawHTML: true
};
Object.defineProperty(exports, "Platform", {
  enumerable: true,
  get: function () {
    return _platform.default;
  }
});
Object.defineProperty(exports, "RawHTML", {
  enumerable: true,
  get: function () {
    return _rawHtml.default;
  }
});
Object.defineProperty(exports, "createInterpolateElement", {
  enumerable: true,
  get: function () {
    return _createInterpolateElement.default;
  }
});
Object.defineProperty(exports, "renderToString", {
  enumerable: true,
  get: function () {
    return _serialize.default;
  }
});

var _createInterpolateElement = _interopRequireDefault(require("./create-interpolate-element"));

var _react = require("./react");

Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _react[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _react[key];
    }
  });
});

var _reactPlatform = require("./react-platform");

Object.keys(_reactPlatform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactPlatform[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactPlatform[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

var _platform = _interopRequireDefault(require("./platform"));

var _serialize = _interopRequireDefault(require("./serialize"));

var _rawHtml = _interopRequireDefault(require("./raw-html"));
//# sourceMappingURL=index.js.map