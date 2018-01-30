'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../Title/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../Button/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Container').add('with border', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'border' },
    _react2.default.createElement(
      _index4.default,
      { type: 'intro' },
      'Hobby'
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '20px 0' } },
      _react2.default.createElement(
        _index4.default,
        { type: 'paragraphH3' },
        'Best for Pet Project'
      )
    ),
    _react2.default.createElement(
      _index6.default,
      { size: 'medium' },
      'Start Now'
    )
  );
}).add('no border', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'noborder' },
    _react2.default.createElement(
      _index4.default,
      { type: 'intro' },
      'Hobby'
    ),
    _react2.default.createElement(
      _index4.default,
      { type: 'pageSectionTitle' },
      'Best for Pet Project'
    )
  );
}).add('page', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'page' },
    _react2.default.createElement(
      _index4.default,
      { type: 'intro' },
      'Hobby'
    ),
    _react2.default.createElement(
      _index4.default,
      { type: 'pageSectionTitle' },
      'Best for Pet Project'
    )
  );
}).add('with border and decoration', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'decoration', decoration: 'Most popular' },
    _react2.default.createElement(
      _index4.default,
      { type: 'intro' },
      'Hobby'
    ),
    _react2.default.createElement(
      _index4.default,
      { type: 'pageSectionTitle' },
      'Best for Pet Project'
    )
  );
});