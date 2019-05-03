function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Tabs/tabs.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import { getUniqueId, isElementInView, sideElementIsOutOfView } from '../../helpers/util';
import { SIDE } from '../../helpers/constants';
import TabContent from './TabContent';
import Tab from './Tab';
export var TabsVariant = {
  div: 'div',
  nav: 'nav'
};
var propTypes = {
  /** content rendered inside the Tabs Component. */
  children: PropTypes.node.isRequired,

  /** additional classes added to the Tabs */
  className: PropTypes.string,

  /** the index of the active tab */
  activeKey: PropTypes.number,

  /** handle tab selection */
  onSelect: PropTypes.func,

  /** uniquely identifies the Tabs */
  id: PropTypes.string,

  /** enables the filled tab list layout */
  isFilled: PropTypes.bool,

  /** enables Secondary Tab styling */
  isSecondary: PropTypes.bool,

  /** aria-label for the left Scroll Button */
  leftScrollAriaLabel: PropTypes.string,

  /** aria-label for the right Scroll Button */
  rightScrollAriaLabel: PropTypes.string,

  /** determines what tag is used around the Tabs. Use "nav" to define the Tabs inside a navigation region */
  variant: PropTypes.oneOf(Object.values(TabsVariant)),

  /** provides an accessible label for the Tabs. Labels should be unique for each set of Tabs that are present on a page. When variant is set to nav, this prop should be defined to differentiate the Tabs from other navigation regions on the page. */
  'aria-label': PropTypes.string
};
var defaultProps = {
  className: '',
  activeKey: 0,
  onSelect: function onSelect() {
    return undefined;
  },
  id: null,
  isFilled: false,
  isSecondary: false,
  leftScrollAriaLabel: 'Scroll left',
  rightScrollAriaLabel: 'Scroll Right',
  'aria-label': null,
  variant: TabsVariant.div
};

var Tabs = function Tabs(_ref) {
  var ariaLabel = _ref['aria-label'],
      id = _ref.id,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["aria-label", "id", "variant"]);

  var unique_id = id || getUniqueId();
  return variant === TabsVariant.nav ? React.createElement(TabsWithNav, _extends({
    ariaLabel: ariaLabel,
    id: unique_id
  }, props)) : React.createElement(TabsWithDiv, _extends({
    id: unique_id
  }, props));
};

var TabsWithNav = function TabsWithNav(_ref2) {
  var activeKey = _ref2.activeKey,
      ariaLabel = _ref2.ariaLabel,
      className = _ref2.className,
      id = _ref2.id,
      isFilled = _ref2.isFilled,
      isSecondary = _ref2.isSecondary,
      leftScrollAriaLabel = _ref2.leftScrollAriaLabel,
      rightScrollAriaLabel = _ref2.rightScrollAriaLabel,
      showLeftScrollButton = _ref2.showLeftScrollButton,
      showRightScrollButton = _ref2.showRightScrollButton,
      highlightLeftScrollButton = _ref2.highlightLeftScrollButton,
      highlightRightScrollButton = _ref2.highlightRightScrollButton,
      props = _objectWithoutProperties(_ref2, ["activeKey", "ariaLabel", "className", "id", "isFilled", "isSecondary", "leftScrollAriaLabel", "rightScrollAriaLabel", "showLeftScrollButton", "showRightScrollButton", "highlightLeftScrollButton", "highlightRightScrollButton"]);

  return React.createElement(React.Fragment, null, React.createElement("nav", _extends({}, props, {
    "aria-label": ariaLabel,
    className: css(styles.tabs, isFilled && styles.modifiers.fill, isSecondary && styles.modifiers.tabsSecondary, showLeftScrollButton && styles.modifiers.start, showRightScrollButton && styles.modifiers.end, highlightLeftScrollButton && styles.modifiers.startCurrent, highlightRightScrollButton && styles.modifiers.endCurrent, className)
  }), React.createElement(InternalTabs, _extends({
    id: id,
    activeKey: activeKey,
    leftScrollAriaLabel: leftScrollAriaLabel,
    rightScrollAriaLabel: rightScrollAriaLabel
  }, props))), React.createElement(InternalTabContainer, _extends({
    id: id,
    activeKey: activeKey
  }, props)));
};

