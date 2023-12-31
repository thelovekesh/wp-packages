"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyElement = void 0;

/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */
const isEmptyElement = element => {
  if (typeof element === 'number') {
    return false;
  }

  if (typeof element?.valueOf() === 'string' || Array.isArray(element)) {
    return !element.length;
  }

  return !element;
};

exports.isEmptyElement = isEmptyElement;
//# sourceMappingURL=utils.js.map