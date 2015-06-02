var program = require('commander');
var open = require("open");
var pkg = require('../package.json');
var nachosHome = require('./');

program
  .version(pkg.version)
  .description('A cli tool to get nachos home')
  .usage('[command]');

program
  .command('open')
  .description('Open the nachos home folder')
  .action(function() {
    open(nachosHome());
  });

program
  .parse(process.argv);

if (!program.args.length) console.log(nachosHome());