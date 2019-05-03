"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

var _reactIcons = require("@patternfly/react-icons");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /** Anything which can be rendered as an Options menu item */
  children: _propTypes["default"].node,

  /** Classes applied to root element of an Options menu item */
  className: _propTypes["default"].string,

  /** Render Options menu item as selected */
  isSelected: _propTypes["default"].bool,

  /** Render Options menu item as disabled option */
  isDisabled: _propTypes["default"].bool,

  /** Callback for when this Options menu item is selected */
  onSelect: _propTypes["default"].func,

  /** Unique id of this Options menu item */
  id: _propTypes["default"].string
};
var defaultProps = {
  children: null,
  className: '',
  isSelected: false,
  isDisabled: false,
  onSelect: Function.prototype,
  id: ''
};

var OptionsMenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OptionsMenuItem, _React$Component);

  function OptionsMenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OptionsMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OptionsMenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === _helpers.KEY_CODES.TAB) return;
      event.preventDefault();

      if (event.keyCode === _helpers.KEY_CODES.ENTER) {
        _this.props.onSelect(event);
      }
    });

    return _this;
  }

  _createClass(OptionsMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          isDisabled = _this$props.isDisabled,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          children = _this$props.children,
          id = _this$props.id,
          props = _objectWithoutProperties(_this$props, ["onSelect", "isDisabled", "isSelected", "className", "children", "id"]);

      return _react["default"].createElement("li", null, _react["default"].createElement("button", _extends({
        className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuMenuItem, isDisabled && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'disabled'), className),
        "aria-disabled": isDisabled,
        onClick: onSelect,
        onKeyDown: this.onKeyDown,
        "aria-selected": isSelected,
        id: id
      }, props), children, _react["default"].createElement("i", {
        className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuMenuItemIcon),
        "aria-hidden": true,
        hidden: !isSelected
      }, _react["default"].createElement(_reactIcons.CheckIcon, null))));
    }
  }]);

  return OptionsMenuItem;
}(_react["default"].Component);

OptionsMenuItem.propTypes = propTypes;
OptionsMenuItem.defaultProps = defaultProps;
var _default = OptionsMenuItem;
exports["default"] = _default;