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

var _reactResponsiveSelect = require('react-responsive-select');

var _reactResponsiveSelect2 = _interopRequireDefault(_reactResponsiveSelect);

var _index = require('../Title/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var caretIcon = _react2.default.createElement(
  'svg',
  { className: 'caret-icon', x: '0px', y: '0px', width: '11.848px', height: '6.338px', viewBox: '351.584 2118.292 11.848 6.338' },
  _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z' })
  )
);

var Select = function Select(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      label = _ref.label,
      value = _ref.value,
      name = _ref.name;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2611336649' + ' ' + 'w-100'
    },
    _react2.default.createElement(
      'div',
      { style: { paddingBottom: '0.5rem' }, className: 'jsx-2611336649'
      },
      _react2.default.createElement(
        _index2.default,
        { type: 'paragraphH3' },
        label
      )
    ),
    _react2.default.createElement(_reactResponsiveSelect2.default, {
      caretIcon: caretIcon,
      options: options,
      onChange: onChange,
      selectedValue: value,
      name: name
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '2611336649',
      css: '.rrs{position:relative;box-sizing:border-box;font-family:\'Open Sans\',sans-serif;color:#333;}.rrs--has-changed .rrs__label{color:#333;}.rrs *,.rrs *:before,.rrs *:after{box-sizing:border-box;}.rrs__button{position:relative;cursor:pointer;padding:0.7rem 1rem;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);border-style:solid;border-width:2px;border-color:rgb(240,240,240);font-size:1rem;border-radius:0.7rem;}.rrs__button--disabled{color:#999999;background:#f5f5f5;cursor:default;}.rrs__button:focus{outline:0;}.rrs__button+.rrs__options{list-style:none;padding:0;margin:0;background:#fff;position:absolute;z-index:2;border:2px solid #1DAcf0;border-top:1px solid #eee;border-radius:0 0 0.7rem 0.7rem;top:42px;width:100%;height:0;visibility:hidden;overflow:hidden;box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);}.rrs--options-visible .rrs__options{height:auto;visibility:visible;overflow:auto;-webkit-overflow-scrolling:touch;max-height:230px;}.rrs__option{cursor:pointer;padding:0.75rem 1rem;margin:0;border-top:#eee 1px solid;}.rrs__option *{pointer-events:none;}.rrs__option:first-of-type{border-top:0;}.rrs__option:focus{outline:0;}.rrs__option:hover{background:#f5f5f5;color:#0273b5;}.rrs__option:active{background:#e1f5fe;}.rrs__option.rrs__option--next-selection{background:#f1f8fb;color:#0273b5;}.rrs__option.rrs__option--selected{color:#0273b5;}.rrs__label{padding:0 1rem 0 1rem;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;max-width:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);font-size:inherit;background:transparent;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.rrs__label__text{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.rrs--options-visible .rrs__button{outline:0;border:2px solid #1DA3F0;border-radius:0.7rem 0.7rem 0 0;border-bottom:none;}.caret-icon{position:absolute;right:1rem;top:1.25rem;fill:#333;}.rrs--options-visible .caret-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all .2s ease-in;transition:all .2s ease-in;}.rrs__button:focus{outline:0;border:2px solid #1DA3F0;border-radius:0.7rem;}.rrs__multiselect-label{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;max-width:100%;line-height:1;}.rrs__multiselect-label__text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.rrs__multiselect-label__badge{border:1px solid #ccc;padding:1px 6px;margin:0 0 0 4px;border-radius:8px;color:#666;font-size:11px;vertical-align:middle;display:inline-block;}'
    })
  );
};

Select.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  })).isRequired,
  onChange: _propTypes2.default.func,
  // disabled: PropTypes.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  // hovered: PropTypes.bool,
  name: _propTypes2.default.string
};

Select.defaultProps = {
  onChange: function onChange() {},
  // disabled: false,
  // hovered: false,
  label: null,
  value: undefined,
  name: ''
};

exports.default = Select;