"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeQueryArgs = removeQueryArgs;

var _getQueryArgs = require("./get-query-args");

var _buildQueryString = require("./build-query-string");

/**
 * Internal dependencies
 */

/**
 * Removes arguments from the query string of the url
 *
 * @param {string}    url  URL.
 * @param {...string} args Query Args.
 *
 * @example
 * ```js
 * const newUrl = removeQueryArgs( 'https://wordpress.org?foo=bar&bar=baz&baz=foobar', 'foo', 'bar' ); // https://wordpress.org?baz=foobar
 * ```
 *
 * @return {string} Updated URL.
 */
function removeQueryArgs(url, ...args) {
  const queryStringIndex = url.indexOf('?');

  if (queryStringIndex === -1) {
    return url;
  }

  const query = (0, _getQueryArgs.getQueryArgs)(url);
  const baseURL = url.substr(0, queryStringIndex);
  args.forEach(arg => delete query[arg]);
  const queryString = (0, _buildQueryString.buildQueryString)(query);
  return queryString ? baseURL + '?' + queryString : baseURL;
}
//# sourceMappingURL=remove-query-args.js.map