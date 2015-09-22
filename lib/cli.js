'use strict';

var program = require('commander');
var pkg = require('../package.json');
var open = require('open');
var nachosHome = require('./');

program
  .version(pkg.version)
  .description('A cli tool to get nachos home')
  .usage('[command]');

program
  .command('open')
  .description('Open the nachos home folder')
  .action(function () {
    open(nachosHome());
  });

program
  .command('print [innerPath]')
  .description('Print the nachos home folder')
  .option('-j, --json', 'output as json')
  .action(function (innerPath, options) {
    var path = nachosHome(innerPath);

    console.log(options.json ? {path: path} : path);
  });

/**
 * Handle cli arguments
 *
 * @param {string[]} argv - string array of the arguments
 */
module.exports = function (argv) {
  program
    .parse(argv);

  if (argv.length <= 2) {
    console.log(nachosHome());
  }
};
