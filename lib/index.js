var userhome = require('user-home');
var path = require('path');

module.exports = function () {
  return path.resolve.apply(path.resolve, [userhome, '.nachos']
    .concat(Array.prototype.slice.call(arguments, 0)));
};