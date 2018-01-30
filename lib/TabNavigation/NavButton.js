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

var NavButton = function NavButton(_ref) {
  var name = _ref.name,
      img = _ref.img,
      onClick = _ref.onClick,
      square = _ref.square;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3801565283' + ' ' + 'navwrap'
    },
    _react2.default.createElement(
      'button',
      { onClick: onClick, className: 'jsx-3801565283' + ' ' + 'navbutton flex flex-row justify-around items-center'
      },
      _react2.default.createElement('img', { src: img, style: { maxHeight: '30px' }, className: 'jsx-3801565283'
      }),
      ' ',
      !!square && _react2.default.createElement(
        'span',
        {
          className: 'jsx-3801565283'
        },
        name
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3801565283',
      css: 'span.jsx-3801565283{padding-left:5px;}.navwrap.jsx-3801565283{display:inline-block;padding:5px;}.navbutton.jsx-3801565283{font-family:\'Open Sans\',sans-serif;font-size:16px;font-weight:600;background-color:white;border:transparent;border-bottom:solid 2px transparent;outline:none;padding:5px;}.navbutton.jsx-3801565283:focus{border-bottom:solid 2px #00adee;}.navbutton.jsx-3801565283:hover{border-bottom:solid 2px #00adee;opacity:0.7;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;}'
    })
  );
};
NavButton.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = NavButton;