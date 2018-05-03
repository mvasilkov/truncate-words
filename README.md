truncate-words
===

Truncates a string after a certain number of words.

```js
const truncateWords = require('truncate-words')
const a = 'The nuclear deal is based on lies.'
truncateWords(a, 4) // 'The nuclear deal is [...]'
```

This is similar to [the **truncatewords** filter][1] found in Django.

**truncate-words** can be used in Node.js and the browser.

Installation
---

[![npm][npm-image]][npm-url]

Choose one:

    npm install --save truncate-words

    yarn add truncate-words

Usage
---

```js
function truncateWords(string, count, [end])
```

**Arguments:**

`string` The string to be truncated. Required.

`count` The number of words to keep. Required.

`end` Replace the default ellipsis with your own. Optional.

[See more usage examples][2]

[1]: https://docs.djangoproject.com/en/dev/ref/templates/builtins/#truncatewords
[2]: https://github.com/mvasilkov/truncate-words/blob/master/test/test.js

[npm-image]: https://img.shields.io/npm/v/truncate-words.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/truncate-words
