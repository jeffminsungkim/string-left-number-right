# string-left-number-right [![Build Status](https://travis-ci.org/jeffminsungkim/string-left-number-right.svg?branch=master)](https://travis-ci.org/jeffminsungkim/string-left-number-right.svg?branch=master)[![Node Version Required][Node Version]][Node URL]

> Check if a string contains letters on the left and numbers on the right side


## Install

```
$ npm install string-left-number-right
```


## Usage

```js
const stringLeftNumberRight = require('string-left-number-right');

stringLeftNumberRight('orange8888');
//=> true

stringLeftNumberRight('orange');
//=> false

stringLeftNumberRight('8888orange');
//=> false

stringLeftNumberRight('8888');
//=> false

stringLeftNumberRight('orange8888abc');
//=> false

stringLeftNumberRight(8888);
//=> undefined
```

_Note: This module doesn't consider whitespace.
Please consider [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) the string beforehand._


## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)


[Node Version]: https://img.shields.io/node/v/string-left-number-right.svg?style=flat-square&label=works%20on%20node
[Node URL]: https://www.npmjs.com/package/string-left-number-right
