function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /** content rendered inside the Tab content area. */
  children: PropTypes.node,

  /** additional classes added to the Tab */
  className: PropTypes.string,

  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs variant="nav"> should have an href. */
  href: PropTypes.string,

  /** Tab title */
  title: PropTypes.string.isRequired,

  /** uniquely identifies the tab */
  eventKey: PropTypes.number.isRequired,

  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: PropTypes.node
};
var defaultProps = {
  children: null,
  className: '',
  href: null,
  tabContentId: null,
  tabContentRef: null
};

var withForwardedRef = function withForwardedRef(Component) {
  var TabContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TabContainer, _React$Component);

    function TabContainer() {
      _classCallCheck(this, TabContainer);

      return _possibleConstructorReturn(this, _getPrototypeOf(TabContainer).apply(this, arguments));
    }

    _createClass(TabContainer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            tabContentRef = _this$props.tabContentRef,
            rest = _objectWithoutProperties(_this$props, ["tabContentRef"]);

        return React.createElement(Component, _extends({
          ref: tabContentRef
        }, rest));
      }
    }]);

    return TabContainer;
  }(React.Component);

  return React.forwardRef(function (props, tabContentRef) {
    return React.createElement(TabContainer, _extends({}, props, {
      forwardRef: tabContentRef
    }));
  });
};

var Tab =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Tab, _React$Component2);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      // destructuring to prevent console warnings for applying eventKey, forwardRef, and tabContentId to a DOM element and remove title from the DOM element
      var _this$props2 = this.props,
          children = _this$props2.children,
          eventKey = _this$props2.eventKey,
          tabContentId = _this$props2.tabContentId,
          tabContentRef = _this$props2.tabContentRef,
          forwardRef = _this$props2.forwardRef,
          title = _this$props2.title,
          props = _objectWithoutProperties(_this$props2, ["children", "eventKey", "tabContentId", "tabContentRef", "forwardRef", "title"]);

      var Component = props.href ? 'a' : 'button';
      return React.createElement(Component, _extends({}, props, {
        ref: tabContentRef
      }), children);
    }
  }]);

  return Tab;
}(React.Component);

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default withForwardedRef(Tab);