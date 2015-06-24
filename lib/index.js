'use strict';

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
  var isInvalid = _.any(params, function (param) {
    return typeof param !== 'string';
  });

  if (isInvalid) {
    throw new TypeError('Arguments to nachos-home must be strings');
  }

  return path.resolve.apply(path.resolve, [osHomedir(), '.nachos']
    .concat(Array.prototype.slice.call(params, 0)));
};