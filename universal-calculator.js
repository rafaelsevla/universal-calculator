#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('./package.json');

program.version(pkg.version);
program
  .command('sum <number1> <number2>')
  .description('Sum two numbers')
  .action(function sum(number1, number2) {
    console.log(42);
  });
program.parse(process.argv);
