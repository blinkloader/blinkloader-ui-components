'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ text: 'Static Website', value: 'Static Website' }, { text: 'React Components', value: 'React Components' }, { text: 'Blinkloader SDK', value: 'Blinkloader SDK' }];

(0, _react3.storiesOf)('Select').add('default', function () {
  return _react2.default.createElement(_index2.default, {
    options: options,
    label: 'Your stack',
    name: 'stack'
  });
}).add('with value set', function () {
  return _react2.default.createElement(_index2.default, {
    options: options,
    value: 'React Components',
    name: 'stack'
  });
});