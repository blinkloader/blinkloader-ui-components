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

var Link = function Link(_ref) {
  var type = _ref.type,
      children = _ref.children,
      href = _ref.href;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2918462617' + ' ' + 'link'
    },
    type == 'topnav' && _react2.default.createElement(
      'a',
      { href: href, className: 'jsx-2918462617' + ' ' + 'topnav'
      },
      children
    ),
    type == 'bottomnav' && _react2.default.createElement(
      'a',
      { href: href, className: 'jsx-2918462617' + ' ' + 'bottomnav'
      },
      children
    ),
    type == 'withintext' && _react2.default.createElement(
      'a',
      { href: href, className: 'jsx-2918462617' + ' ' + 'withintext'
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2918462617',
      css: '@media screen and (max-width:30em){.withintext.jsx-2918462617{color:#00adee;font-size:16px;text-decoration:none;}}@media screen and (min-width:30em){.withintext.jsx-2918462617{color:#00adee;font-size:18px;text-decoration:none;}}.link.jsx-2918462617{font-family:\'Open Sans\',sans-serif;color:#333;font-weight:400;line-height:1.6;}.topnav.jsx-2918462617{color:#00adee;font-size:18px;text-decoration:none;}.bottomnav.jsx-2918462617{font-size:16px;color:#a9a9a9;text-decoration:none;}.topnav.jsx-2918462617:hover{color:#63c8ff;font-size:18px;text-decoration:none;padding-bottom:5px;border-bottom:solid 2px #63c8ff;cursor:pointer;}.bottomnav.jsx-2918462617:hover{color:#63c8ff;cursor:pointer;}.withintext.jsx-2918462617:hover{color:#63c8ff;text-decoration:none;border-bottom:solid 1px #63c8ff;cursor:pointer;}'
    })
  );
};

Link.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.oneOf(['topnav', 'bottomnav', 'withintext']),
  href: _propTypes2.default.string
};

Link.defaultProps = {
  children: 'link',
  type: 'topnav',
  href: '/'
};

exports.default = Link;