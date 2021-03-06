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
import styles from "../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownArrowContext } from '../Dropdown/dropdownConstants';
import ReactDOM from 'react-dom';
import { keyHandler } from '../../helpers/util';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
var propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,

  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(ApplicationLauncherPosition)),

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: ApplicationLauncherPosition.left
};

var ApplicationLauncherMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicationLauncherMenu, _React$Component);

  function ApplicationLauncherMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ApplicationLauncherMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApplicationLauncherMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "refsCollection", []);

    _defineProperty(_assertThisInitialized(_this), "childKeyHandler", function (index, position) {
      var custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      keyHandler(index, position, _this.refsCollection, _this.props.children, custom);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.key === KEY_CODES.TAB) return;
      event.preventDefault();

      if (event.keyCode === KEY_CODES.ARROW_UP) {
        keyHandler(_this.props.index, KEYHANDLER_DIRECTION.UP, _this.refsCollection, _this.props.children);
      } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
        keyHandler(_this.props.index, KEYHANDLER_DIRECTION.DOWN, _this.refsCollection, _this.props.children);
      } else if (event.key === KEY_CODES.ENTER) {
        if (!_this.ref.current.getAttribute) ReactDOM.findDOMNode(_this.ref.current).click();else {
          _this.ref.current.click && _this.ref.current.click();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "sendRef", function (index, node, isDisabled) {
      if (!node.getAttribute) {
        _this.refsCollection[index] = ReactDOM.findDOMNode(node);
      } else if (isDisabled || node.getAttribute('role') === 'separator') {
        _this.refsCollection[index] = null;
      } else {
        _this.refsCollection[index] = node;
      }
    });

    return _this;
  }

  _createClass(ApplicationLauncherMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.openedOnEnter) {
        this.refsCollection[0].focus();
      }
    }
  }, {
    key: "extendChildren",
    value: function extendChildren() {
      return React.Children.map(this.props.children, function (child, index) {
        return React.cloneElement(child, {
          index: index,
          isAppLauncher: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          position = _this$props.position,
          children = _this$props.children,
          Component = _this$props.component,
          openedOnEnter = _this$props.openedOnEnter,
          props = _objectWithoutProperties(_this$props, ["className", "isOpen", "position", "children", "component", "openedOnEnter"]);

      return React.createElement(DropdownArrowContext.Provider, {
        value: {
          keyHandler: this.childKeyHandler,
          sendRef: this.sendRef
        }
      }, React.createElement("ul", _extends({}, props, {
        className: css(styles.appLauncherMenu, className),
        hidden: !isOpen,
        role: "menu"
      }), this.extendChildren()));
    }
  }]);

  return ApplicationLauncherMenu;
}(React.Component);

ApplicationLauncherMenu.propTypes = propTypes;
ApplicationLauncherMenu.defaultProps = defaultProps;
export default ApplicationLauncherMenu;