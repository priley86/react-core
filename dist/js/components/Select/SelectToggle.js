"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _selectCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Select/select.css.js"));

var _buttonCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Button/button.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _selectConstants = require("./selectConstants");

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
  /** HTML ID of dropdown toggle */
  id: _propTypes["default"].string.isRequired,

  /** Anything which can be rendered as dropdown toggle */
  children: _propTypes["default"].node,

  /** Classes applied to root element of dropdown toggle */
  className: _propTypes["default"].string,

  /** Flag to indicate if select is expanded */
  isExpanded: _propTypes["default"].bool,

  /** Callback called when toggle is clicked */
  onToggle: _propTypes["default"].func,

  /** Callback for toggle open on keyboard entry */
  onEnter: _propTypes["default"].func,

  /** Callback for toggle close */
  onClose: _propTypes["default"].func,

  /** Element which wraps toggle */
  parentRef: _propTypes["default"].any,

  /** Forces focus state */
  isFocused: _propTypes["default"].bool,

  /** Forces hover state */
  isHovered: _propTypes["default"].bool,

  /** Forces active state */
  isActive: _propTypes["default"].bool,

  /** Display the toggle with no border or background */
  isPlain: _propTypes["default"].bool,

  /** Type of the toggle button, defaults to 'button' */
  type: _propTypes["default"].string,

  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: _propTypes["default"].string,

  /** Label for toggle of select variants */
  ariaLabelToggle: _propTypes["default"].string,

  /** Flag for variant, determines toggle rules and interaction */
  variant: _propTypes["default"].oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),

  /** Additional props are spread to the container <button> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  variant: false,
  ariaLabelledBy: null,
  ariaLabelToggle: null,
  type: 'button',
  onToggle: Function.prototype,
  onEnter: Function.prototype,
  onClose: Function.prototype
};

var SelectToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectToggle, _Component);

  function SelectToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onDocClick", function (event) {
      var _this$props = _this.props,
          parentRef = _this$props.parentRef,
          isExpanded = _this$props.isExpanded,
          onToggle = _this$props.onToggle,
          onClose = _this$props.onClose;

      if (isExpanded && parentRef && !parentRef.contains(event.target)) {
        onToggle && onToggle(false);
        onClose && onClose();

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscPress", function (event) {
      var _this$props2 = _this.props,
          parentRef = _this$props2.parentRef,
          isExpanded = _this$props2.isExpanded,
          variant = _this$props2.variant,
          onToggle = _this$props2.onToggle,
          onClose = _this$props2.onClose;
      if (event.key === _selectConstants.KeyTypes.Tab && variant === _selectConstants.SelectVariant.checkbox) return;

      if (isExpanded && (event.key === _selectConstants.KeyTypes.Escape || event.key === _selectConstants.KeyTypes.Tab) && parentRef && parentRef.contains(event.target)) {
        onToggle && onToggle(false);
        onClose && onClose();

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props3 = _this.props,
          isExpanded = _this$props3.isExpanded,
          onToggle = _this$props3.onToggle,
          variant = _this$props3.variant,
          onClose = _this$props3.onClose,
          onEnter = _this$props3.onEnter;
      if (event.key === _selectConstants.KeyTypes.Tab && variant === _selectConstants.SelectVariant.checkbox || event.key === _selectConstants.KeyTypes.Tab && !isExpanded || event.key !== _selectConstants.KeyTypes.Enter && event.key !== _selectConstants.KeyTypes.Space || (event.key === _selectConstants.KeyTypes.Space || event.key === _selectConstants.KeyTypes.Enter) && (variant === _selectConstants.SelectVariant.typeahead || variant === _selectConstants.SelectVariant.typeaheadMulti)) return;
      event.preventDefault();

      if ((event.key === _selectConstants.KeyTypes.Tab || event.key === _selectConstants.KeyTypes.Enter || event.key === _selectConstants.KeyTypes.Space) && isExpanded) {
        onToggle && onToggle(!isExpanded);
        onClose && onClose();

        _this.toggle.focus();
      } else if ((event.key === _selectConstants.KeyTypes.Enter || event.key === _selectConstants.KeyTypes.Space) && !isExpanded) {
        onToggle(!isExpanded);
        onEnter();
      }
    });

    return _this;
  }

  _createClass(SelectToggle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onDocClick);
      document.addEventListener('touchstart', this.onDocClick);
      document.addEventListener('keydown', this.onEscPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onDocClick);
      document.removeEventListener('touchstart', this.onDocClick);
      document.removeEventListener('keydown', this.onEscPress);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          children = _this$props4.children,
          isExpanded = _this$props4.isExpanded,
          isFocused = _this$props4.isFocused,
          isActive = _this$props4.isActive,
          isHovered = _this$props4.isHovered,
          isPlain = _this$props4.isPlain,
          variant = _this$props4.variant,
          onToggle = _this$props4.onToggle,
          onEnter = _this$props4.onEnter,
          onClose = _this$props4.onClose,
          parentRef = _this$props4.parentRef,
          id = _this$props4.id,
          type = _this$props4.type,
          ariaLabelledBy = _this$props4.ariaLabelledBy,
          ariaLabelToggle = _this$props4.ariaLabelToggle,
          props = _objectWithoutProperties(_this$props4, ["className", "children", "isExpanded", "isFocused", "isActive", "isHovered", "isPlain", "variant", "onToggle", "onEnter", "onClose", "parentRef", "id", "type", "ariaLabelledBy", "ariaLabelToggle"]);

      var isTypeahead = variant === _selectConstants.SelectVariant.typeahead || variant === _selectConstants.SelectVariant.typeaheadMulti;
      var ToggleComponent = isTypeahead ? 'div' : 'button';
      var toggleProps = {
        id: id,
        'aria-labelledby': ariaLabelledBy,
        'aria-expanded': isExpanded,
        'aria-haspopup': variant !== _selectConstants.SelectVariant.checkbox && 'listbox' || null
      };
      return _react["default"].createElement(ToggleComponent, _extends({}, props, {
        ref: function ref(toggle) {
          _this2.toggle = toggle;
        },
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggle, isFocused && _selectCss["default"].modifiers.focus, isHovered && _selectCss["default"].modifiers.hover, isActive && _selectCss["default"].modifiers.active, isPlain && _selectCss["default"].modifiers.plain, isTypeahead && _selectCss["default"].modifiers.typeahead, className),
        type: !isTypeahead ? type : null,
        onClick: function onClick(_event) {
          if (isTypeahead) onToggle && onToggle(true);else {
            onToggle && onToggle(!isExpanded);
            if (isExpanded) onClose && onClose();
          }
        },
        onKeyDown: this.onKeyDown
      }, !isTypeahead && toggleProps), children, isTypeahead && _react["default"].createElement("button", _extends({
        className: (0, _reactStyles.css)(_buttonCss["default"].button, _selectCss["default"].selectToggleButton)
      }, isTypeahead && toggleProps, {
        "aria-label": ariaLabelToggle,
        onClick: function onClick(_event) {
          _event.stopPropagation();

          onToggle && onToggle(!isExpanded);
          if (isExpanded) onClose && onClose();
        }
      }), _react["default"].createElement(_reactIcons.CaretDownIcon, {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleArrow)
      })), !isTypeahead && _react["default"].createElement(_reactIcons.CaretDownIcon, {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleArrow)
      }));
    }
  }]);

  return SelectToggle;
}(_react.Component);

SelectToggle.propTypes = propTypes;
SelectToggle.defaultProps = defaultProps;
var _default = SelectToggle;
exports["default"] = _default;