# Internationalization (i18n)

Internationalization utilities for client-side localization. See [How to Internationalize Your Plugin](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/) for server-side documentation.

## Installation

Install the module:

```bash
npm install @wordpress/i18n --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._

## Usage

```js
import { sprintf, _n } from '@wordpress/i18n';

sprintf( _n( '%d hat', '%d hats', 4, 'text-domain' ), 4 );
// 4 hats
```

For a complete example, see the [Internationalization section of the Block Editor Handbook](https://developer.wordpress.org/block-editor/developers/internationalization/).

## API

<!-- START TOKEN(Autogenerated API docs) -->

### createI18n

Create an i18n instance

_Parameters_

-   _initialData_ `[LocaleData]`: Locale data configuration.
-   _initialDomain_ `[string]`: Domain for which configuration applies.
-   _hooks_ `[Hooks]`: Hooks implementation.

_Returns_

-   `I18n`: I18n instance.

### defaultI18n

Default, singleton instance of `I18n`.

### getLocaleData

Returns locale data by domain in a Jed-formatted JSON object shape.

_Related_

-   <http://messageformat.github.io/Jed/>

_Parameters_

-   _domain_ `[string]`: Domain for which to get the data.

_Returns_

-   `LocaleData`: Locale data.

### hasTranslation

Check if there is a translation for a given string (in singular form).

_Parameters_

-   _single_ `string`: Singular form of the string to look up.
-   _context_ `[string]`: Context information for the translators.
-   _domain_ `[string]`: Domain to retrieve the translated text.

_Returns_

-   `boolean`: Whether the translation exists or not.

### isRTL

Check if current locale is RTL.

**RTL (Right To Left)** is a locale property indicating that text is written from right to left. For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages, including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).

_Returns_

-   `boolean`: Whether locale is RTL.

### resetLocaleData

Resets all current Tannin instance locale data and sets the specified locale data for the domain. Accepts data in a Jed-formatted JSON object shape.

_Related_

-   <http://messageformat.github.io/Jed/>

_Parameters_

-   _data_ `[LocaleData]`: Locale data configuration.
-   _domain_ `[string]`: Domain for which configuration applies.

### setLocaleData

Merges locale data into the Tannin instance by domain. Accepts data in a Jed-formatted JSON object shape.

_Related_

-   <http://messageformat.github.io/Jed/>

_Parameters_

-   _data_ `[LocaleData]`: Locale data configuration.
-   _domain_ `[string]`: Domain for which configuration applies.

### sprintf

Returns a formatted string. If an error occurs in applying the format, the original format string is returned.

_Related_

-   <https://www.npmjs.com/package/sprintf-js>

_Parameters_

-   _format_ `string`: The format of the string to generate.
-   _args_ `...*`: Arguments to apply to the format.

_Returns_

-   `string`: The formatted string.

### subscribe

Subscribes to changes of locale data

_Parameters_

-   _callback_ `SubscribeCallback`: Subscription callback

_Returns_

-   `UnsubscribeCallback`: Unsubscribe callback

### \_n

Translates and retrieves the singular or plural form based on the supplied number.

_Related_

-   <https://developer.wordpress.org/reference/functions/_n/>

_Parameters_

-   _single_ `string`: The text to be used if the number is singular.
-   _plural_ `string`: The text to be used if the number is plural.
-   _number_ `number`: The number to compare against to use either the singular or plural form.
-   _domain_ `[string]`: Domain to retrieve the translated text.

_Returns_

-   `string`: The translated singular or plural form.

### \_nx

Translates and retrieves the singular or plural form based on the supplied number, with gettext context.

_Related_

-   <https://developer.wordpress.org/reference/functions/_nx/>

_Parameters_

-   _single_ `string`: The text to be used if the number is singular.
-   _plural_ `string`: The text to be used if the number is plural.
-   _number_ `number`: The number to compare against to use either the singular or plural form.
-   _context_ `string`: Context information for the translators.
-   _domain_ `[string]`: Domain to retrieve the translated text.

_Returns_

-   `string`: The translated singular or plural form.

### \_x

Retrieve translated string with gettext context.

_Related_

-   <https://developer.wordpress.org/reference/functions/_x/>

_Parameters_

-   _text_ `string`: Text to translate.
-   _context_ `string`: Context information for the translators.
-   _domain_ `[string]`: Domain to retrieve the translated text.

_Returns_

-   `string`: Translated context string without pipe.

### \_\_

Retrieve the translation of text.

_Related_

-   <https://developer.wordpress.org/reference/functions/__/>

_Parameters_

-   _text_ `string`: Text to translate.
-   _domain_ `[string]`: Domain to retrieve the translated text.

_Returns_

-   `string`: Translated text.

<!-- END TOKEN(Autogenerated API docs) -->

## Contributing to this package

This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.

To find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).

<br /><br /><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
