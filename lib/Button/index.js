'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var size = _ref.size;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1545272775' + ' ' + (size + ' flex flex-row justify-center items-center center')
    },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 20 20', role: 'status', className: 'jsx-1545272775' + ' ' + 'spinner'
      },
      _react2.default.createElement('path', { d: 'M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z', className: 'jsx-1545272775'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1545272775',
      css: '@-webkit-keyframes loading-jsx-1545272775{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes loading-jsx-1545272775{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.spinner.jsx-1545272775{-webkit-animation:loading-jsx-1545272775 .5s linear infinite;animation:loading-jsx-1545272775 .5s linear infinite;color:transparent;fill:#ffffff;height:90%;width:90%;}.large.jsx-1545272775{height:2.25rem;width:2.25rem;}.medium.jsx-1545272775{height:1.8rem;width:1.8rem;}.small.jsx-1545272775{height:1.5rem;width:1.5rem;}'
    })
  );
};

var Button = function Button(_ref2) {
  var onClick = _ref2.onClick,
      fullWidth = _ref2.fullWidth,
      size = _ref2.size,
      children = _ref2.children,
      href = _ref2.href,
      style = _ref2.style,
      loading = _ref2.loading;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-25150547' + ' ' + ((fullWidth ? 'full-width flex flex-row justify-center tc' : '') || '')
    },
    !href && _react2.default.createElement(
      'button',
      {
        onClick: onClick,
        style: style,
        className: 'jsx-25150547' + ' ' + ('button ' + (fullWidth ? size + ' full-width' : size))
      },
      loading ? _react2.default.createElement(Spinner, { size: size }) : children
    ),
    href && _react2.default.createElement(
      'a',
      {
        href: href,
        style: style,
        className: 'jsx-25150547' + ' ' + ('button ' + (fullWidth ? size + ' full-width' : size))
      },
      loading ? _react2.default.createElement(Spinner, { size: size }) : children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '25150547',
      css: 'button.jsx-25150547{border-color:transparent;outline:none;color:white;font-family:\'Open Sans\',sans-serif;background-color:#00adee;line-height:1.5;height:100%;vertical-align:middle;display:table-cell;text-shadow:0 1px 2px rgba(0,0,0,.2);cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);}a.button.jsx-25150547{text-decoration:none;border-color:transparent;outline:none;color:white;font-family:\'Open Sans\',sans-serif;background-color:#00adee;line-height:1.5;height:100%;vertical-align:middle;display:table-cell;text-shadow:0 1px 2px rgba(0,0,0,.2);cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);}button.jsx-25150547:focus,button.jsx-25150547:active,button.jsx-25150547:hover{background-color:#57bbf2;}a.button.jsx-25150547:focus,a.button.jsx-25150547:active,a.button.jsx-25150547:hover{background-color:#57bbf2;}.full-width.jsx-25150547{width:100%;}.large.jsx-25150547{font-size:1.5rem;padding:.5rem 1.5rem .6rem 1.5rem;border-radius:1rem;}.medium.jsx-25150547{padding:.375rem 1.2rem .415rem 1.2rem;font-size:1.2rem;border-radius:0.8rem;}.small.jsx-25150547{padding:.25rem .9rem .3rem .9rem;font-size:1rem;border-radius:0.6rem;}'
    })
  );
};

Button.propTypes = {
  children: _propTypes2.default.node,
  size: _propTypes2.default.oneOf(['large', 'medium', 'small']),
  onClick: _propTypes2.default.func,
  fullWidth: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  style: _propTypes2.default.object
};
Button.defaultProps = {
  size: 'small',
  fullWidth: false,
  href: '',
  style: {},
  loading: false,
  children: ''
};

Spinner.propTypes = {
  size: _propTypes2.default.oneOf(['large', 'medium', 'small'])
};
Spinner.defaultProps = {
  size: 'small'
};

exports.default = Button;