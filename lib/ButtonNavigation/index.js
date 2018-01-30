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

var ButtonNavigation = function ButtonNavigation(_ref) {
  var type = _ref.type,
      blocking = _ref.blocking,
      children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1611354122' + ' ' + (className || '')
    },
    _react2.default.createElement(
      'span',
      {
        className: 'jsx-1611354122' + ' ' + ('flex flex-row items-center justify-center pointer\n        ' + (type === 'back' ? 'back button' : blocking ? 'blocking button' : 'forward button'))
      },
      type === 'back' ? _react2.default.createElement(
        'span',
        {
          className: 'jsx-1611354122' + ' ' + 'backSign'
        },
        '\u2039'
      ) : '',
      _react2.default.createElement(
        'button',
        {
          onClick: onClick,
          className: 'jsx-1611354122' + ' ' + 'pointer'
        },
        children
      ),
      type === 'forward' ? _react2.default.createElement(
        'span',
        {
          className: 'jsx-1611354122' + ' ' + 'nextSign'
        },
        '\u203A'
      ) : ''
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1611354122',
      css: '.pointer.jsx-1611354122{cursor:pointer;}.button.jsx-1611354122{border-color:transparent;outline:none;border-radius:0.6rem;vertical-align:middle;width:100%;}button.jsx-1611354122{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;border-color:transparent;outline:none;font-family:\'Open Sans\',sans-serif;line-height:1.5;width:auto;position:relative;padding:.25rem 1rem .3rem 1rem;font-size:1rem;border-radius:0.6rem;background:transparent;}button.jsx-1611354122::-moz-focus-inner{border:0;}.backSign.jsx-1611354122{padding-left:0.5rem;padding-bottom:0.3rem;width:auto;font-size:1.5rem;background:transparent;}.nextSign.jsx-1611354122{padding-right:0.5rem;padding-bottom:0.3rem;width:auto;font-size:1.5rem;background:transparent;}.back.jsx-1611354122{background-color:#eeeeee;color:#333333;}.back.jsx-1611354122 button.jsx-1611354122{color:#333333;}.back.jsx-1611354122:focus .backSign.jsx-1611354122,.back.jsx-1611354122:hover,.back.jsx-1611354122:active{background-color:#e5e5e5;cursor:pointer;}.blocking.jsx-1611354122{text-shadow:0 1px 2px rgba(0,0,0,.2);background-color:#cccccc;color:white;}.blocking.jsx-1611354122 button.jsx-1611354122{text-shadow:0 1px 2px rgba(0,0,0,.2);color:white;}.blocking.jsx-1611354122:focus,.blocking.jsx-1611354122:hover,.blocking.jsx-1611354122:active{opacity:0.7;cursor:pointer;}.forward.jsx-1611354122{text-shadow:0 1px 2px rgba(0,0,0,.2);background-color:#33cc75;color:white;}.forward.jsx-1611354122 button.jsx-1611354122{text-shadow:0 1px 2px rgba(0,0,0,.2);color:white;}.forward.jsx-1611354122:focus,.forward.jsx-1611354122:hover,.forward.jsx-1611354122:active{background-color:#26d66f;cursor:pointer;}.fg-1.jsx-1611354122{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}'
    })
  );
};

ButtonNavigation.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.oneOf(['back', 'forward', 'finish']),
  onClick: _propTypes2.default.func,
  blocking: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = ButtonNavigation;