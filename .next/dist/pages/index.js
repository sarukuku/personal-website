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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _siteHead = require('../components/site-head');

var _siteHead2 = _interopRequireDefault(_siteHead);

var _animatedBg = require('../components/animated-bg');

var _animatedBg2 = _interopRequireDefault(_animatedBg);

var _colors = require('../config/colors');

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      showDescription: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'onHeaderTyped',
    value: function onHeaderTyped() {
      this.setState({
        showDescription: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showDescription = this.state.showDescription;

      var descriptionClass = (0, _classnames2.default)({
        'description': true,
        'description-state--visible': showDescription
      });

      return _react2.default.createElement('div', null, _react2.default.createElement(_animatedBg2.default, { showDescription: showDescription }), _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 1707448599
      }, _react2.default.createElement(_siteHead2.default, { title: 'Joonas Salovaara' }), _react2.default.createElement('h1', { onClick: function onClick(e) {
          e.target.setAttribute('contenteditable', true);
          e.target.focus();
          var el = e.target.querySelector('.Cursor');
          if (el) {
            el.remove();
          }
        }, 'data-jsx': 1707448599
      }, _react2.default.createElement(_reactTypist2.default, {
        avgTypingSpeed: 40,
        startDelay: 400,
        onTypingDone: function onTypingDone() {
          _this2.onHeaderTyped();
        } }, 'Hi, I\'m Joonas')), _react2.default.createElement('div', { className: descriptionClass, 'data-jsx': 1707448599
      }, _react2.default.createElement('p', {
        'data-jsx': 1707448599
      }, 'I\'m a Digital Developer at ', _react2.default.createElement('a', { href: 'https://bond-agency.com/', 'data-jsx': 1707448599
      }, 'Bond Helsinki'), ' and a Computer Science student at University of Turku. I like solving problems & meeting new people. Currently I\'m helping to organize ', _react2.default.createElement('a', { href: 'https://twitter.com/helsinkijs', 'data-jsx': 1707448599
      }, 'HelsinkiJS'), ' & ', _react2.default.createElement('a', { href: 'https://twitter.com/reacthelsinki', 'data-jsx': 1707448599
      }, 'React Helsinki'), '.'), _react2.default.createElement('p', {
        'data-jsx': 1707448599
      }, 'You can contact me via ', _react2.default.createElement('a', { href: 'mailto:joonas.salovaara@gmail.com', 'data-jsx': 1707448599
      }, 'Email'), ', ', _react2.default.createElement('a', { href: 'https://twitter.com/sarukuku', 'data-jsx': 1707448599
      }, 'Twitter'), ' or ', _react2.default.createElement('a', { href: 'tel:+358456301896', 'data-jsx': 1707448599
      }, 'Phone'), '. If you want to find out more about me you can read my ', _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog' }, _react2.default.createElement('a', {
        'data-jsx': 1707448599
      }, 'blog')), ', check out my ', _react2.default.createElement('a', { href: 'https://github.com/sarukuku', 'data-jsx': 1707448599
      }, 'GitHub'), ' profile or ', _react2.default.createElement('a', { href: 'www.linkedin.com/in/joonas-salovaara', 'data-jsx': 1707448599
      }, 'LinkedIn'), ' page.')), _react2.default.createElement(_style2.default, {
        styleId: 1707448599,
        css: '\n            /* Define the "system" font family */\n            @font-face {\n              font-family: system;\n              font-style: normal;\n              font-weight: 300;\n              src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");\n            }\n\n            /* Now, let\'s apply it on an element */\n            body {\n              font-family: "system";\n              color: ' + _colors.black + '; \n            }\n\n            a {\n              color: ' + _colors.blue + ';\n              transition: all .2s;\n            }\n\n            a:hover {\n              color: ' + _colors.black + '\n            }\n\n            .wrap {\n              max-width: 420px;\n              z-index: 10;\n              background: rgba(255, 255, 255, 0.8);\n            }\n\n            .description {\n              opacity: 0;\n              transition: all .4s;\n            }\n\n            .description-state--visible {\n              opacity: 1;\n            }\n\n            // Typist css.\n            .Typist .Cursor {\n              display: inline-block;\n            }\n            \n              .Typist .Cursor--blinking {\n                opacity: 1;\n                animation: blink 1s linear infinite;\n              }\n\n            @keyframes blink {\n              0% {\n                opacity: 1;\n              }\n              \n              50% {\n                opacity: 0;\n              }\n              \n              100% {\n                opacity: 1;\n              }\n            }\n          '
      })));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;