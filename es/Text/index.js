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

var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3965193747' + ' ' + 'text'
    },
    type === 'caption' && _react2.default.createElement(
      'span',
      {
        className: 'jsx-3965193747' + ' ' + 'caption'
      },
      children
    ),
    type === 'text' && _react2.default.createElement(
      'p',
      {
        className: 'jsx-3965193747' + ' ' + 'text'
      },
      children
    ),
    type === 'details' && _react2.default.createElement(
      'span',
      {
        className: 'jsx-3965193747' + ' ' + 'details'
      },
      children
    ),
    type === 'error' && _react2.default.createElement(
      'span',
      {
        className: 'jsx-3965193747' + ' ' + 'error'
      },
      children
    ),
    type === 'white' && _react2.default.createElement(
      'span',
      {
        className: 'jsx-3965193747' + ' ' + 'white'
      },
      children
    ),
    type === 'bold' && _react2.default.createElement(
      'span',
      {
        className: 'jsx-3965193747' + ' ' + 'bold'
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3965193747',
      css: '@media screen and (max-width:30em){.text.jsx-3965193747{font-family:\'Open Sans\',sans-serif;color:#333;margin:0;font-size:14px;line-height:1.6;}.caption.jsx-3965193747{font-size:16px;line-height:1.6;font-weight:400;}.details.jsx-3965193747{font-size:12px;color:#999;line-height:1.4;font-weight:400;}.error.jsx-3965193747{font-size:14px;color:#FF00BF;line-height:1.5;font-weight:400;}.white.jsx-3965193747{font-size:14px;color:#FFFFFF;line-height:1.5;font-weight:400;}.bold.jsx-3965193747{font-size:16px;line-height:1.6;font-weight:800;color:#666666;}}@media screen and (min-width:30em){.text.jsx-3965193747{font-family:\'Open Sans\',sans-serif;color:#333;margin:0;font-size:16px;line-height:1.6;}.caption.jsx-3965193747{font-size:18px;line-height:1.6;font-weight:400;}.details.jsx-3965193747{font-size:12px;color:#999;line-height:1.4;font-weight:400;}.error.jsx-3965193747{font-size:14px;color:#FF00BF;line-height:1.5;font-weight:400;}.white.jsx-3965193747{font-size:14px;color:#FFFFFF;line-height:1.5;font-weight:400;}.bold.jsx-3965193747{font-size:18px;line-height:1.6;font-weight:800;color:#666666;}}'
    })
  );
};

Text.defaultProps = {
  children: '',
  type: 'caption'
};

Text.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.oneOf(['caption', 'text', 'details', 'error', 'white', 'bold'])
};

exports.default = Text;