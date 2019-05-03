"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _optionsMenuConstants = require("./optionsMenuConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  /** Classes applied to root element of the Options menu */
  className: _propTypes["default"].string,

  /** Id of the root element of the Options menu */
  id: _propTypes["default"].string.isRequired,

  /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,

  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
  toggle: _propTypes["default"].node.isRequired,

  /** Flag to indicate if menu is open */
  isOpen: _propTypes["default"].bool,

  /** Flag to indicate the toggle has no border or background */
  isPlain: _propTypes["default"].bool,

  /** Provides an accessible name for the Options menu */
  ariaLabelMenu: _propTypes["default"].string,

  /** Display menu above or below Options menu toggle */
  direction: _propTypes["default"].oneOf(Object.values(_optionsMenuConstants.OptionsMenuDirection)),

  /** Indicates where menu will be aligned horizontally */
  position: _propTypes["default"].oneOf(Object.values(_optionsMenuConstants.OptionsMenuPosition))
};
var defaultProps = {
  className: '',
  isOpen: false,
  isPlain: false,
  ariaLabelMenu: '',
  direction: _optionsMenuConstants.OptionsMenuDirection.down,
  position: _optionsMenuConstants.OptionsMenuPosition.left
};

var OptionsMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionsMenu, _Component);

  function OptionsMenu() {
    _classCallCheck(this, OptionsMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptionsMenu).apply(this, arguments));
  }

  _createClass(OptionsMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          direction = _this$props.direction,
          position = _this$props.position,
          id = _this$props.id,
          isOpen = _this$props.isOpen,
          isPlain = _this$props.isPlain,
          ariaLabelMenu = _this$props.ariaLabelMenu,
          menuItems = _this$props.menuItems,
          toggle = _this$props.toggle;
      return _react["default"].createElement("div", {
        id: id,
        className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenu, direction === _optionsMenuConstants.OptionsMenuDirection.up && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'top'), position === _optionsMenuConstants.OptionsMenuPosition.right && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'align-right'), isOpen && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'expanded'), className)
      }, _react.Children.map(toggle, function (oneToggle) {
        return (0, _react.cloneElement)(oneToggle, {
          parentId: id,
          isOpen: isOpen,
          isPlain: isPlain
        });
      }), isOpen && _react["default"].createElement("ul", _extends({
        className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuMenu, position === _optionsMenuConstants.OptionsMenuPosition.right && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'align-right'))
      }, ariaLabelMenu ? {
        'aria-label': ariaLabelMenu
      } : {
        'aria-labelledby': "".concat(id, "-toggle")
      }), menuItems.map(function (item) {
        return item;
      })));
    }
  }]);

  return OptionsMenu;
}(_react.Component);

OptionsMenu.propTypes = propTypes;
OptionsMenu.defaultProps = defaultProps;
var _default = OptionsMenu;
exports["default"] = _default;