var TabsWithDiv = function TabsWithDiv(_ref3) {
  var activeKey = _ref3.activeKey,
      className = _ref3.className,
      id = _ref3.id,
      isFilled = _ref3.isFilled,
      isSecondary = _ref3.isSecondary,
      leftScrollAriaLabel = _ref3.leftScrollAriaLabel,
      rightScrollAriaLabel = _ref3.rightScrollAriaLabel,
      showLeftScrollButton = _ref3.showLeftScrollButton,
      showRightScrollButton = _ref3.showRightScrollButton,
      highlightLeftScrollButton = _ref3.highlightLeftScrollButton,
      highlightRightScrollButton = _ref3.highlightRightScrollButton,
      props = _objectWithoutProperties(_ref3, ["activeKey", "className", "id", "isFilled", "isSecondary", "leftScrollAriaLabel", "rightScrollAriaLabel", "showLeftScrollButton", "showRightScrollButton", "highlightLeftScrollButton", "highlightRightScrollButton"]);

  return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, props, {
    className: css(styles.tabs, isFilled && styles.modifiers.fill, isSecondary && styles.modifiers.tabsSecondary, showLeftScrollButton && styles.modifiers.start, showRightScrollButton && styles.modifiers.end, highlightLeftScrollButton && styles.modifiers.startCurrent, highlightRightScrollButton && styles.modifiers.endCurrent, className)
  }), React.createElement(InternalTabs, _extends({
    id: id,
    activeKey: activeKey,
    leftScrollAriaLabel: leftScrollAriaLabel,
    rightScrollAriaLabel: rightScrollAriaLabel
  }, props))), React.createElement(InternalTabContainer, _extends({
    id: id,
    activeKey: activeKey
  }, props)));
};

var InternalTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalTabs, _React$Component);

  function InternalTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InternalTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InternalTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showLeftScrollButton: false,
      showRightScrollButton: false,
      highlightLeftScrollButton: false,
      highlightRightScrollButton: false
    });

    _defineProperty(_assertThisInitialized(_this), "tabList", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleScrollButtons", function () {
      if (_this.tabList.current) {
        var container = _this.tabList.current; // get first element and check if it is in view

        var showLeftScrollButton = !isElementInView(container, container.firstChild, false); // get lase element and check if it is in view

        var showRightScrollButton = !isElementInView(container, container.lastChild, false); // determine if selected tab is out of view and apply styles

        var selectedTab;
        var childrenArr = Array.from(container.children);
        childrenArr.forEach(function (child) {
          var className = child.className;

          if (className.search('pf-m-current') > 0) {
            selectedTab = child;
          }
        });
        var sideOutOfView = sideElementIsOutOfView(container, selectedTab);

        _this.setState({
          showLeftScrollButton: showLeftScrollButton,
          showRightScrollButton: showRightScrollButton,
          highlightLeftScrollButton: (sideOutOfView === SIDE.LEFT || sideOutOfView === SIDE.BOTH) && showLeftScrollButton,
          highlightRightScrollButton: (sideOutOfView === SIDE.RIGHT || sideOutOfView === SIDE.BOTH) && showRightScrollButton
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollLeft", function () {
      // find first Element that is fully in view on the left, then scroll to the element before it
      if (_this.tabList.current) {
        var container = _this.tabList.current;
        var childrenArr = Array.from(container.children);
        var firstElementInView;
        var lastElementOutOfView;
        var i;

        for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
          if (isElementInView(container, childrenArr[i], false)) {
            firstElementInView = childrenArr[i];
            lastElementOutOfView = childrenArr[i - 1];
          }
        }

        lastElementOutOfView && (container.scrollLeft -= lastElementOutOfView.scrollWidth);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollRight", function () {
      // find last Element that is fully in view on the right, then scroll to the element after it
      if (_this.tabList.current) {
        var container = _this.tabList.current;
        var childrenArr = Array.from(container.children);
        var lastElementInView;
        var firstElementOutOfView;
        var i;

        for (i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
          if (isElementInView(container, childrenArr[i], false)) {
            lastElementInView = childrenArr[i];
            firstElementOutOfView = childrenArr[i + 1];
          }
        }

        firstElementOutOfView && (container.scrollLeft += firstElementOutOfView.scrollWidth);
      }
    });

    return _this;
  }

  _createClass(InternalTabs, [{
    key: "handleTabClick",
    value: function handleTabClick(event, eventKey, tabContentRef) {
      this.props.onSelect(event, eventKey); // process any tab content sections outside of the component

      if (tabContentRef) {
        React.Children.map(this.props.children, function (child, i) {
          child.props.tabContentRef.current.hidden = true;
        }); // most recently selected tabContent

        tabContentRef.current.hidden = false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleScrollButtons, false); // call the handle resize function to check if scroll buttons should be shown

      this.handleScrollButtons();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('resize', this.handleScrollButtons, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          activeKey = _this$props.activeKey,
          id = _this$props.id,
          isFilled = _this$props.isFilled,
          isSecondary = _this$props.isSecondary,
          leftScrollAriaLabel = _this$props.leftScrollAriaLabel,
          rightScrollAriaLabel = _this$props.rightScrollAriaLabel,
          props = _objectWithoutProperties(_this$props, ["className", "children", "activeKey", "id", "isFilled", "isSecondary", "leftScrollAriaLabel", "rightScrollAriaLabel"]);

      var _this$state = this.state,
          showLeftScrollButton = _this$state.showLeftScrollButton,
          showRightScrollButton = _this$state.showRightScrollButton,
          highlightLeftScrollButton = _this$state.highlightLeftScrollButton,
          highlightRightScrollButton = _this$state.highlightRightScrollButton;
      return React.createElement(React.Fragment, null, !isSecondary && React.createElement("button", {
        className: css(styles.tabsScrollButton),
        variant: "plain",
        "aria-label": leftScrollAriaLabel,
        onClick: this.scrollLeft
      }, React.createElement(AngleLeftIcon, null)), React.createElement("ul", {
        className: css(styles.tabsList),
        ref: this.tabList,
        onScroll: this.handleScrollButtons
      }, children.map(function (child, index) {
        return React.createElement("li", {
          key: index,
          className: css(styles.tabsItem, child.props.eventKey === activeKey && styles.modifiers.current, className)
        }, React.createElement(Tab, _extends({}, child.props, {
          ref: function ref(node) {
            _this2.child = node;
          },
          className: css(styles.tabsButton),
          onClick: function onClick(event) {
            return _this2.handleTabClick(event, child.props.eventKey, child.props.tabContentRef);
          },
          id: "pf-tab-".concat(child.props.eventKey, "-").concat(child.props.id || id),
          "aria-controls": child.props.tabContentId ? child.props.tabContentId : "pf-tab-section-".concat(child.props.eventKey, "-").concat(child.props.id || id)
        }), child.props.title));
      })), !isSecondary && React.createElement("button", {
        className: css(styles.tabsScrollButton),
        variant: "plain",
        "aria-label": rightScrollAriaLabel,
        onClick: this.scrollRight
      }, React.createElement(AngleRightIcon, null)));
    }
  }]);

  return InternalTabs;
}(React.Component);

_defineProperty(InternalTabs, "propTypes", propTypes);

_defineProperty(InternalTabs, "defaultProps", defaultProps);

var InternalTabContainer = function InternalTabContainer(_ref4) {
  var activeKey = _ref4.activeKey,
      children = _ref4.children,
      id = _ref4.id,
      props = _objectWithoutProperties(_ref4, ["activeKey", "children", "id"]);

  return React.createElement(React.Fragment, null, children.map(function (child, index) {
    return !child.props.children ? null : React.createElement(TabContent, {
      key: index,
      activeKey: activeKey,
      child: child,
      id: child.props.id || id
    });
  }));
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;