"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _context;

// import '@babel/polyfill';
var isHas = (0, _includes["default"])(_context = [1, 2, 3]).call(_context, 2);
console.log(isHas);

var p = function p() {
  return new _promise["default"](function (resolve, reject) {
    resolve(100);
  });
};

function myFunc() {
  return _myFunc.apply(this, arguments);
}

function _myFunc() {
  _myFunc = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var b;
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return p();

          case 2:
            b = _context2.sent;
            console.log(b);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _myFunc.apply(this, arguments);
}

myFunc();

var arrowFunc = function arrowFunc() {
  return {
    a: 1,
    b: 2
  };
};

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    (0, _classCallCheck2["default"])(this, Point);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2["default"])(Point, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }]);
  return Point;
}();

var cp = new Point(25, 8);
console.log(cp.getX());