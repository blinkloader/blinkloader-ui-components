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

(0, _react3.storiesOf)('ButtonNavigation').add('back', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'back', onClick: firstArgAction('on-click') },
    'back to intro'
  );
}).add('next non-blocking', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'forward', onClick: firstArgAction('on-click'), blocking: false },
    'Great! Bring me to the dashboard'
  );
}).add('next blocking', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'forward', onClick: firstArgAction('on-click'), blocking: true },
    'I still want to proceed'
  );
});