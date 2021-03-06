"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _contextSelectorCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ContextSelector/context-selector.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

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
  /** Content rendered inside the Context Selector Menu */
  children: _propTypes["default"].node,

  /** Classess applied to root element of Context Selector menu */
  className: _propTypes["default"].string,

  /** Flag to indicate if Context Selector menu is opened */
  isOpen: _propTypes["default"].bool,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  isOpen: true
};

var ContextSelectorMenuList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextSelectorMenuList, _React$Component);

  function ContextSelectorMenuList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContextSelectorMenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextSelectorMenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "refsCollection", []);

    _defineProperty(_assertThisInitialized(_this), "sendRef", function (index, ref) {
      _this.refsCollection[index] = ref;
    });

    return _this;
  }

  _createClass(ContextSelectorMenuList, [{
    key: "extendChildren",
    value: function extendChildren() {
      var _this2 = this;

      return _react["default"].Children.map(this.props.children, function (child, index) {
        return _react["default"].cloneElement(child, {
          sendRef: _this2.sendRef,
          index: index
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["className", "isOpen", "children"]);

      return _react["default"].createElement("ul", _extends({
        className: (0, _reactStyles.css)(_contextSelectorCss["default"].contextSelectorMenuList, className),
        hidden: !isOpen,
        role: "menu"
      }, props), this.extendChildren());
    }
  }]);

  return ContextSelectorMenuList;
}(_react["default"].Component);

ContextSelectorMenuList.propTypes = propTypes;
ContextSelectorMenuList.defaultProps = defaultProps;
var _default = ContextSelectorMenuList;
exports["default"] = _default;