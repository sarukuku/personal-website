'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _homeLink = require('../components/home-link');

var _homeLink2 = _interopRequireDefault(_homeLink);

var _blogLink = require('../components/blog-link');

var _blogLink2 = _interopRequireDefault(_blogLink);

var _globalStyles = require('../components/global-styles');

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _helpers = require('../helpers');

var _colors = require('../config/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' });
var fluidvids = require('fluidvids.js');

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onToTopBtnClick = function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Make iframe embeds fluid
      _helpers.isBrowser && fluidvids.init({
        selector: ['iframe', 'object'], // runs querySelectorAll()
        players: ['www.youtube.com', 'player.vimeo.com', 'dotsub.com'] // players to support
      });

      // Hide the ToTopBtn on short pages
      if (_helpers.isBrowser && window.document.body.clientHeight > window.innerHeight) {
        this.toTopBtn.classList.remove('hidden');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var post = this.props.post;

      return _react2.default.createElement('div', { className: 'Blog', 'data-jsx': 1851130626
      }, _react2.default.createElement(_globalStyles2.default, null), _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 1851130626
      }, _react2.default.createElement(_homeLink2.default, null), ' or ', _react2.default.createElement(_blogLink2.default, null)), post && _react2.default.createElement('div', {
        'data-jsx': 1851130626
      }, _react2.default.createElement(_siteHead2.default, { title: (0, _helpers.decodeHtmlEntity)(post.title.rendered) }), _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 1851130626
      }, _react2.default.createElement('h1', { dangerouslySetInnerHTML: { __html: post.title.rendered }, 'data-jsx': 1851130626
      }), _react2.default.createElement('ul', { className: 'PostMeta', 'data-jsx': 1851130626
      }, _react2.default.createElement('li', {
        'data-jsx': 1851130626
      }, 'Published ', (0, _helpers.getDate)(post.date)), _react2.default.createElement('li', {
        'data-jsx': 1851130626
      }, 'Last updated ', (0, _helpers.getDate)(post.modified))), _react2.default.createElement('section', { className: 'PostContent', dangerouslySetInnerHTML: { __html: post.content.rendered }, 'data-jsx': 1851130626
      })), _react2.default.createElement('a', {
        href: '#',
        onClick: this.onToTopBtnClick,
        ref: function ref(toTopBtn) {
          _this2.toTopBtn = toTopBtn;
        },
        className: 'ToTopBtn hidden', 'data-jsx': 1851130626
      }, 'Jump to top')), !post && _react2.default.createElement('p', {
        'data-jsx': 1851130626
      }, 'The post couldn\'t be loaded, sorry!'), _react2.default.createElement(_style2.default, {
        styleId: 1851130626,
        css: '.wrap[data-jsx="1851130626"]{max-width:700px;margin:0 auto}.PostContent[data-jsx="1851130626"] *{max-width:100%}.PostContent[data-jsx="1851130626"] img{height:auto;margin:0 auto}.PostContent[data-jsx="1851130626"] ul,.PostContent[data-jsx="1851130626"] ol{padding-left:2rem}.PostContent[data-jsx="1851130626"] pre,.PostContent[data-jsx="1851130626"] code{padding:1rem;background-color:' + _colors.lightgray + ';overflow-x:auto}.PostMeta[data-jsx="1851130626"]{font-size:0.8rem;color:' + _colors.darkgray + ';list-style:none;padding-left:0}.ToTopBtn[data-jsx="1851130626"]{display:block;-webkit-text-align:center;text-align:center;font-weight:bold;color:' + _colors.black + ';background:' + _colors.lightgray + ';-webkit-text-decoration:none;text-decoration:none;padding:1rem}.hidden[data-jsx="1851130626"]{display:none !important}@media only screen and (min-width:700px){.PostMeta[data-jsx="1851130626"]{font-size:1.2rem}.PostContent[data-jsx="1851130626"] ul,.PostContent[data-jsx="1851130626"] ol{padding-left:3rem}}'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var id, post;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = query.id;
                _context.next = 3;
                return wp.posts().id(id).then(function (data) {
                  return data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 3:
                post = _context.sent;
                return _context.abrupt('return', { post: post });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;