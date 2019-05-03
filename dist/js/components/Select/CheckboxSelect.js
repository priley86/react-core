"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _selectCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Select/select.css.js"));

var _formCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Form/form.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _util = require("../../helpers/util");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  /** Content rendered inside the CheckboxSelect */
  children: _propTypes["default"].node.isRequired,

  /** Additional classes added to the CheckboxSelect control */
  className: _propTypes["default"].string,

  /** Flag indicating the Select is expanded */
  isExpanded: _propTypes["default"].bool,

  /** Flag indicating whether checkboxes are grouped */
  isGrouped: _propTypes["default"].bool,

  /** Currently checked options */
  checked: _propTypes["default"].arrayOf(_propTypes["default"].string),

  /** Additional props are spread to the container <select> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  isExpanded: false,
  isGrouped: false,
  checked: []
};

var CheckboxSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxSelect, _React$Component);

  function CheckboxSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "refCollection", []);

    _defineProperty(_assertThisInitialized(_this), "sendRef", function (ref, index) {
      _this.refCollection[index] = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "childKeyHandler", function (index, position) {
      (0, _util.keyHandler)(index, position, _this.refCollection, _this.props.isGrouped ? _this.refCollection : _this.props.children);
    });

    return _this;
  }

  _createClass(CheckboxSelect, [{
    key: "extendChildren",
    value: function extendChildren(props) {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isGrouped = _this$props.isGrouped,
          checked = _this$props.checked;
      var ariaLabel = props['aria-label'],
          ariaLabelledBy = props['aria-labelledby'];

      if (isGrouped) {
        var index = 0;
        return _react["default"].Children.map(children, function (group) {
          return _react["default"].cloneElement(group, {
            titleId: group.props.label.replace(/\W/g, '-'),
            children: _react["default"].createElement("fieldset", {
              "aria-labelledby": group.props.label.replace(/\W/g, '-'),
              className: (0, _reactStyles.css)(_formCss["default"].formFieldset)
            }, group.props.children.map(function (option) {
              return _react["default"].cloneElement(option, {
                isChecked: checked && checked.includes(option.props.value),
                sendRef: _this2.sendRef,
                keyHandler: _this2.childKeyHandler,
                index: index++
              });
            }))
          });
        });
      }

      return _react["default"].createElement("fieldset", _extends({}, props, {
        "aria-label": ariaLabel,
        "aria-labelledby": !ariaLabel && ariaLabelledBy || null,
        className: (0, _reactStyles.css)(_formCss["default"].formFieldset)
      }), _react["default"].Children.map(children, function (child, index) {
        return _react["default"].cloneElement(child, {
          isChecked: checked && checked.includes(child.props.value),
          sendRef: _this2.sendRef,
          keyHandler: _this2.childKeyHandler,
          index: index
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          isExpanded = _this$props2.isExpanded,
          checked = _this$props2.checked,
          isGrouped = _this$props2.isGrouped,
          props = _objectWithoutProperties(_this$props2, ["children", "className", "isExpanded", "checked", "isGrouped"]);

      this.renderedChildren = this.extendChildren(props);
      return _react["default"].createElement(_focusTrapReact["default"], {
        focusTrapOptions: {
          clickOutsideDeactivates: true
        }
      }, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectMenu, className)
      }, _react["default"].createElement("form", {
        noValidate: true,
        className: (0, _reactStyles.css)(_formCss["default"].form)
      }, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_formCss["default"].formGroup)
      }, this.renderedChildren))));
    }
  }]);

  return CheckboxSelect;
}(_react["default"].Component);

CheckboxSelect.propTypes = propTypes;
CheckboxSelect.defaultProps = defaultProps;
var _default = CheckboxSelect;
exports["default"] = _default;