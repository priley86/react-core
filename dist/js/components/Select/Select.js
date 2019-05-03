"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _selectCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Select/select.css.js"));

var _badgeCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Badge/badge.css.js"));

var _formControlCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/FormControl/form-control.css.js"));

var _buttonCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Button/button.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SingleSelect = _interopRequireDefault(require("./SingleSelect"));

var _CheckboxSelect = _interopRequireDefault(require("./CheckboxSelect"));

var _SelectToggle = _interopRequireDefault(require("./SelectToggle"));

var _selectConstants = require("./selectConstants");

var _ChipGroup = require("../ChipGroup");

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
var propTypes = {
  /** Content rendered inside the Select */
  children: _propTypes["default"].node,

  /** Classes applied to the root of the Select */
  className: _propTypes["default"].string,

  /** Flag to indicate if select is expanded */
  isExpanded: _propTypes["default"].bool,

  /** Flag to indicate if select options are grouped */
  isGrouped: _propTypes["default"].bool,

  /** Title text of Select */
  placeholderText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Selected item */
  selections: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),

  /** Adds accessible text to Select */
  'aria-label': _propTypes["default"].string,

  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: _propTypes["default"].string,

  /** Label for input field of type ahead select variants */
  ariaLabelTypeAhead: _propTypes["default"].string,

  /** Label for clear selection button of type ahead select variants */
  ariaLabelClear: _propTypes["default"].string,

  /** Label for toggle of type ahead select variants */
  ariaLabelToggle: _propTypes["default"].string,

  /** Label for remove chip button of multiple type ahead select variant */
  ariaLabelRemove: _propTypes["default"].string,

  /** Callback for selection behavior */
  onSelect: _propTypes["default"].func.isRequired,

  /** Callback for toggle button behavior */
  onToggle: _propTypes["default"].func.isRequired,

  /** Callback for typeahead clear button */
  onClear: _propTypes["default"].func,

  /** Variant of rendered Select */
  variant: _propTypes["default"].oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),

  /** Width of the select container as a number of px or string percentage */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Additional props are spread to the container <ul> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  isGrouped: false,
  'aria-label': null,
  ariaLabelledBy: null,
  ariaLabelTypeAhead: null,
  ariaLabelClear: 'Clear all',
  ariaLabelToggle: 'Options menu',
  ariaLabelRemove: 'Remove',
  selections: null,
  placeholderText: null,
  variant: _selectConstants.SelectVariant.single,
  width: null,
  onClear: Function.prototype
};

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parentRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      openedOnEnter: false,
      typeaheadValue: null,
      filteredChildren: _this.props.children
    });

    _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
      _this.setState({
        openedOnEnter: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        openedOnEnter: false,
        typeaheadValue: null,
        filteredChildren: _this.props.children
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var input;

      try {
        input = new RegExp(e.target.value, 'i');
      } catch (err) {
        input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      }

      var filteredChildren = e.target.value !== '' ? _this.props.children.filter(function (child) {
        return child.props.value.search(input) === 0;
      }) : _this.props.children;

      if (filteredChildren.length === 0) {
        filteredChildren.push(_react["default"].createElement("div", {
          className: (0, _reactStyles.css)(_selectCss["default"].selectMenuItem)
        }, "No results found"));
      }

      _this.setState({
        typeaheadValue: e.target.value,
        filteredChildren: filteredChildren
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clearSelection", function (e) {
      e.stopPropagation();

      _this.setState({
        typeaheadValue: '',
        filteredChildren: _this.props.children
      });
    });

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          variant = _this$props.variant,
          onToggle = _this$props.onToggle,
          onSelect = _this$props.onSelect,
          onClear = _this$props.onClear,
          isExpanded = _this$props.isExpanded,
          isGrouped = _this$props.isGrouped,
          selections = _this$props.selections,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaLabelTypeAhead = _this$props.ariaLabelTypeAhead,
          ariaLabelClear = _this$props.ariaLabelClear,
          ariaLabelToggle = _this$props.ariaLabelToggle,
          ariaLabelRemove = _this$props.ariaLabelRemove,
          ariaLabel = _this$props['aria-label'],
          placeholderText = _this$props.placeholderText,
          width = _this$props.width,
          props = _objectWithoutProperties(_this$props, ["children", "className", "variant", "onToggle", "onSelect", "onClear", "isExpanded", "isGrouped", "selections", "ariaLabelledBy", "ariaLabelTypeAhead", "ariaLabelClear", "ariaLabelToggle", "ariaLabelRemove", "aria-label", "placeholderText", "width"]);

      var _this$state = this.state,
          openedOnEnter = _this$state.openedOnEnter,
          typeaheadValue = _this$state.typeaheadValue,
          filteredChildren = _this$state.filteredChildren;
      var selectToggleId = "pf-toggle-id-".concat(currentId++);
      var childPlaceholderText = null;

      if (!selections && !placeholderText) {
        var childPlaceholder = children.filter(function (child) {
          return child.props.isPlaceholder === true;
        });
        childPlaceholderText = childPlaceholder[0] && childPlaceholder[0].props.value || children[0] && children[0].props.value;
      }

      var selectedChips = null;

      if (variant === _selectConstants.SelectVariant.typeaheadMulti) {
        selectedChips = _react["default"].createElement(_ChipGroup.ChipGroup, null, selections && selections.map(function (item) {
          return _react["default"].createElement(_ChipGroup.Chip, {
            key: item,
            onClick: function onClick(e) {
              return onSelect(e, item);
            },
            closeBtnAriaLabel: ariaLabelRemove
          }, item);
        }));
      }

      return _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].select, isExpanded && _selectCss["default"].modifiers.expanded, className),
        ref: this.parentRef,
        style: {
          width: width
        }
      }, _react["default"].createElement(_selectConstants.SelectContext.Provider, {
        value: {
          onSelect: onSelect,
          onClose: this.onClose
        }
      }, _react["default"].createElement(_SelectToggle["default"], {
        id: selectToggleId,
        parentRef: this.parentRef.current,
        isExpanded: isExpanded,
        onToggle: onToggle,
        onEnter: this.onEnter,
        onClose: this.onClose,
        ariaLabelledBy: "".concat(ariaLabelledBy || '', " ").concat(selectToggleId),
        variant: variant,
        ariaLabelToggle: ariaLabelToggle
      }, variant === _selectConstants.SelectVariant.single && _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleWrapper)
      }, _react["default"].createElement("span", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleText)
      }, selections || placeholderText || childPlaceholderText)), variant === _selectConstants.SelectVariant.checkbox && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleWrapper)
      }, _react["default"].createElement("span", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleText)
      }, placeholderText), selections && selections.length > 0 && _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleBadge)
      }, _react["default"].createElement("span", {
        className: (0, _reactStyles.css)(_badgeCss["default"].badge, _badgeCss["default"].modifiers.read)
      }, selections.length)))), variant === _selectConstants.SelectVariant.typeahead && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleWrapper)
      }, _react["default"].createElement("input", {
        className: (0, _reactStyles.css)(_formControlCss["default"].formControl, _selectCss["default"].selectToggleTypeahead),
        id: "select-single-typeahead-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadValue !== null ? typeaheadValue : selections || '',
        type: "text",
        onChange: this.onChange
      })), selections && _react["default"].createElement("button", {
        className: (0, _reactStyles.css)(_buttonCss["default"].button, _buttonCss["default"].modifiers.plain, _selectCss["default"].selectToggleClear),
        onClick: function onClick(e) {
          _this2.clearSelection(e);

          onClear && onClear(e);
        },
        "aria-label": ariaLabelClear
      }, _react["default"].createElement(_reactIcons.TimesCircleIcon, {
        "aria-hidden": true
      }))), variant === _selectConstants.SelectVariant.typeaheadMulti && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: (0, _reactStyles.css)(_selectCss["default"].selectToggleWrapper)
      }, selections && selections.length > 0 && selectedChips, _react["default"].createElement("input", {
        className: (0, _reactStyles.css)(_formControlCss["default"].formControl, _selectCss["default"].selectToggleTypeahead),
        id: "select-multi-typeahead-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadValue !== null ? typeaheadValue : '',
        type: "text",
        onChange: this.onChange
      })), selections && selections.length > 0 && _react["default"].createElement("button", {
        className: (0, _reactStyles.css)(_buttonCss["default"].button, _buttonCss["default"].modifiers.plain, _selectCss["default"].selectToggleClear),
        onClick: function onClick(e) {
          _this2.clearSelection(e);

          onClear && onClear(e);
        },
        "aria-label": ariaLabelClear
      }, _react["default"].createElement(_reactIcons.TimesCircleIcon, {
        "aria-hidden": true
      })))), variant === _selectConstants.SelectVariant.single && isExpanded && _react["default"].createElement(_SingleSelect["default"], _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
      }), children), variant === _selectConstants.SelectVariant.checkbox && isExpanded && _react["default"].createElement(_CheckboxSelect["default"], _extends({}, props, {
        checked: selections,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        isGrouped: isGrouped
      }), children), (variant === _selectConstants.SelectVariant.typeahead || variant === _selectConstants.SelectVariant.typeaheadMulti) && isExpanded && _react["default"].createElement(_SingleSelect["default"], _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
      }), filteredChildren)));
    }
  }]);

  return Select;
}(_react["default"].Component);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
var _default = Select;
exports["default"] = _default;