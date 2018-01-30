'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _Tab = require('../TabNavigation/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Code = require('../Code');

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('CSSTabNavigation').add('default', function () {
  return _react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'React.js', img: './react.png', square: true } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'React.js'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'GitHub Pages', img: './github.png', square: true } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        _react2.default.createElement(
          'div',
          null,
          'GitHub Pages'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              null,
              '$ yarn global add blinkloader'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '$ blinkloader init'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '$ blinkloader optimize'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '$ blinkloader server'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '$ blinkloader deploy'
            ),
            _react2.default.createElement('br', null)
          )
        )
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Jekyll', img: './jekyll.svg' }, name: 'Jekyll' },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Jekyll'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Metalsmith', img: './metalsmith.png' } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Metalsmith'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Middleman', img: './middleman.svg', square: true } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Middleman'
      )
    )
  );
}).add('with wrapper', function () {
  return _react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Free', wrapperName: 'Title', wrapperType: 'pageSectionTitle' } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Free'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Hobby', wrapperName: 'Title', wrapperType: 'pageSectionTitle' } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        _react2.default.createElement(
          'div',
          null,
          'Hobby'
        )
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Growth', wrapperName: 'Title', wrapperType: 'pageSectionTitle' }, name: 'Jekyll' },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Growth'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Business', wrapperName: 'Title', wrapperType: 'pageSectionTitle' } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Business'
      )
    ),
    _react2.default.createElement(
      _Tab2.default,
      { tab: { name: 'Enterprise', wrapperName: 'Title', wrapperType: 'pageSectionTitle' } },
      _react2.default.createElement(
        'div',
        { className: 'flex flex-row-ns flex-column justify-around' },
        'Enterprise'
      )
    )
  );
});