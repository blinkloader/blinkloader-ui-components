'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firstArgAction = (0, _addonActions.decorateAction)([function (args) {
  return args.slice(0, 1);
}]);

(0, _react3.storiesOf)('Button').add('large', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'large' },
    'start for free'
  );
}).add('large, full width', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'large', fullWidth: 'true' },
    'start for free'
  );
}).add('medium', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'medium' },
    'try for free'
  );
}).add('medium, full width', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'medium', fullWidth: 'true' },
    'try for free'
  );
}).add('small', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'small' },
    'send e-mail'
  );
}).add('small, full width', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: firstArgAction('on-click'), size: 'small', fullWidth: 'true' },
    'send e-mail'
  );
}).add('large link', function () {
  return _react2.default.createElement(
    _index2.default,
    { href: '/', size: 'large' },
    'start for free'
  );
});