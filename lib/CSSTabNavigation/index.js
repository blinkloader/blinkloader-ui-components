'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arrayPrototype = require('array.prototype.find');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _Title = require('../Title');

var _Title2 = _interopRequireDefault(_Title);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSSTabNavigation = function CSSTabNavigation(_ref) {
  var children = _ref.children;

  var tabs = children.map(function (el) {
    return el.props.tab;
  });
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3737168833' + ' ' + 'cssTab flex flex-wrap justify-center'
    },
    tabs.map(function (tab, i, arr) {
      return [_react2.default.createElement('input', {
        key: 'input_' + tab.name,
        id: 'tab' + (i + 1),
        type: 'radio', name: 'tabs',
        defaultChecked: i === 0 ? true : false,
        className: 'jsx-3737168833'
      }), _react2.default.createElement(
        'label',
        { key: 'label_' + tab.name, htmlFor: 'tab' + (i + 1), className: 'jsx-3737168833'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-3737168833' + ' ' + 'flex flex-row justify-center items-center'
          },
          tab.img && _react2.default.createElement('img', {
            src: tab.img,
            className: 'jsx-3737168833' + ' ' + ((tab.square ? 'squareLogo' : 'logo') || '')
          }),
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-3737168833'
            },
            tab.wrapperName ? tab.wrapperName === 'Title' ? _react2.default.createElement(
              _Title2.default,
              { type: tab.wrapperType },
              tab.name
            ) : tab.wrapperName === 'Text' ? _react2.default.createElement(
              _Text2.default,
              { type: tab.wrapperType },
              tab.name
            ) : tab.name : tab.square ? tab.name : ''
          )
        )
      )];
    }),
    _react2.default.createElement(
      'div',
      { style: { width: '100%' }, className: 'jsx-3737168833' + ' ' + 'content'
      },
      children.map(function (child, i, arr) {
        return _react2.default.createElement(
          'div',
          { key: child.props.tab.name + 'child', id: 'content' + (i + 1), className: 'jsx-3737168833'
          },
          child
        );
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3737168833',
      css: '@media screen and (min-width:60em){.cssTab.jsx-3737168833 label.jsx-3737168833{padding:15px 25px;margin:5px;}}@media screen and (max-width:60em) and (min-width:30em){.cssTab.jsx-3737168833 label.jsx-3737168833{padding:10px;margin:5px;}}@media screen and (max-width:30em){.cssTab.jsx-3737168833>label.jsx-3737168833{padding:5px;margin:3px;}}.logo.jsx-3737168833{max-height:30px;}.squareLogo.jsx-3737168833{padding-right:5px;max-height:30px;}.content.jsx-3737168833>div.jsx-3737168833{display:none;}.cssTab.jsx-3737168833>input.jsx-3737168833{display:none;}.cssTab.jsx-3737168833>label.jsx-3737168833{display:inline-block;text-align:center;font-family:\'Open Sans\',sans-serif;font-size:14px;font-weight:600;background-color:white;border:transparent;border-bottom:solid 2px transparent;outline:none;}.cssTab.jsx-3737168833>label.jsx-3737168833:hover{border-bottom:solid 2px #00adee;opacity:0.7;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;cursor:pointer;}input.jsx-3737168833:checked+label.jsx-3737168833{border-bottom:solid 2px #00adee;opacity:0.7;cursor:pointer;}#tab1.jsx-3737168833:checked~.content.jsx-3737168833 #content1.jsx-3737168833,#tab2.jsx-3737168833:checked~.content.jsx-3737168833 #content2.jsx-3737168833,#tab3.jsx-3737168833:checked~.content.jsx-3737168833 #content3.jsx-3737168833,#tab4.jsx-3737168833:checked~.content.jsx-3737168833 #content4.jsx-3737168833,#tab5.jsx-3737168833:checked~.content.jsx-3737168833 #content5.jsx-3737168833,#tab6.jsx-3737168833:checked~.content.jsx-3737168833 #content6.jsx-3737168833,#tab7.jsx-3737168833:checked~.content.jsx-3737168833 #content7.jsx-3737168833,#tab8.jsx-3737168833:checked~.content.jsx-3737168833 #content8.jsx-3737168833,#tab9.jsx-3737168833:checked~.content.jsx-3737168833 #content9.jsx-3737168833,#tab10.jsx-3737168833:checked~.content.jsx-3737168833 #content10.jsx-3737168833{display:block;}'
    })
  );
};

exports.default = CSSTabNavigation;