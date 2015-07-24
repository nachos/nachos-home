'use strict';

var debug = require('debug')('nachosHome');
var osHomedir = require('os-homedir');
var path = require('path');
var _ = require('lodash');

/**
 * Get nachos home directory with an optional sub paths
 * @param {(string | string[])} arguments - the sub paths
 * @returns {string} absolute path of nachos home with an optional sub paths
 */
module.exports = function () {
  var params = _.flattenDeep(_.compact(arguments));

  debug('building nacho home with: %s', params);
  var isInvalid = _.any(params, function (param) {
    return typeof param !== 'string';
  });

  if (isInvalid) {
    debug('detected as invalid arguments');
    throw new TypeError('Arguments to nachos-home must be strings');
  }

  return path.resolve.apply(path.resolve, [osHomedir(), '.nachos']
    .concat(Array.prototype.slice.call(params, 0)));
};