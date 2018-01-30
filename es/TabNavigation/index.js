'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arrayPrototype = require('array.prototype.find');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _NavButton = require('./NavButton');

var _NavButton2 = _interopRequireDefault(_NavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabNavigation = function (_React$Component) {
  _inherits(TabNavigation, _React$Component);

  function TabNavigation(props) {
    _classCallCheck(this, TabNavigation);

    var _this = _possibleConstructorReturn(this, (TabNavigation.__proto__ || Object.getPrototypeOf(TabNavigation)).call(this, props));

    var tabs = _this.props && _this.props.children instanceof Array && _this.props.children.map(function (el) {
      return el.props.tab;
    });
    _this.state = {
      currentTab: tabs && tabs[0] && tabs[0].name,
      tabs: tabs || []
    };
    return _this;
  }

  _createClass(TabNavigation, [{
    key: 'buttonClickHandler',
    value: function buttonClickHandler(name) {
      this.setState({ currentTab: name });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          currentTab = _state.currentTab,
          tabs = _state.tabs;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'flex flex-row justify-center' },
          tabs.map(function (tab) {
            return _react2.default.createElement(_NavButton2.default, {
              onClick: _this2.buttonClickHandler.bind(_this2, tab.name),
              name: tab.name,
              img: tab.img,
              square: tab.square,
              key: tab.name
            });
          })
        ),
        (0, _arrayPrototype2.default)(this.props.children, function (el) {
          return el.props.tab.name === currentTab;
        })
      );
    }
  }]);

  return TabNavigation;
}(_react2.default.Component);

exports.default = TabNavigation;