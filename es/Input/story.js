'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Input').add('email', function () {
  return _react2.default.createElement(_index2.default, { label: 'your best email', placeholder: 'your best email', type: 'email' });
}).add('website, focused', function () {
  return _react2.default.createElement(_index2.default, { type: 'url', focused: true });
}).add('password', function () {
  return _react2.default.createElement(_index2.default, { type: 'password' });
}).add('company name', function () {
  return _react2.default.createElement(_index2.default, { type: 'organization' });
}).add('number', function () {
  return _react2.default.createElement(_index2.default, { type: 'number' });
}).add('website with error', function () {
  return _react2.default.createElement(_index2.default, {
    type: 'url',
    input: {
      value: 'examplecom',
      onChange: function onChange() {
        console.log('Foo!');
      }
    },
    meta: {
      error: 'invalid url',
      touched: true
    },
    label: 'your website'
  });
});