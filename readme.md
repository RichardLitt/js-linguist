# js-linguist

[![Build Status](https://travis-ci.org/RichardLitt/js-linguist.svg?branch=master)](https://travis-ci.org/RichardLitt/js-linguist)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Get GitHub Linguist data for a repository

## Install

```
$ npm install --save js-linguist
```

## Usage

```js
const jsLinguist = require('js-linguist');

jsLinguist('unicorns');
//=> 'unicorns & rainbows'
```

## API

### jsLinguist(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global js-linguist
```

```
$ js-linguist --help

  Usage
    js-linguist [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ js-linguist
    unicorns & rainbows
    $ js-linguist ponies
    ponies & rainbows
```

## Contribute

PRs accepted. Check out the [issues](https://github.com/RichardLitt/js-linguist/issues)!

## License

MIT © [Richard Littauer](http://burntfen.com)
