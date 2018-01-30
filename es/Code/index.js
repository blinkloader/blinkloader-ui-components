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

var Code = function Code(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'pre',
    {
      className: 'jsx-3259659402' + ' ' + 'code'
    },
    _react2.default.createElement(
      'code',
      {
        className: 'jsx-3259659402'
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3259659402',
      css: 'pre.jsx-3259659402{margin:0;}'
    })
  );
};

Code.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Code;