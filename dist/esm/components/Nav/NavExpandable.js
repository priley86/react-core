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
import styles from "../../@patternfly/patternfly/components/Nav/nav.css.js";
import a11yStyles from "../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import NavToggle from './NavToggle';
import { AngleRightIcon } from '@patternfly/react-icons';
import { NavContext } from './Nav';
import { getUniqueId } from '../../helpers/util';
var propTypes = {
  /** Title shown for the expandable list */
  title: PropTypes.string.isRequired,

  /** If defined, screen readers will read this text instead of the list title */
  srText: PropTypes.string,

  /** Boolean to programatically expand or collapse section */
  isExpanded: PropTypes.bool,

  /** Anything that can be rendered inside of the expandable list */
  children: PropTypes.node,

  /** Additional classes added to the container */
  className: PropTypes.string,

  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** If true makes the expandable list title active */
  isActive: PropTypes.bool,

  /** Identifier to use for the section aria label */
  id: PropTypes.string,

  /** Additional props are spread to the container <li> */
  '': PropTypes.any,

  /** allow consumer to optionally override this callback and manage expand state externally */
  onExpand: PropTypes.func
};
var defaultProps = {
  srText: '',
  isExpanded: false,
  children: null,
  className: '',
  groupId: null,
  isActive: false,
  id: '',
  onExpand: undefined
};

var NavExpandable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavExpandable, _React$Component);

  function NavExpandable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavExpandable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavExpandable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || getUniqueId());

    _defineProperty(_assertThisInitialized(_this), "state", {
      expandedState: false
    });

    _defineProperty(_assertThisInitialized(_this), "onExpand", function (e, val) {
      if (_this.props.onExpand) {
        _this.props.onExpand(e, val);
      } else {
        _this.setState({
          expandedState: val
        });
      }
    });

    return _this;
  }

  _createClass(NavExpandable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        expandedState: this.props.isExpanded
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isExpanded !== prevProps.isExpanded) {
        this.setState({
          expandedState: this.props.isExpanded
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          srText = _this$props.srText,
          isExpanded = _this$props.isExpanded,
          children = _this$props.children,
          className = _this$props.className,
          groupId = _this$props.groupId,
          isActive = _this$props.isActive,
          onExpand = _this$props.onExpand,
          props = _objectWithoutProperties(_this$props, ["id", "title", "srText", "isExpanded", "children", "className", "groupId", "isActive", "onExpand"]);

      var expandedState = this.state.expandedState;
      return React.createElement(NavContext.Consumer, null, function (context) {
        return React.createElement(NavToggle, {
          groupId: groupId,
          onToggle: context.onToggle,
          onExpand: _this2.onExpand,
          isExpanded: expandedState
        }, function (_ref) {
          var toggleValue = _ref.toggleValue,
              toggle = _ref.toggle;
          return React.createElement("li", _extends({
            className: css(styles.navItem, toggleValue && styles.modifiers.expanded, isActive && styles.modifiers.current, className),
            onClick: toggle
          }, props), React.createElement("a", {
            "data-component": "pf-nav-expandable",
            className: css(styles.navLink),
            id: srText ? null : _this2.id,
            href: "#",
            onClick: function onClick(e) {
              return e.preventDefault();
            },
            onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            },
            "aria-expanded": toggleValue
          }, title, React.createElement("span", {
            className: css(styles.navToggle)
          }, React.createElement(AngleRightIcon, {
            "aria-hidden": "true"
          }))), React.createElement("section", {
            className: css(styles.navSubnav),
            "aria-labelledby": _this2.id,
            hidden: toggleValue ? null : true
          }, srText && React.createElement("h2", {
            className: css(a11yStyles.screenReader),
            id: _this2.id
          }, srText), React.createElement("ul", {
            className: css(styles.navSimpleList)
          }, children)));
        });
      });
    }
  }]);

  return NavExpandable;
}(React.Component);

NavExpandable.propTypes = propTypes;
NavExpandable.defaultProps = defaultProps;
NavExpandable.componentType = 'NavExpandable';
export default NavExpandable;