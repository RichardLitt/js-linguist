'use strict'
const exec = require('child_process').exec
const parse = require('./parse')

function main (opts, cb) {
  // TODO Add opts
  opts = opts || {}

  exec('linguist', function (err, stdout, stderr) {
    if (err) {
      console.log(err)
    }

    if (stdout) {
      return cb(parse.trimLinguistOutput(stdout))
    }
  })
}

module.exports = main
