'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('span', {
    'data-jsx': 3538155324
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', { className: 'HomeLink', 'data-jsx': 3538155324
  }, 'Go home')), _react2.default.createElement(_style2.default, {
    styleId: 3538155324,
    css: '.HomeLink:after{display:inline-block;content:\'\uD83C\uDFE0\';margin-left:.2rem;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.HomeLink:hover:after{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}'
  }));
};