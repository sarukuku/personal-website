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

var _link = require('next\\dist\\lib\\link.js');

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

var _globalStyles = require('../components/global-styles');

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _blogLink = require('../components/blog-link');

var _blogLink2 = _interopRequireDefault(_blogLink);

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

      return _react2.default.createElement('div', null, _react2.default.createElement(_siteHead2.default, { title: 'Joonas Salovaara' }), _react2.default.createElement(_globalStyles2.default, null), _react2.default.createElement(_animatedBg2.default, { showDescription: showDescription }), _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 334842016
      }, _react2.default.createElement('h1', { onClick: function onClick(e) {
          e.target.setAttribute('contenteditable', true);
          e.target.focus();
          var el = e.target.querySelector('.Cursor');
          if (el) {
            el.remove();
          }
        }, 'data-jsx': 334842016
      }, _react2.default.createElement(_reactTypist2.default, {
        avgTypingSpeed: 40,
        startDelay: 400,
        onTypingDone: function onTypingDone() {
          _this2.onHeaderTyped();
        } }, 'Hi, I\'m Joonas')), _react2.default.createElement('div', { className: descriptionClass, 'data-jsx': 334842016
      }, _react2.default.createElement('p', {
        'data-jsx': 334842016
      }, 'I\'m a Web Developer at ', _react2.default.createElement('a', { href: 'https://bond-agency.com/', 'data-jsx': 334842016
      }, 'Bond Helsinki'), ' and a Computer Science student at University of Turku. I like solving problems & meeting new people. Currently I\'m helping to organize ', _react2.default.createElement('a', { href: 'https://twitter.com/helsinkijs', 'data-jsx': 334842016
      }, 'HelsinkiJS'), ' & ', _react2.default.createElement('a', { href: 'https://twitter.com/reacthelsinki', 'data-jsx': 334842016
      }, 'React Helsinki'), '.'), _react2.default.createElement('p', {
        'data-jsx': 334842016
      }, 'You can contact me via ', _react2.default.createElement('a', { href: 'mailto:joonas.salovaara@gmail.com', 'data-jsx': 334842016
      }, 'email'), ', ', _react2.default.createElement('a', { href: 'https://twitter.com/sarukuku', 'data-jsx': 334842016
      }, 'Twitter'), ' or ', _react2.default.createElement('a', { href: 'tel:+358456301896', 'data-jsx': 334842016
      }, 'phone'), '. If you want to find out more about me you can ', _react2.default.createElement(_blogLink2.default, null), ' or check out my ', _react2.default.createElement('a', { href: 'https://github.com/sarukuku', 'data-jsx': 334842016
      }, 'GitHub'), ' profile and ', _react2.default.createElement('a', { href: 'www.linkedin.com/in/joonas-salovaara', 'data-jsx': 334842016
      }, 'LinkedIn'), ' page.')), _react2.default.createElement(_style2.default, {
        styleId: 334842016,
        css: '.wrap[data-jsx="334842016"]{max-width:420px;z-index:10;background:rgba(255, 255, 255, 0.8)}@media only screen and (min-width:700px){.wrap[data-jsx="334842016"]{max-width:520px}}.description[data-jsx="334842016"]{opacity:0;-webkit-transition:all .4s;transition:all .4s}.description-state--visible[data-jsx="334842016"]{opacity:1}'
      })));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;