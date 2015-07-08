var expect = require('chai').expect;
var fin = require('../fin.js');

describe('fin', function() {

  var netVatGrossArr = [
    [100, 19, 119],
    [15000, 2850, 17850],
    [13000, 2470, 15470],
    [10000, 1900, 11900],
    [9000, 1710, 10710],
    [5000, 950, 5950],
    [1000, 190, 1190],
    [100, 19, 119],
    [50, 9.5, 59.5],
    [33, 6.27, 39.27],
    [20, 3.8, 23.8],
    [11, 2.09, 13.09],
    [0, 0, 0],
    [-11, -2.09, -13.09]
  ];

  describe('add', function() {

    it('should add integers', function() {
      var additions = [
        [-1, -1, -2],
        [-1, 0, -1],
        [0, 0, 0],
        [0, 1, 1],
        [1, 2, 3]
      ];

      additions.forEach(function(addition) {
        expect(fin(addition[0] + addition[1])).to.equal(addition[2]);
      });
    });

    it('should add floating numbers', function() {
      var additions = [
        [0.1, 0.1, 0.2],
        [0.1, 0.2, 0.3],
        [0.2, 0.1, 0.3],
        [0.1, 0.7, 0.8],
        [3000.57, 0.11, 3000.68]
      ];

      additions.forEach(function(addition) {
        expect(fin(addition[0] + addition[1])).to.equal(addition[2]);
      });
    });
  });

  describe('multiply', function() {

    it('should multiply floating numbers', function() {
      var multiplications = [
        [2.18, 100, 218]
      ];

      multiplications.forEach(function(multi) {
        expect(fin(multi[0] * multi[1])).to.equal(multi[2]);
      });
    });
  });

  describe('vat', function() {

    it('should have valid VAT input data', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin(netVatGross[0] + netVatGross[1])).to.equal(netVatGross[2]);
      });
    });

    it('should calculate VAT from net', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin.vat(netVatGross[0])).to.equal(netVatGross[1]);
      });
    });

    it('should calculate VAT from gross', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin.vatFromGross(netVatGross[2])).to.equal(netVatGross[1]);
      });
    });
  });

  describe('gross', function() {

    it('should calculate gross from net', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin.gross(netVatGross[0])).to.equal(netVatGross[2]);
      });
    });
  });

  describe('net', function() {

    it('should calculate net from gross', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin.net(netVatGross[2])).to.equal(netVatGross[0]);
      });
    });
  });

  describe('composition', function() {

    it('net + vat === gross', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin(netVatGross[0]+fin.vat(netVatGross[0]))).to.equal(fin.gross(netVatGross[0]));
      });
    });

    it('gross - net === vat', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin(fin.gross(netVatGross[0])-netVatGross[0])).to.equal(fin.vat(netVatGross[0]));
        expect(fin(netVatGross[2] - fin.net(netVatGross[2]))).to.equal(fin.vatFromGross(netVatGross[2]));
      });
    });

    it('should calculate gross from net and back', function() {
      netVatGrossArr.forEach(function(netVatGross) {
        expect(fin.net(fin.gross(netVatGross[0]))).to.equal(netVatGross[0]);
      });
    });
  });

});