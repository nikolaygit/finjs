/**
 * @source https://github.com/nikolaygit/finjs/blob/master/fin.js
 * @license MIT https://github.com/nikolaygit/finjs/blob/master/LICENSE
 */
/* jshint -W040 */
"use strict";

;(function(root, name, definition) {
  if (typeof define === 'function' && define.amd) {
    define([], definition);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = definition();
  } else {
    root[name] = definition();
  }
})(this, 'fin', function() {

  var fin = function (num) {
    return Math.round(num * fin.__scaleFactor) / fin.__scaleFactor;
  };

  Object.defineProperty(fin, 'precision', {
    get: function() {
      return this.__precision;
    },
    set: function(value) {
      this.__precision = value;

      this.__scaleFactor = 1;
      for (var i = 1; i <= value; i++) {
        this.__scaleFactor = this.__scaleFactor * 10;
      }
    }
  });

  /**
   * The tax rate for calculating VAT
   *
   * @type {number}
   */
  fin.taxRate = 19;

  /**
   * The number of decimal places following the decimal point.
   *
   * @type {number}
   */
  fin.precision = 2;

  /**
   * Calculate VAT from net amount
   *
   * @param {number} netNumber the net amount
   * @returns {number} the VAT for the net amount
   */
  fin.vat = function(netNumber) {
    return this(netNumber * this.taxRate / 100);
  };

  /**
   * Calculate net from gross
   *
   * @param {number} grossNumber the gross amount
   * @returns {number} the net amount
   */
  fin.net = function(grossNumber) {
    return fin(grossNumber * 100 / (100 + this.taxRate));
  };

  /**
   * Calculate gross from net
   *
   * @param {number} netNumber the net amount
   * @returns {number} the gross amount
   */
  fin.gross = function(netNumber) {
    return fin(netNumber + fin.vat(netNumber));
  };

  /**
   * Calculate the VAT for the given gross amount.
   *
   * @param {number} grossNumber the gross amount
   * @returns {number} the VAT of the gross amount
   */
  fin.vatFromGross = function(grossNumber) {
    // TODO: simplify the calculation
    return fin.vat(fin.net(grossNumber));
  };

  return fin;
});
