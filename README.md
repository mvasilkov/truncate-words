truncate-words
===

Truncates a string after a certain number of words.

```js
const truncateWords = require('truncate-words')
const a = 'The nuclear deal is based on lies.'
truncateWords(a, 4) // 'The nuclear deal is [...]'
```

This is similar to [the **truncatewords** filter][1] found in Django.

[1]: https://docs.djangoproject.com/en/dev/ref/templates/builtins/#truncatewords
