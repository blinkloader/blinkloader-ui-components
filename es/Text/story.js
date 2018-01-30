'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Text').add('caption', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'caption' },
    'Price per month'
  );
}).add('regular text', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'text' },
    '1 served asset = 1 HTML document or all CSS for 1 HTML document or 1 picture we serve from our CDN'
  );
}).add('small details', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'details' },
    'up to 5 GB storage limit'
  );
});