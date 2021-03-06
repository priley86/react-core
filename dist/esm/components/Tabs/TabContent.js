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
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** content rendered inside the tab content area if used outside Tabs component */
  children: PropTypes.any,

  /** class of tab content area if used outside Tabs component */
  className: PropTypes.string,

  /** uniquely identifies the controlling Tab if used outside Tabs component */
  eventKey: PropTypes.number,

  /** id passed from parent to identify the content section */
  id: PropTypes.string.isRequired,

  /** title of controlling Tab if used outside Tabs component */
  'aria-label': PropTypes.string
};
var defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent() {
    _classCallCheck(this, TabContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabContent).apply(this, arguments));
  }

  _createClass(TabContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          activeKey = _this$props.activeKey,
          ariaLabel = _this$props['aria-label'],
          child = _this$props.child,
          children = _this$props.children,
          className = _this$props.className,
          eventKey = _this$props.eventKey,
          innerRef = _this$props.innerRef,
          props = _objectWithoutProperties(_this$props, ["id", "activeKey", "aria-label", "child", "children", "className", "eventKey", "innerRef"]);

      if (children || child) {
        return React.createElement("section", _extends({
          ref: innerRef,
          index: eventKey,
          hidden: children ? null : child.props.eventKey !== activeKey,
          className: children ? css('pf-c-tab-content', className) : css('pf-c-tab-content', child.props.className),
          id: children ? id : "pf-tab-section-".concat(child.props.eventKey, "-").concat(id),
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabel ? null : children ? "pf-tab-".concat(eventKey, "-").concat(id) : "pf-tab-".concat(child.props.eventKey, "-").concat(id),
          role: "tabpanel",
          tabIndex: "0"
        }, props), children ? children : child.props.children);
      } else {
        return null;
      }
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
export default React.forwardRef(function (props, ref) {
  return React.createElement(TabContent, _extends({
    innerRef: ref
  }, props));
});