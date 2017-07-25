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
    'data-jsx': 2326805577
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog' }, _react2.default.createElement('a', { className: 'BlogLink', 'data-jsx': 2326805577
  }, 'read my blog')), _react2.default.createElement(_style2.default, {
    styleId: 2326805577,
    css: '.BlogLink:after{display:inline-block;content:\'\uD83D\uDCCB\';margin-left:.2rem;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.BlogLink:hover:after{-webkit-transform:rotate(10deg) scale(1.2);-ms-transform:rotate(10deg) scale(1.2);transform:rotate(10deg) scale(1.2)}'
  }));
};