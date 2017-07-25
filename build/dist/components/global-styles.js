'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../config/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_style2.default, {
    styleId: 3332503807,
    css: 'body{font-family:monospace;color:' + _colors.black + ';font-size:1rem;margin:1rem}@media only screen and (min-width:700px){body{font-size:1.8rem}}h1,h2,h3,h4,h5,h6{line-height:1.1}a{color:' + _colors.blue + ';-webkit-transition:all .3s;transition:all .3s}a:hover{color:' + _colors.black + ';-webkit-transition:none;transition:none}.Typist .Cursor{display:inline-block}.Typist .Cursor--blinking{opacity:1;-webkit-animation:blink 1s linear infinite;animation:blink 1s linear infinite}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}'
  });
};