"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterURLForDisplay = filterURLForDisplay;

/**
 * Returns a URL for display.
 *
 * @param {string}      url       Original URL.
 * @param {number|null} maxLength URL length.
 *
 * @example
 * ```js
 * const displayUrl = filterURLForDisplay( 'https://www.wordpress.org/gutenberg/' ); // wordpress.org/gutenberg
 * const imageUrl = filterURLForDisplay( 'https://www.wordpress.org/wp-content/uploads/img.png', 20 ); // …ent/uploads/img.png
 * ```
 *
 * @return {string} Displayed URL.
 */
function filterURLForDisplay(url, maxLength = null) {
  // Remove protocol and www prefixes.
  let filteredURL = url.replace(/^(?:https?:)\/\/(?:www\.)?/, ''); // Ends with / and only has that single slash, strip it.

  if (filteredURL.match(/^[^\/]+\/$/)) {
    filteredURL = filteredURL.replace('/', '');
  }

  const mediaRegexp = /([\w|:])*\.(?:jpg|jpeg|gif|png|svg)/;

  if (!maxLength || filteredURL.length <= maxLength || !filteredURL.match(mediaRegexp)) {
    return filteredURL;
  } // If the file is not greater than max length, return last portion of URL.


  filteredURL = filteredURL.split('?')[0];
  const urlPieces = filteredURL.split('/');
  const file = urlPieces[urlPieces.length - 1];

  if (file.length <= maxLength) {
    return '…' + filteredURL.slice(-maxLength);
  } // If the file is greater than max length, truncate the file.


  const index = file.lastIndexOf('.');
  const [fileName, extension] = [file.slice(0, index), file.slice(index + 1)];
  const truncatedFile = fileName.slice(-3) + '.' + extension;
  return file.slice(0, maxLength - truncatedFile.length - 1) + '…' + truncatedFile;
}
//# sourceMappingURL=filter-url-for-display.js.map