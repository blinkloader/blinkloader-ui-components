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

var _index = require('../Text/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var type = _ref.type,
      children = _ref.children,
      decoration = _ref.decoration;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1935684105'
    },
    type === 'border' && _react2.default.createElement(
      'div',
      {
        className: 'jsx-1935684105' + ' ' + 'wrap w-100 flex-column justify-center'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1935684105' + ' ' + 'border flex flex-column  justify-center items-center container'
        },
        children
      )
    ),
    type === 'noborder' && _react2.default.createElement(
      'div',
      {
        className: 'jsx-1935684105' + ' ' + 'noborder container'
      },
      children
    ),
    type === 'nopadding' && _react2.default.createElement(
      'div',
      {
        className: 'jsx-1935684105' + ' ' + 'nopadding container'
      },
      children
    ),
    type === 'page' && _react2.default.createElement(
      'div',
      {
        className: 'jsx-1935684105' + ' ' + 'page container'
      },
      children
    ),
    type === 'decoration' && _react2.default.createElement(
      'div',
      {
        className: 'jsx-1935684105' + ' ' + 'wrap w-100 flex-column justify-center'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1935684105' + ' ' + 'positionedBlock'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-1935684105' + ' ' + 'decoratedBlock'
          },
          _react2.default.createElement(
            _index2.default,
            { type: 'white' },
            decoration
          )
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1935684105' + ' ' + 'border flex flex-column  justify-center items-center container'
        },
        children
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1935684105',
      css: '.wrap.jsx-1935684105{position:relative;padding-top:10px;}.positionedBlock.jsx-1935684105{position:absolute;top:12px;width:100%;}.decoratedBlock.jsx-1935684105{background-color:#42B273;text-align:center;margin-left:auto;margin-right:auto;max-width:7rem;border-radius:0 0 3px 3px;}.container.jsx-1935684105{height:auto;width:100%;box-sizing:border-box;font-family:\'Open Sans\',sans-serif;color:#333;}.nopadding.jsx-1935684105{padding:0;}@media screen and (max-width:40em){.border.jsx-1935684105{border-width:2px;border-style:solid;border-color:rgb(240,240,240);border-radius:2rem;padding:1rem;text-align:center;box-shadow:0 8px 15px 0 rgba(5,57,106,.06);}.noborder.jsx-1935684105{padding:1rem;}.page.jsx-1935684105{padding:2rem;}}@media screen and (min-width:40em){.border.jsx-1935684105{border-width:2px;border-style:solid;border-color:rgb(240,240,240);border-radius:2rem;padding:2rem;text-align:center;box-shadow:0 8px 15px 0 rgba(5,57,106,.06);}.noborder.jsx-1935684105{padding:2rem;}.page.jsx-1935684105{padding:4rem;}}'
    })
  );
};

Container.propTypes = {
  children: _propTypes2.default.node.isRequired,
  decoration: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['border', 'noborder', 'page', 'decoration', 'nopadding']).isRequired
};

Container.defaultProps = {
  decoration: null
};

exports.default = Container;