'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Link').add('topnav', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'topnav' },
    'Docs'
  );
}).add('bottomnav', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'bottomnav' },
    'Quick start'
  );
}).add('within text', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'withintext' },
    'see documentation'
  );
});