# finjs

* Financial calculator for taxes: calculate net, VAT and gross amounts.
* :de: Finanzrechner: Steuer, Netto, MwSt und Brutto berechnen.

[![NPM][npm-image]][npm-url]

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]

## Features:

* correct floating point calculations.
* calculate taxes, net, VAT and gross amounts.
* set precision of decimal places

Development features:

* unit tests for every function
* [UMD (Universal Module Definition)](https://github.com/umdjs/umd) - runs in Node, AMD or browser.

## Install

* node.js: ``npm i --save finjs``
* browser: ``<script src="/path/to/fin.js"></script>``

## Use

### Addition and Multiplication

* ``fin(0.1 + 0.2) === 0.3;`` // true
* ``fin(2.18 * 100) === 218;`` // true

### Net, Vat and Gross

* ``fin.vat(100) === 19;`` // true
* ``fin.gross(100) === 119;`` // true
* ``fin.net(119) === 100;`` // true
* ``fin.vatFromGross(119) === 19;`` // true
* ``fin.validateNetVatGross([100, 19, 119]) === true;`` // true

## Roadmap

* Create user-friendly github.io page for the calculations with social links.
* Add additional functions as needed for the creating of German invoices and calculation of taxes.

## Support

* If you find any issue or have a question, please [open a GitHub issue](https://github.com/nikolaygit/finjs/issues).

## License

[MIT](LICENSE)

## Inspiration

* Inspired by [Fincalc](https://github.com/pensierinmusica/fincalc).

## History

* 0.0.2 - add ``fin.validateNetVatGross([net, vat, gross])`` function and tests.
* 0.0.1 - initial commit


[npm-image]: https://nodei.co/npm/finjs.png?downloads=true
[npm-url]: https://npmjs.org/package/finjs
[ci-image]: https://travis-ci.org/nikolaygit/finjs.png?branch=master
[ci-url]: https://travis-ci.org/nikolaygit/finjs
[dependencies-image]: https://david-dm.org/nikolaygit/finjs.png
[dependencies-url]: https://david-dm.org/nikolaygit/finjs
[devdependencies-image]: https://david-dm.org/nikolaygit/finjs/dev-status.png
[devdependencies-url]: https://david-dm.org/nikolaygit/finjs#info=devDependencies
