'use strict';

var exec = require('child_process').exec;
var pkg = require('../package.json');
var universalCalculator = './universal-calculator.js';
require('should');

describe('Universal Calculator', function() {
  it('Should return version of universal-calculator', function(done) {
    exec(universalCalculator + ' --version', function(err, stdout, stderr) {
      if (err) throw err;
      stdout.replace('\n', '').should.be.equal(pkg.version);
      done();
    });
  });
  it('Command "Universal Calculator sum 1 2" Should return 42', function(done) {
    exec(universalCalculator + ' sum 1 2', function(err, stdout, stderr) {
      if (err) throw err;
      Number(stdout).should.be.equal(42);
      done();
    });
  });
});
