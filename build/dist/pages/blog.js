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

var _globalStyles = require('../components/global-styles');

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _homeLink = require('../components/home-link');

var _homeLink2 = _interopRequireDefault(_homeLink);

var _helpers = require('../helpers');

var _colors = require('../config/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' });

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var posts = this.props.posts;

      return _react2.default.createElement('div', { className: 'Blog', 'data-jsx': 2712218143
      }, _react2.default.createElement(_siteHead2.default, { title: 'Blog of Joonas Salovaara' }), _react2.default.createElement(_globalStyles2.default, null), _react2.default.createElement(_homeLink2.default, null), _react2.default.createElement('h1', {
        'data-jsx': 2712218143
      }, 'Blog Posts'), _react2.default.createElement('ul', {
        'data-jsx': 2712218143
      }, posts && posts.map(function (post) {
        var postIsNew = (0, _helpers.isPostNew)(post);

        return _react2.default.createElement('li', { key: post.id, 'data-jsx': 2712218143
        }, _react2.default.createElement('span', { className: 'PostDate', 'data-jsx': 2712218143
        }, (0, _helpers.getDate)(post.date)), _react2.default.createElement(_link2.default, {
          key: post.id,
          href: { pathname: 'post', query: { id: post.id } },
          as: { pathname: 'post/' + post.id + '/' + post.slug } }, _react2.default.createElement('a', { 'data-new': postIsNew, dangerouslySetInnerHTML: { __html: post.title.rendered }, 'data-jsx': 2712218143
        })));
      })), !posts && _react2.default.createElement('p', {
        'data-jsx': 2712218143
      }, 'Couldn\'t load posts, sorry.', (0, _helpers.isBrowser)() && !navigator.onLine && _react2.default.createElement('span', {
        'data-jsx': 2712218143
      }, ' To me it seems that there\'s something wrong with your network. Maybe check that?'), (0, _helpers.isBrowser)() && navigator.onLine && _react2.default.createElement('span', {
        'data-jsx': 2712218143
      }, ' Your network seems OK to me. The problem is probably at my end.')), _react2.default.createElement(_style2.default, {
        styleId: 2712218143,
        css: 'ul[data-jsx="2712218143"]{padding-left:0;list-style:none}li[data-jsx="2712218143"]{margin-bottom:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:.5rem}a[data-new="true"][data-jsx="2712218143"]:before{content:\'New\';-webkit-text-transfomr:uppercase;text-transfomr:uppercase;font-weight:bold;color:' + _colors.black + ';display:inline-block;margin-right:1rem;background:' + _colors.yellow + ';padding:2px 4px}@media only screen and (min-width:700px){li[data-jsx="2712218143"]{padding:1rem}}li[data-jsx="2712218143"]:nth-child(odd){background:' + _colors.lightgray + '}.PostDate[data-jsx="2712218143"]{margin-right:1rem}'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var posts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return wp.posts().perPage(100).then(function (data) {
                  return data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 2:
                posts = _context.sent;
                return _context.abrupt('return', { posts: posts });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;