"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Page/page.css.js", "@patternfly/react-styles", "prop-types", "@patternfly/react-tokens", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Page/page.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("@patternfly/react-tokens"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.pageCss, global.reactStyles, global.propTypes, global.reactTokens, global.util);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _pageCss, _reactStyles, _propTypes, _reactTokens, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PageLayouts = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _pageCss2 = _interopRequireDefault(_pageCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var PageLayouts = exports.PageLayouts = {
    vertical: 'vertical',
    horizontal: 'horizontal'
  };
  var propTypes = {
    /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
    children: _propTypes2["default"].node,

    /** Additional classes added to the page layout */
    className: _propTypes2["default"].string,

    /** Header component (e.g. <PageHeader />) */
    header: _propTypes2["default"].node,

    /** Sidebar component for a side nav (e.g. <PageSidebar />) */
    sidebar: _propTypes2["default"].node,

    /** Skip to content component for the page */
    skipToContent: _propTypes2["default"].node,

    /** Breadcrumb component for the page */
    breadcrumb: _propTypes2["default"].node,

    /** If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into
     * the sidebar component or add a callback onNavToggle function into the PageHeader component */
    isManagedSidebar: _propTypes2["default"].bool,

    /** Can add callback to be notified when resize occurs, for example to set the sidebar isNav prop to false for a width < 768px
     * Returns object { mobileView: boolean, windowSize: number } */
    onPageResize: _propTypes2["default"].func,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    breadcrumb: null,
    children: null,
    className: '',
    header: null,
    sidebar: null,
    skipToContent: null,
    isManagedSidebar: false,
    onPageResize: null
  };

  var Page =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Page);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        desktopIsNavOpen: true,
        mobileIsNavOpen: false,
        mobileView: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleResize", function (e) {
        var onPageResize = _this.props.onPageResize;
        var windowSize = window.innerWidth;
        var mobileView = windowSize < Number.parseInt(_reactTokens.global_breakpoint_md.value, 10);
        onPageResize && onPageResize({
          mobileView: mobileView,
          windowSize: windowSize
        });

        _this.setState(function (prevState) {
          return {
            mobileView: mobileView
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onNavToggleMobile", function () {
        _this.setState({
          mobileIsNavOpen: !_this.state.mobileIsNavOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onNavToggleDesktop", function () {
        _this.setState({
          desktopIsNavOpen: !_this.state.desktopIsNavOpen
        });
      });

      return _this;
    }

    _createClass(Page, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            isManagedSidebar = _this$props.isManagedSidebar,
            onPageResize = _this$props.onPageResize;

        if (isManagedSidebar || onPageResize) {
          window.addEventListener('resize', (0, _util.debounce)(this.handleResize, 250)); // Initial check if should be shown

          this.handleResize();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this$props2 = this.props,
            isManagedSidebar = _this$props2.isManagedSidebar,
            onPageResize = _this$props2.onPageResize;
        (isManagedSidebar || onPageResize) && window.removeEventListener('resize', (0, _util.debounce)(this.handleResize, 250));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            breadcrumb = _this$props3.breadcrumb,
            className = _this$props3.className,
            children = _this$props3.children,
            header = _this$props3.header,
            sidebar = _this$props3.sidebar,
            skipToContent = _this$props3.skipToContent,
            isManagedSidebar = _this$props3.isManagedSidebar,
            onPageResize = _this$props3.onPageResize,
            rest = _objectWithoutProperties(_this$props3, ["breadcrumb", "className", "children", "header", "sidebar", "skipToContent", "isManagedSidebar", "onPageResize"]);

        var _this$state = this.state,
            mobileView = _this$state.mobileView,
            mobileIsNavOpen = _this$state.mobileIsNavOpen,
            desktopIsNavOpen = _this$state.desktopIsNavOpen;
        return _react2["default"].createElement("div", _extends({}, rest, {
          className: (0, _reactStyles.css)(_pageCss2["default"].page, className)
        }), skipToContent, isManagedSidebar ? (0, _react.cloneElement)(header, {
          onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
          isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
        }) : header, isManagedSidebar ? (0, _react.cloneElement)(sidebar, {
          isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
        }) : sidebar, _react2["default"].createElement("main", {
          role: "main",
          className: (0, _reactStyles.css)(_pageCss2["default"].pageMain)
        }, breadcrumb && _react2["default"].createElement("section", {
          className: (0, _reactStyles.css)(_pageCss2["default"].pageMainBreadcrumb)
        }, breadcrumb), skipToContent && _react2["default"].createElement("a", {
          id: skipToContent.props.href.replace(/#*/, '')
        }), children));
      }
    }]);

    return Page;
  }(_react2["default"].Component);

  Page.propTypes = propTypes;
  Page.defaultProps = defaultProps;
  exports["default"] = Page;
});