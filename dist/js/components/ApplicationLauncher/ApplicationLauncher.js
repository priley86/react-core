"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _appLauncherCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApplicationLauncherMenu = _interopRequireDefault(require("./ApplicationLauncherMenu"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _reactIcons = require("@patternfly/react-icons");

var _applicationLauncherConstants = require("./applicationLauncherConstants");

var _dropdownConstants = require("../Dropdown/dropdownConstants");

var _GenerateId = _interopRequireDefault(require("../../helpers/GenerateId/GenerateId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Display menu above or below dropdown toggle */
  direction: _propTypes["default"].oneOf(Object.values(_applicationLauncherConstants.ApplicationLauncherDirection)),

  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: _propTypes["default"].array,

  /** open bool */
  isOpen: _propTypes["default"].bool,

  /** Function callback called when user selects item */
  onSelect: _propTypes["default"].func,

  /** Callback called when application launcher toggle is clicked */
  onToggle: _propTypes["default"].func,

  /** Indicates where menu will be alligned horizontally */
  position: _propTypes["default"].oneOf(Object.values(_applicationLauncherConstants.ApplicationLauncherPosition)),

  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': _propTypes["default"].string
};
exports.propTypes = propTypes;
var defaultProps = {
  className: '',
  direction: _applicationLauncherConstants.ApplicationLauncherDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: _applicationLauncherConstants.ApplicationLauncherPosition.left,
  'aria-label': 'Actions'
};
exports.defaultProps = defaultProps;

var ApplicationLauncher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicationLauncher, _React$Component);

  function ApplicationLauncher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ApplicationLauncher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApplicationLauncher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
      _this.openedOnEnter = true;
    });

    return _this;
  }

  _createClass(ApplicationLauncher, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isOpen) this.openedOnEnter = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          children = _this$props.children,
          dropdownItems = _this$props.dropdownItems,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          onSelect = _this$props.onSelect,
          onToggle = _this$props.onToggle,
          props = _objectWithoutProperties(_this$props, ["aria-label", "children", "dropdownItems", "className", "isOpen", "onSelect", "onToggle"]);

      return _react["default"].createElement(_GenerateId["default"], null, function (randomId) {
        return _react["default"].createElement("div", {
          className: (0, _reactStyles.css)(_appLauncherCss["default"].appLauncher, isOpen && _appLauncherCss["default"].modifiers.expanded, className),
          ref: function ref(_ref) {
            _this2.parentRef = _ref;
          }
        }, _react.Children.map(_react["default"].createElement(_Toggle["default"], {
          id: "pf-toggle-id-".concat(randomId),
          "aria-label": ariaLabel,
          onToggle: onToggle
        }, _react["default"].createElement(_reactIcons.ThIcon, null)), function (oneToggle) {
          return (0, _react.cloneElement)(oneToggle, {
            parentRef: _this2.parentRef,
            id: randomId,
            isOpen: isOpen,
            isPlain: true,
            'aria-haspopup': true,
            onEnter: _this2.onEnter
          });
        }), isOpen && _react["default"].createElement(_dropdownConstants.DropdownContext.Provider, {
          value: function value(event) {
            return onSelect && onSelect(event);
          }
        }, _react["default"].createElement(_ApplicationLauncherMenu["default"], {
          isOpen: isOpen,
          position: "left",
          "aria-labelledby": ariaLabel,
          openedOnEnter: _this2.openedOnEnter
        }, dropdownItems)));
      });
    }
  }]);

  return ApplicationLauncher;
}(_react["default"].Component);

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;
var _default = ApplicationLauncher;
exports["default"] = _default;