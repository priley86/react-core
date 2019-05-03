"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _selectCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Select/select.css.js"));

var _checkCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Check/check.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _selectConstants = require("./selectConstants");

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
  /** the value for the option */
  children: _propTypes["default"].string,

  /** additional classes added to the Select Option */
  className: _propTypes["default"].string,

  /** the value for the option */
  value: _propTypes["default"].string,

  /** flag indicating if the option is disabled */
  isDisabled: _propTypes["default"].bool,

  /** Optional on click callback */
  onClick: _propTypes["default"].func,

  /** Additional props are spread to the container <button> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  value: null,
  isDisabled: false,
  onClick: Function.prototype
};

var CheckboxSelectOption =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxSelectOption, _React$Component);

  function CheckboxSelectOption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxSelectOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxSelectOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (event.key === _selectConstants.KeyTypes.Tab) return;
      event.preventDefault();

      if (event.key === _selectConstants.KeyTypes.ArrowUp) {
        _this.props.keyHandler(_this.props.index, 'up');
      } else if (event.key === _selectConstants.KeyTypes.ArrowDown) {
        _this.props.keyHandler(_this.props.index, 'down');
      } else if (event.key === _selectConstants.KeyTypes.Enter || event.key === _selectConstants.KeyTypes.Space) {
        _this.ref.current.click && _this.ref.current.click();

        _this.ref.current.focus();
      }
    });

    return _this;
  }

  _createClass(CheckboxSelectOption, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.sendRef(this.ref.current, this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          value = _this$props.value,
          onClick = _this$props.onClick,
          isDisabled = _this$props.isDisabled,
          isChecked = _this$props.isChecked,
          sendRef = _this$props.sendRef,
          keyHandler = _this$props.keyHandler,
          index = _this$props.index,
          props = _objectWithoutProperties(_this$props, ["children", "className", "value", "onClick", "isDisabled", "isChecked", "sendRef", "keyHandler", "index"]);

      return _react["default"].createElement(_selectConstants.SelectContext.Consumer, null, function (_ref) {
        var onSelect = _ref.onSelect;
        return _react["default"].createElement("label", _extends({}, props, {
          className: (0, _reactStyles.css)(_checkCss["default"].check, _selectCss["default"].selectMenuItem, isDisabled && _selectCss["default"].modifiers.disabled, className),
          onKeyDown: _this2.onKeyDown
        }), _react["default"].createElement("input", {
          id: value,
          className: (0, _reactStyles.css)(_checkCss["default"].checkInput),
          type: "checkbox",
          onChange: function onChange(event) {
            if (!isDisabled) {
              onClick && onClick(event);
              onSelect && onSelect(event, value);
            }
          },
          ref: _this2.ref,
          checked: isChecked || false,
          disabled: isDisabled
        }), _react["default"].createElement("span", {
          className: (0, _reactStyles.css)(_checkCss["default"].checkLabel, isDisabled && _selectCss["default"].modifiers.disabled)
        }, value));
      });
    }
  }]);

  return CheckboxSelectOption;
}(_react["default"].Component);

CheckboxSelectOption.propTypes = propTypes;
CheckboxSelectOption.defaultProps = defaultProps;
var _default = CheckboxSelectOption;
exports["default"] = _default;