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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";
import paginationStyles from "../../@patternfly/patternfly/components/Pagination/pagination.css.js";
import { css } from '@patternfly/react-styles';
import { Dropdown, DropdownItem, DropdownDirection } from '../Dropdown';
import { CheckIcon } from '@patternfly/react-icons';
import OptionsToggle from './OptionsToggle';
var propTypes = {
  className: PropTypes.string,
  widgetId: PropTypes.string,
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),
  itemsPerPageTitle: PropTypes.string,
  perPageSuffix: PropTypes.string,
  itemsTitle: PropTypes.string,
  optionsToggle: PropTypes.string,
  itemCount: PropTypes.number,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  perPage: PropTypes.number,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onPerPageSelect: PropTypes.func
};
var defaultProps = {
  dropDirection: DropdownDirection.down,
  itemsTitle: 'items',
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Select',
  toggleTemplate: function toggleTemplate(_ref) {
    var firstIndex = _ref.firstIndex,
        lastIndex = _ref.lastIndex,
        itemCount = _ref.itemCount,
        itemsTitle = _ref.itemsTitle;
    return React.createElement(React.Fragment, null, React.createElement("strong", null, firstIndex, " - ", lastIndex), " of", React.createElement("strong", null, itemCount), " ", itemsTitle);
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
        return React.createElement(DropdownItem, {
          key: value,
          component: "button",
          "data-action": "per-page-".concat(value),
          className: css(styles.optionsMenuMenuItem, perPage === value && 'pf-m-selected'),
          onClick: function onClick(event) {
            return onPerPageSelect(event, value);
          }
        }, title, React.createElement("span", {
          className: css(paginationStyles.paginationMenuText)
        }, " ".concat(perPageSuffix)), perPage === value && React.createElement("i", {
          className: css(styles.optionsMenuMenuItemIcon)
        }, React.createElement(CheckIcon, null)));
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

      return React.createElement("div", _extends({
        className: css(styles.optionsMenu, className)
      }, props), React.createElement("span", {
        id: "".concat(widgetId, "-label"),
        hidden: true
      }, itemsPerPageTitle, ":"), React.createElement(Dropdown, {
        direction: dropDirection,
        onSelect: this.onSelect,
        isOpen: this.state.isOpen,
        toggle: React.createElement(OptionsToggle, {
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
}(Component);

PaginationOptionsMenu.propTypes = propTypes;
PaginationOptionsMenu.defaultProps = defaultProps;
export default PaginationOptionsMenu;