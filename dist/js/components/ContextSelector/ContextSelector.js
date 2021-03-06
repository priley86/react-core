"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _contextSelectorCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ContextSelector/context-selector.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _ContextSelectorToggle = _interopRequireDefault(require("./ContextSelectorToggle"));

var _ContextSelectorMenuList = _interopRequireDefault(require("./ContextSelectorMenuList"));

var _contextSelectorConstants = require("./contextSelectorConstants");

var _Button = require("../Button");

var _TextInput = require("../TextInput");

var _reactIcons = require("@patternfly/react-icons");

var _InputGroup = require("../InputGroup");

var _constants = require("../../helpers/constants");

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

// seed for the aria-labelledby ID
var currentId = 0;
var newId = currentId++;
var propTypes = {
  /** content rendered inside the Context Selector */
  children: _propTypes["default"].node,

  /** Classes applied to root element of Context Selector */
  className: _propTypes["default"].string,

  /** Flag to indicate if Context Selector is opened */
  isOpen: _propTypes["default"].bool,

  /** Function callback called when user clicks toggle button */
  onToggle: _propTypes["default"].func,

  /** Function callback called when user selects item */
  onSelect: _propTypes["default"].func,

  /** Labels the Context Selector for Screen Readers */
  screenReaderLabel: _propTypes["default"].string,

  /** Text that appears in the Context Selector Toggle */
  toggleText: _propTypes["default"].string,

  /** aria-label for the Context Selector Search Button */
  searchButtonAriaLabel: _propTypes["default"].string,

  /** Value in the Search field */
  searchInputValue: _propTypes["default"].string,

  /** Function callback called when user changes the Search Input */
  onSearchInputChange: _propTypes["default"].func,

  /** Search Input placeholder */
  searchInputPlaceholder: _propTypes["default"].string,

  /** Function callback for when Search Button is clicked */
  onSearchButtonClick: _propTypes["default"].func
};
var defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  onToggle: function onToggle() {},
  onSelect: function onSelect() {},
  screenReaderLabel: '',
  toggleText: '',
  searchButtonAriaLabel: 'Search menu items',
  searchInputValue: '',
  onSearchInputChange: function onSearchInputChange() {},
  searchInputPlaceholder: 'Search',
  onSearchButtonClick: function onSearchButtonClick() {}
};

var ContextSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextSelector, _React$Component);

  function ContextSelector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContextSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parentRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onEnterPressed", function (event) {
      if (event.charCode === _constants.KEY_CODES.ENTER) {
        _this.props.onSearchButtonClick();
      }
    });

    return _this;
  }

  _createClass(ContextSelector, [{
    key: "render",
    value: function render() {
      var toggleId = "pf-context-selector-toggle-id-".concat(newId);
      var screenReaderLabelId = "pf-context-selector-label-id-".concat(newId);
      var searchButtonId = "pf-context-selector-search-button-id-".concat(newId);

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          onToggle = _this$props.onToggle,
          onSelect = _this$props.onSelect,
          screenReaderLabel = _this$props.screenReaderLabel,
          toggleText = _this$props.toggleText,
          searchButtonAriaLabel = _this$props.searchButtonAriaLabel,
          searchInputValue = _this$props.searchInputValue,
          onSearchInputChange = _this$props.onSearchInputChange,
          searchInputPlaceholder = _this$props.searchInputPlaceholder,
          onSearchButtonClick = _this$props.onSearchButtonClick,
          props = _objectWithoutProperties(_this$props, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick"]);

      return _react["default"].createElement("div", _extends({
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelector, isOpen && _contextSelectorCss["default"].modifiers.expanded, className),
        ref: this.parentRef
      }, props), screenReaderLabel && _react["default"].createElement("span", {
        id: screenReaderLabelId,
        hidden: true
      }, screenReaderLabel), _react["default"].createElement(_ContextSelectorToggle["default"], {
        onToggle: onToggle,
        isOpen: isOpen,
        toggleText: toggleText,
        id: toggleId,
        parentRef: this.parentRef.current,
        "aria-labelledby": "".concat(screenReaderLabelId, " ").concat(toggleId)
      }), isOpen && _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorMenu)
      }, isOpen && _react["default"].createElement(_focusTrapReact["default"], {
        focusTrapOptions: {
          clickOutsideDeactivates: true
        }
      }, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorMenuInput)
      }, _react["default"].createElement(_InputGroup.InputGroup, null, _react["default"].createElement(_TextInput.TextInput, {
        value: searchInputValue,
        type: "search",
        placeholder: searchInputPlaceholder,
        onChange: onSearchInputChange,
        onKeyPress: this.onEnterPressed,
        "aria-labelledby": searchButtonId
      }), _react["default"].createElement(_Button.Button, {
        variant: _Button.ButtonVariant.tertiary,
        "aria-label": searchButtonAriaLabel,
        id: searchButtonId,
        onClick: onSearchButtonClick
      }, _react["default"].createElement(_reactIcons.SearchIcon, {
        "aria-hidden": "true"
      })))), _react["default"].createElement(_contextSelectorConstants.ContextSelectorContext.Provider, {
        value: {
          onSelect: onSelect
        }
      }, _react["default"].createElement(_ContextSelectorMenuList["default"], {
        isOpen: isOpen
      }, children)))));
    }
  }]);

  return ContextSelector;
}(_react["default"].Component);

ContextSelector.propTypes = propTypes;
ContextSelector.defaultProps = defaultProps;
var _default = ContextSelector;
exports["default"] = _default;