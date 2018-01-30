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

var _index = require('../Title/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../Text/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelStyle = {
  paddingBottom: '0.5rem'
};

var errorStyle = {
  paddingTop: '0.5rem'
};

var renderLabel = function renderLabel(_ref) {
  var label = _ref.label;
  return label ? _react2.default.createElement(
    'div',
    { style: labelStyle },
    _react2.default.createElement(
      _index2.default,
      { type: 'paragraphH3' },
      label
    )
  ) : null;
};

var renderError = function renderError(_ref2) {
  var touched = _ref2.touched,
      error = _ref2.error;
  return error && touched ? _react2.default.createElement(
    'div',
    { style: errorStyle },
    _react2.default.createElement(
      _index4.default,
      { type: 'error' },
      error
    )
  ) : null;
};
var Input = function Input(_ref3) {
  var value = _ref3.value,
      label = _ref3.label,
      meta = _ref3.meta,
      placeholder = _ref3.placeholder,
      type = _ref3.type,
      focused = _ref3.focused,
      blurred = _ref3.blurred,
      onFocus = _ref3.onFocus,
      onBlur = _ref3.onBlur,
      onChange = _ref3.onChange,
      name = _ref3.name;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2646733435'
    },
    renderLabel({ label: label }),
    _react2.default.createElement('input', {
      disabled: meta.submitting,
      value: value,
      name: name,
      onChange: onChange,
      placeholder: placeholder,
      type: type,
      onFocus: onFocus,
      onBlur: onBlur,
      autoComplete: 'on',
      className: 'jsx-2646733435' + ' ' + ((focused ? 'focused w-100' : blurred ? 'blurred w-100' : meta.error ? 'error w-100' : 'w-100') || '')
    }),
    renderError(meta),
    _react2.default.createElement(_style2.default, {
      styleId: '2646733435',
      css: 'input.jsx-2646733435,.blurred.jsx-2646733435{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;box-shadow:none !important;border-style:solid;font-size:18px;font-family:\'Open Sans\',sans-serif;border-width:2px;border-color:rgb(240,240,240);padding:0.7rem 1rem;font-size:1rem;border-radius:0.7rem;}input.jsx-2646733435:focus.jsx-2646733435:not(.error),input.jsx-2646733435:hover.jsx-2646733435:not(error),.focused.jsx-2646733435{outline:none;border-color:#1DA3F0;}input.error.jsx-2646733435{border-color:#FF00BF !important;}.w-100.jsx-2646733435{width:100%;}.jsx-2646733435:-webkit-autofill{color:#fff !important;}'
    })
  );
};

Input.defaultProps = {
  meta: {},
  type: 'text'
};

Input.propTypes = {
  value: _propTypes2.default.string,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.shape({
    error: _propTypes2.default.string,
    touched: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool
  }),
  placeholder: _propTypes2.default.string,
  focused: _propTypes2.default.bool,
  blurred: _propTypes2.default.bool,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['email', 'url', 'password', 'organization', 'number'])
};

exports.default = Input;