"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prependHTTPS = prependHTTPS;

var _prependHttp = require("./prepend-http");

/**
 * Internal dependencies
 */

/**
 * Prepends "https://" to a url, if it looks like something that is meant to be a TLD.
 *
 * Note: this will not replace "http://" with "https://".
 *
 * @param {string} url The URL to test.
 *
 * @example
 * ```js
 * const actualURL = prependHTTPS( 'wordpress.org' ); // https://wordpress.org
 * ```
 *
 * @return {string} The updated URL.
 */
function prependHTTPS(url) {
  if (!url) {
    return url;
  } // If url starts with http://, return it as is.


  if (url.startsWith('http://')) {
    return url;
  }

  url = (0, _prependHttp.prependHTTP)(url);
  return url.replace(/^http:/, 'https:');
}
//# sourceMappingURL=prepend-https.js.map