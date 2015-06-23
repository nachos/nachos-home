'use strict';

var expect = require('chai').expect;
var nachosHome = require('../lib');
var path = require('path');
var osHomedir = require('os-homedir');

describe('nachos-home', function () {
  describe('without parameters', function () {
    it('should return the nachos home folder', function () {
      var home = nachosHome();

      expect(home).to.not.be.empty;
      expect(path.basename(home)).to.equal('.nachos');
      expect(path.dirname(home)).to.equal(osHomedir());
    });
  });

  describe('with invalid parameters', function () {
    it('should reject objects', function () {
      var fn = function () {
        nachosHome({test: 'test'});
      };

      expect(fn).to.throw(TypeError, 'Arguments to nachos-home must be strings');
    });

    it('should reject functions', function () {
      var fn = function () {
        nachosHome(function () {
          return 'test';
        });
      };

      expect(fn).to.throw(TypeError, 'Arguments to nachos-home must be strings');
    });
  });

  describe('with valid parameters', function () {
    it('should accept string params', function () {
      var home = nachosHome('test', 'test2');

      expect(home).to.not.be.empty;
      expect(path.basename(home)).to.equal('test2');
      expect(path.dirname(home)).to.equal(path.join(osHomedir(), '.nachos', 'test'));
    });

    it('should accept arrays', function () {
      var home = nachosHome(['test', 'test2']);

      expect(home).to.not.be.empty;
      expect(path.basename(home)).to.equal('test2');
      expect(path.dirname(home)).to.equal(path.join(osHomedir(), '.nachos', 'test'));
    });

    it('should accept nested arrays', function () {
      var home = nachosHome(['test', ['test2']]);

      expect(home).to.not.be.empty;
      expect(path.basename(home)).to.equal('test2');
      expect(path.dirname(home)).to.equal(path.join(osHomedir(), '.nachos', 'test'));
    });

    it('should accept mixed params', function () {
      var home = nachosHome('test', ['test2', 'test3']);

      expect(home).to.not.be.empty;
      expect(path.basename(home)).to.equal('test3');
      expect(path.dirname(home)).to.equal(path.join(osHomedir(), '.nachos', 'test', 'test2'));
    });
  });
});