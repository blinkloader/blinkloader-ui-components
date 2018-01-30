'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Title').add('intro title h1', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'intro' },
    'How many leads have you lost because of 3G? Never lose them again. Blinkloader is a web performance optimization platform that is both advanced and easy to integrate.'
  );
}).add('page section title h2', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'pageSectionTitle' },
    'What\'s the big deal?'
  );
}).add('paragraph title h3', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'paragraphH3' },
    'Adaptive Images'
  );
});