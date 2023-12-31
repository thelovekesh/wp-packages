"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = require("@wordpress/url");

/**
 * WordPress dependencies
 */

/**
 * This appends a `wp_theme_preview` parameter to the REST API request URL if
 * the admin URL contains a `theme` GET parameter.
 *
 * @param {Record<string, any>} themePath
 * @return {import('../types').APIFetchMiddleware} Preloading middleware.
 */
const createThemePreviewMiddleware = themePath => (options, next) => {
  if (typeof options.url === 'string' && !(0, _url.hasQueryArg)(options.url, 'wp_theme_preview')) {
    options.url = (0, _url.addQueryArgs)(options.url, {
      wp_theme_preview: themePath
    });
  }

  if (typeof options.path === 'string' && !(0, _url.hasQueryArg)(options.path, 'wp_theme_preview')) {
    options.path = (0, _url.addQueryArgs)(options.path, {
      wp_theme_preview: themePath
    });
  }

  return next(options);
};

var _default = createThemePreviewMiddleware;
exports.default = _default;
//# sourceMappingURL=theme-preview.js.map