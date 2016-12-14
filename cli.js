#!/usr/bin/env node
'use strict'

var meow = require('meow')
const linguist = require('./')

var cli = meow([`
  Usage
    $ linguist

  Options
    --stdout, -s  Print to stdout instead of json. [Default: false]

  Examples
    $ linguist
    {JavaScript: 100}
    $ linguist -s
    100% JavaScript
`, {
  alias: {
    s: "stdout"
  }
}])

linguist({}, function (data) {
  if (cli.flags.stdout) {
    console.log(data)
  } else {
    return data
  }
})
