"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

var _paginationCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Pagination/pagination.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _Dropdown = require("../Dropdown");

var _reactIcons = require("@patternfly/react-icons");

var _OptionsToggle = _interopRequireDefault(require("./OptionsToggle"));

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
  className: _propTypes["default"].string,
  widgetId: _propTypes["default"].string,
  dropDirection: _propTypes["default"].oneOf(Object.values(_Dropdown.DropdownDirection)),
  perPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].node,
    value: _propTypes["default"].number
  })),
  itemsPerPageTitle: _propTypes["default"].string,
  perPageSuffix: _propTypes["default"].string,
  itemsTitle: _propTypes["default"].string,
  optionsToggle: _propTypes["default"].string,
  itemCount: _propTypes["default"].number,
  firstIndex: _propTypes["default"].number,
  lastIndex: _propTypes["default"].number,
  perPage: _propTypes["default"].number,
  toggleTemplate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  onPerPageSelect: _propTypes["default"].func
};
var defaultProps = {
  dropDirection: _Dropdown.DropdownDirection.down,
  itemsTitle: 'items',
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Select',
  toggleTemplate: function toggleTemplate(_ref) {
    var firstIndex = _ref.firstIndex,
        lastIndex = _ref.lastIndex,
        itemCount = _ref.itemCount,
        itemsTitle = _ref.itemsTitle;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("strong", null, firstIndex, " - ", lastIndex), " of", _react["default"].createElement("strong", null, itemCount), " ", itemsTitle);
  }
};

var PaginationOptionsMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(PaginationOptionsMenu, _Component);

  function PaginationOptionsMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaginationOptionsMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationOptionsMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (isOpen) {
      _this.setState({
        isOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      var _this$props = _this.props,
          perPageOptions = _this$props.perPageOptions,
          onPerPageSelect = _this$props.onPerPageSelect,
          perPage = _this$props.perPage,
          perPageSuffix = _this$props.perPageSuffix;
      return perPageOptions.map(function (_ref2) {
        var value = _ref2.value,
            title = _ref2.title;
        return _react["default"].createElement(_Dropdown.DropdownItem, {
          key: value,
          component: "button",
          "data-action": "per-page-".concat(value),
          className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuMenuItem, perPage === value && 'pf-m-selected'),
          onClick: function onClick(event) {
            return onPerPageSelect(event, value);
          }
        }, title, _react["default"].createElement("span", {
          className: (0, _reactStyles.css)(_paginationCss["default"].paginationMenuText)
        }, " ".concat(perPageSuffix)), perPage === value && _react["default"].createElement("i", {
          className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuMenuItemIcon)
        }, _react["default"].createElement(_reactIcons.CheckIcon, null)));
      });
    });

    return _this;
  }

  _createClass(PaginationOptionsMenu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          widgetId = _this$props2.widgetId,
          dropDirection = _this$props2.dropDirection,
          perPageOptions = _this$props2.perPageOptions,
          itemsPerPageTitle = _this$props2.itemsPerPageTitle,
          itemsTitle = _this$props2.itemsTitle,
          optionsToggle = _this$props2.optionsToggle,
          itemCount = _this$props2.itemCount,
          firstIndex = _this$props2.firstIndex,
          lastIndex = _this$props2.lastIndex,
          perPage = _this$props2.perPage,
          perPageSuffix = _this$props2.perPageSuffix,
          onPerPageSelect = _this$props2.onPerPageSelect,
          toggleTemplate = _this$props2.toggleTemplate,
          props = _objectWithoutProperties(_this$props2, ["className", "widgetId", "dropDirection", "perPageOptions", "itemsPerPageTitle", "itemsTitle", "optionsToggle", "itemCount", "firstIndex", "lastIndex", "perPage", "perPageSuffix", "onPerPageSelect", "toggleTemplate"]);

      return _react["default"].createElement("div", _extends({
        className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenu, className)
      }, props), _react["default"].createElement("span", {
        id: "".concat(widgetId, "-label"),
        hidden: true
      }, itemsPerPageTitle, ":"), _react["default"].createElement(_Dropdown.Dropdown, {
        direction: dropDirection,
        onSelect: this.onSelect,
        isOpen: this.state.isOpen,
        toggle: _react["default"].createElement(_OptionsToggle["default"], {
          optionsToggle: optionsToggle,
          itemsTitle: itemsTitle,
          onToggle: this.onToggle,
          isOpen: this.state.isOpen,
          firstIndex: firstIndex,
          lastIndex: lastIndex,
          itemCount: itemCount,
          widgetId: widgetId,
          toggleTemplate: toggleTemplate
        }),
        dropdownItems: this.renderItems(),
        isPlain: true
      }));
    }
  }]);

  return PaginationOptionsMenu;
}(_react.Component);

PaginationOptionsMenu.propTypes = propTypes;
PaginationOptionsMenu.defaultProps = defaultProps;
var _default = PaginationOptionsMenu;
exports["default"] = _default;