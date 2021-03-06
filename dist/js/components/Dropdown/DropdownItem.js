"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _dropdownCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"));

var _appLauncherCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentShape = require("../../helpers/componentShape");

var _dropdownConstants = require("./dropdownConstants");

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

var propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: _propTypes["default"].node,

  /** Classes applied to root element of dropdown item */
  className: _propTypes["default"].string,

  /** Indicates which component will be used as dropdown item */
  component: _componentShape.componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: _propTypes["default"].bool,

  /** Forces display of the hover state of the element */
  isHovered: _propTypes["default"].bool,

  /** Default hyperlink location */
  href: _propTypes["default"].string,
  index: _propTypes["default"].number,
  context: _propTypes["default"].shape({
    keyHandler: _propTypes["default"].func,
    sendRef: _propTypes["default"].func
  }),

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any,

  /** Callback for click event */
  onClick: _propTypes["default"].func
};
var defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#',
  onClick: Function.prototype,
  index: -1,
  context: {
    keyHandler: Function.prototype,
    sendRef: Function.prototype
  }
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === _constants.KEY_CODES.TAB) return;
      event.preventDefault();

      if (event.keyCode === _constants.KEY_CODES.ARROW_UP) {
        _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.UP);
      } else if (event.keyCode === _constants.KEY_CODES.ARROW_DOWN) {
        _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.DOWN);
      } else if (event.keyCode === _constants.KEY_CODES.ENTER) {
        if (!_this.ref.current.getAttribute) _reactDom["default"].findDOMNode(_this.ref.current).click();else {
          _this.ref.current.click && _this.ref.current.click();
        }
      }
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isHovered = _this$props.isHovered,
          context = _this$props.context,
          _onClick = _this$props.onClick,
          Component = _this$props.component,
          isAppLauncher = _this$props.isAppLauncher,
          isDisabled = _this$props.isDisabled,
          index = _this$props.index,
          props = _objectWithoutProperties(_this$props, ["className", "children", "isHovered", "context", "onClick", "component", "isAppLauncher", "isDisabled", "index"]);

      var additionalProps = props;
      var classes;

      if (Component === 'a') {
        additionalProps['aria-disabled'] = isDisabled;
        additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
      } else if (Component === 'button') {
        additionalProps.disabled = isDisabled;
        additionalProps.type = additionalProps.type || 'button';
      }

      if (isAppLauncher) {
        classes = (0, _reactStyles.css)(_appLauncherCss["default"].appLauncherMenuItem, isDisabled && _appLauncherCss["default"].modifiers.disabled, isHovered && _appLauncherCss["default"].modifiers.hover, className);
      } else {
        this.props.role === 'separator' ? classes = className : classes = (0, _reactStyles.css)(_dropdownCss["default"].dropdownMenuItem, isDisabled && _dropdownCss["default"].modifiers.disabled, isHovered && _dropdownCss["default"].modifiers.hover, className);
      }

      return _react["default"].createElement(_dropdownConstants.DropdownContext.Consumer, null, function (onSelect) {
        return _react["default"].createElement("li", {
          role: "none"
        }, _react["default"].isValidElement(children) ? _react["default"].Children.map(children, function (child) {
          return _react["default"].cloneElement(child, {
            className: "".concat((0, _reactStyles.css)(isDisabled && _dropdownCss["default"].modifiers.disabled, isHovered && _dropdownCss["default"].modifiers.hover, className), " ").concat(child.props.className),
            ref: _this2.ref,
            onKeyDown: _this2.onKeyDown,
            onClick: function onClick(event) {
              if (!isDisabled) {
                _onClick && _onClick(event);
                onSelect && onSelect(event);
              }
            }
          });
        }) : _react["default"].createElement(Component, _extends({}, additionalProps, {
          className: classes,
          ref: _this2.ref,
          onKeyDown: _this2.onKeyDown,
          onClick: function onClick(event) {
            if (!isDisabled) {
              _onClick && _onClick(event);
              onSelect && onSelect(event);
            }
          }
        }), children));
      });
    }
  }]);

  return DropdownItem;
}(_react["default"].Component);

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports["default"] = _default;