'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var type = _ref.type,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-4114865061' + ' ' + 'title'
    },
    type === 'intro' && _react2.default.createElement(
      'h1',
      {
        className: 'jsx-4114865061' + ' ' + 'intro'
      },
      children
    ),
    type === 'pageSectionTitle' && _react2.default.createElement(
      'h2',
      {
        className: 'jsx-4114865061' + ' ' + 'pageSectionTitle'
      },
      children
    ),
    type === 'paragraphH3' && _react2.default.createElement(
      'h3',
      {
        className: 'jsx-4114865061' + ' ' + 'paragraphH3'
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '4114865061',
      css: '.title.jsx-4114865061,h1.jsx-4114865061,h2.jsx-4114865061,h3.jsx-4114865061{font-family:\'Open Sans\',sans-serif;color:#333;line-height:1.5;margin:0;font-weight:200;}.intro.jsx-4114865061{font-size:36px;}.pageSectionTitle.jsx-4114865061{font-size:24px;text-transform:uppercase;color:#4bc1e6;}.paragraphH3.jsx-4114865061{color:#999;font-size:20px;}'
    })
  );
};
Title.defaultProps = {
  children: 'title',
  type: 'intro'
};
Title.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.oneOf(['intro', 'pageSectionTitle', 'paragraphH3'])
};

exports.default = Title;