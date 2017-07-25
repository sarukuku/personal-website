'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  require('particles.js');
}

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.particlesJS.load('particles-js', 'static/particles.json', function () {
        //console.log('callback - particles.js config loaded')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var showDescription = this.props.showDescription;

      var animatedBgClass = (0, _classnames2.default)({
        'animated-bg': true,
        'animated-bg-state--visible': showDescription
      });

      return _react2.default.createElement('div', {
        'data-jsx': 3834572263
      }, _react2.default.createElement('div', { className: animatedBgClass, id: 'particles-js', 'data-jsx': 3834572263
      }), _react2.default.createElement(_style2.default, {
        styleId: 3834572263,
        css: '.animated-bg[data-jsx="3834572263"]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:0;-webkit-transition:all 2s;transition:all 2s}.animated-bg-state--visible[data-jsx="3834572263"]{opacity:1}'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;