"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIcons = require("@patternfly/react-icons");

var _contextSelectorCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ContextSelector/context-selector.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
  /** HTML ID of toggle */
  id: _propTypes["default"].string.isRequired,

  /** Classes applied to root element of toggle */
  className: _propTypes["default"].string,

  /** Text that appears in the Context Selector Toggle */
  toggleText: _propTypes["default"].string,

  /** Flag to indicate if menu is opened */
  isOpen: _propTypes["default"].bool,

  /** Callback called when toggle is clicked */
  onToggle: _propTypes["default"].func,

  /** Callback for toggle open on keyboard entry */
  onEnter: _propTypes["default"].func,

  /** Element which wraps toggle */
  parentRef: _propTypes["default"].any,

  /** Forces focus state */
  isFocused: _propTypes["default"].bool,

  /** Forces hover state */
  isHovered: _propTypes["default"].bool,

  /** Forces active state */
  isActive: _propTypes["default"].bool,

  /** Additional props are spread to the container <button> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  toggleText: '',
  isOpen: false,
  onEnter: function onEnter() {},
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  onToggle: function onToggle() {}
};

var ContextSelectorToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(ContextSelectorToggle, _Component);

  function ContextSelectorToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContextSelectorToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextSelectorToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.addEventListener('mousedown', _this.onDocClick);
      document.addEventListener('touchstart', _this.onDocClick);
      document.addEventListener('keydown', _this.onEscPress);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.removeEventListener('mousedown', _this.onDocClick);
      document.removeEventListener('touchstart', _this.onDocClick);
      document.removeEventListener('keydown', _this.onEscPress);
    });

    _defineProperty(_assertThisInitialized(_this), "onDocClick", function (event) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          parentRef = _this$props.parentRef,
          onToggle = _this$props.onToggle;

      if (isOpen && parentRef && !parentRef.contains(event.target)) {
        onToggle && onToggle(false);

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscPress", function (event) {
      var _this$props2 = _this.props,
          isOpen = _this$props2.isOpen,
          parentRef = _this$props2.parentRef,
          onToggle = _this$props2.onToggle;
      var keyCode = event.keyCode || event.which;

      if (isOpen && keyCode === _constants.KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
        onToggle && onToggle(false);

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props3 = _this.props,
          isOpen = _this$props3.isOpen,
          onToggle = _this$props3.onToggle,
          onEnter = _this$props3.onEnter;
      if (event.keyCode === _constants.KEY_CODES.TAB && !isOpen || event.key !== _constants.KEY_CODES.ENTER) return;
      event.preventDefault();

      if ((event.keyCode === _constants.KEY_CODES.TAB || event.keyCode === _constants.KEY_CODES.ENTER || event.key !== _constants.KEY_CODES.SPACE) && isOpen) {
        onToggle(!isOpen);
      } else if ((event.keyCode === _constants.KEY_CODES.ENTER || event.key === ' ') && !isOpen) {
        onToggle(!isOpen);
        onEnter();
      }
    });

    return _this;
  }

  _createClass(ContextSelectorToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          toggleText = _this$props4.toggleText,
          isOpen = _this$props4.isOpen,
          isFocused = _this$props4.isFocused,
          isActive = _this$props4.isActive,
          isHovered = _this$props4.isHovered,
          onToggle = _this$props4.onToggle,
          onEnter = _this$props4.onEnter,
          parentRef = _this$props4.parentRef,
          id = _this$props4.id,
          props = _objectWithoutProperties(_this$props4, ["className", "toggleText", "isOpen", "isFocused", "isActive", "isHovered", "onToggle", "onEnter", "parentRef", "id"]);

      return _react["default"].createElement("button", _extends({}, props, {
        id: id,
        ref: function ref(toggle) {
          _this2.toggle = toggle;
        },
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorToggle, isFocused && _contextSelectorCss["default"].modifiers.focus, isHovered && _contextSelectorCss["default"].modifiers.hover, isActive && _contextSelectorCss["default"].modifiers.active, className),
        type: "button",
        onClick: function onClick(event) {
          onToggle && onToggle(event, !isOpen);
        },
        "aria-expanded": isOpen,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("span", {
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorToggleText)
      }, toggleText), _react["default"].createElement(_reactIcons.CaretDownIcon, {
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorToggleIcon),
        "aria-hidden": true
      }));
    }
  }]);

  return ContextSelectorToggle;
}(_react.Component);

ContextSelectorToggle.propTypes = propTypes;
ContextSelectorToggle.defaultProps = defaultProps;
var _default = ContextSelectorToggle;
exports["default"] = _default;