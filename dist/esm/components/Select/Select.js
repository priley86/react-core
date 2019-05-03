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

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Select/select.css.js";
import badgeStyles from "../../@patternfly/patternfly/components/Badge/badge.css.js";
import formStyles from "../../@patternfly/patternfly/components/FormControl/form-control.css.js";
import buttonStyles from "../../@patternfly/patternfly/components/Button/button.css.js";
import { css } from '@patternfly/react-styles';
import { TimesCircleIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import SingleSelect from './SingleSelect';
import CheckboxSelect from './CheckboxSelect';
import SelectToggle from './SelectToggle';
import { SelectContext, SelectVariant } from './selectConstants';
import { Chip, ChipGroup } from '../ChipGroup'; // seed for the aria-labelledby ID

var currentId = 0;
var propTypes = {
  /** Content rendered inside the Select */
  children: PropTypes.node,

  /** Classes applied to the root of the Select */
  className: PropTypes.string,

  /** Flag to indicate if select is expanded */
  isExpanded: PropTypes.bool,

  /** Flag to indicate if select options are grouped */
  isGrouped: PropTypes.bool,

  /** Title text of Select */
  placeholderText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Selected item */
  selections: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /** Adds accessible text to Select */
  'aria-label': PropTypes.string,

  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: PropTypes.string,

  /** Label for input field of type ahead select variants */
  ariaLabelTypeAhead: PropTypes.string,

  /** Label for clear selection button of type ahead select variants */
  ariaLabelClear: PropTypes.string,

  /** Label for toggle of type ahead select variants */
  ariaLabelToggle: PropTypes.string,

  /** Label for remove chip button of multiple type ahead select variant */
  ariaLabelRemove: PropTypes.string,

  /** Callback for selection behavior */
  onSelect: PropTypes.func.isRequired,

  /** Callback for toggle button behavior */
  onToggle: PropTypes.func.isRequired,

  /** Callback for typeahead clear button */
  onClear: PropTypes.func,

  /** Variant of rendered Select */
  variant: PropTypes.oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),

  /** Width of the select container as a number of px or string percentage */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
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
  variant: SelectVariant.single,
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

    _defineProperty(_assertThisInitialized(_this), "parentRef", React.createRef());

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
        filteredChildren.push(React.createElement("div", {
          className: css(styles.selectMenuItem)
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

      if (variant === SelectVariant.typeaheadMulti) {
        selectedChips = React.createElement(ChipGroup, null, selections && selections.map(function (item) {
          return React.createElement(Chip, {
            key: item,
            onClick: function onClick(e) {
              return onSelect(e, item);
            },
            closeBtnAriaLabel: ariaLabelRemove
          }, item);
        }));
      }

      return React.createElement("div", {
        className: css(styles.select, isExpanded && styles.modifiers.expanded, className),
        ref: this.parentRef,
        style: {
          width: width
        }
      }, React.createElement(SelectContext.Provider, {
        value: {
          onSelect: onSelect,
          onClose: this.onClose
        }
      }, React.createElement(SelectToggle, {
        id: selectToggleId,
        parentRef: this.parentRef.current,
        isExpanded: isExpanded,
        onToggle: onToggle,
        onEnter: this.onEnter,
        onClose: this.onClose,
        ariaLabelledBy: "".concat(ariaLabelledBy || '', " ").concat(selectToggleId),
        variant: variant,
        ariaLabelToggle: ariaLabelToggle
      }, variant === SelectVariant.single && React.createElement("div", {
        className: css(styles.selectToggleWrapper)
      }, React.createElement("span", {
        className: css(styles.selectToggleText)
      }, selections || placeholderText || childPlaceholderText)), variant === SelectVariant.checkbox && React.createElement(React.Fragment, null, React.createElement("div", {
        className: css(styles.selectToggleWrapper)
      }, React.createElement("span", {
        className: css(styles.selectToggleText)
      }, placeholderText), selections && selections.length > 0 && React.createElement("div", {
        className: css(styles.selectToggleBadge)
      }, React.createElement("span", {
        className: css(badgeStyles.badge, badgeStyles.modifiers.read)
      }, selections.length)))), variant === SelectVariant.typeahead && React.createElement(React.Fragment, null, React.createElement("div", {
        className: css(styles.selectToggleWrapper)
      }, React.createElement("input", {
        className: css(formStyles.formControl, styles.selectToggleTypeahead),
        id: "select-single-typeahead-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadValue !== null ? typeaheadValue : selections || '',
        type: "text",
        onChange: this.onChange
      })), selections && React.createElement("button", {
        className: css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear),
        onClick: function onClick(e) {
          _this2.clearSelection(e);

          onClear && onClear(e);
        },
        "aria-label": ariaLabelClear
      }, React.createElement(TimesCircleIcon, {
        "aria-hidden": true
      }))), variant === SelectVariant.typeaheadMulti && React.createElement(React.Fragment, null, React.createElement("div", {
        className: css(styles.selectToggleWrapper)
      }, selections && selections.length > 0 && selectedChips, React.createElement("input", {
        className: css(formStyles.formControl, styles.selectToggleTypeahead),
        id: "select-multi-typeahead-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadValue !== null ? typeaheadValue : '',
        type: "text",
        onChange: this.onChange
      })), selections && selections.length > 0 && React.createElement("button", {
        className: css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear),
        onClick: function onClick(e) {
          _this2.clearSelection(e);

          onClear && onClear(e);
        },
        "aria-label": ariaLabelClear
      }, React.createElement(TimesCircleIcon, {
        "aria-hidden": true
      })))), variant === SelectVariant.single && isExpanded && React.createElement(SingleSelect, _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
      }), children), variant === SelectVariant.checkbox && isExpanded && React.createElement(CheckboxSelect, _extends({}, props, {
        checked: selections,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        isGrouped: isGrouped
      }), children), (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) && isExpanded && React.createElement(SingleSelect, _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
      }), filteredChildren)));
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
export default Select;