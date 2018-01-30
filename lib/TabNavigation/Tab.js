'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../Container/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
  var tab = _ref.tab,
      children = _ref.children,
      containerType = _ref.containerType;

  return _react2.default.createElement(
    _index2.default,
    { type: containerType ? containerType : 'noborder' },
    children
  );
};
Tab.propTypes = {
  children: _propTypes2.default.node,
  tab: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    img: _propTypes2.default.string,
    square: _propTypes2.default.bool
  }).isRequired,
  wrapperName: _propTypes2.default.string,
  wrapperType: _propTypes2.default.string,
  containerType: _propTypes2.default.string
};

exports.default = Tab;