"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core", "../../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js", "../../../@patternfly/patternfly/utilities/Spacing/spacing.css.js", "@patternfly/react-styles", "@patternfly/react-icons", "./imgBrand.png", "./imgAvatar.svg"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"), require("../../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js"), require("../../../@patternfly/patternfly/utilities/Spacing/spacing.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("./imgBrand.png"), require("./imgAvatar.svg"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore, global.accessibilityCss, global.spacingCss, global.reactStyles, global.reactIcons, global.imgBrand, global.imgAvatar);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactCore, _accessibilityCss, _spacingCss, _reactStyles, _reactIcons, _imgBrand, _imgAvatar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _accessibilityCss2 = _interopRequireDefault(_accessibilityCss);

  var _spacingCss2 = _interopRequireDefault(_spacingCss);

  var _imgBrand2 = _interopRequireDefault(_imgBrand);

  var _imgAvatar2 = _interopRequireDefault(_imgAvatar);

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

  var PageLayoutGroupsNav =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PageLayoutGroupsNav, _React$Component);

    function PageLayoutGroupsNav(props) {
      var _this;

      _classCallCheck(this, PageLayoutGroupsNav);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayoutGroupsNav).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "onDropdownToggle", function (isDropdownOpen) {
        _this.setState({
          isDropdownOpen: isDropdownOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onDropdownSelect", function (event) {
        _this.setState({
          isDropdownOpen: !_this.state.isDropdownOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onKebabDropdownToggle", function (isKebabDropdownOpen) {
        _this.setState({
          isKebabDropdownOpen: isKebabDropdownOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onKebabDropdownSelect", function (event) {
        _this.setState({
          isKebabDropdownOpen: !_this.state.isKebabDropdownOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onNavSelect", function (result) {
        _this.setState({
          activeItem: result.itemId
        });
      });

      _this.state = {
        isDropdownOpen: false,
        isKebabDropdownOpen: false,
        activeItem: 'grp-1_itm-1'
      };
      return _this;
    }

    _createClass(PageLayoutGroupsNav, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            isDropdownOpen = _this$state.isDropdownOpen,
            isKebabDropdownOpen = _this$state.isKebabDropdownOpen,
            activeItem = _this$state.activeItem;

        var PageNav = _react2["default"].createElement(_reactCore.Nav, {
          onSelect: this.onNavSelect,
          "aria-label": "Nav"
        }, _react2["default"].createElement(_reactCore.NavGroup, {
          title: "System Panel"
        }, _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-1",
          itemId: "grp-1_itm-1",
          isActive: activeItem === 'grp-1_itm-1'
        }, "Overview"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-2",
          itemId: "grp-1_itm-2",
          isActive: activeItem === 'grp-1_itm-2'
        }, "Resource Usage"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-3",
          itemId: "grp-1_itm-3",
          isActive: activeItem === 'grp-1_itm-3'
        }, "Hypervisors"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-4",
          itemId: "grp-1_itm-4",
          isActive: activeItem === 'grp-1_itm-4'
        }, "Instances"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-5",
          itemId: "grp-1_itm-5",
          isActive: activeItem === 'grp-1_itm-5'
        }, "Volumes"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-6",
          itemId: "grp-1_itm-6",
          isActive: activeItem === 'grp-1_itm-6'
        }, "Network")), _react2["default"].createElement(_reactCore.NavGroup, {
          title: "Policy"
        }, _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-7",
          itemId: "grp-2_itm-1",
          isActive: activeItem === 'grp-2_itm-1'
        }, "Hosts"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-8",
          itemId: "grp-2_itm-2",
          isActive: activeItem === 'grp-2_itm-2'
        }, "Virtual Machines"), _react2["default"].createElement(_reactCore.NavItem, {
          to: "#grouped-9",
          itemId: "grp-2_itm-3",
          isActive: activeItem === 'grp-2_itm-3'
        }, "Storage")));

        var kebabDropdownItems = [_react2["default"].createElement(_reactCore.DropdownItem, null, _react2["default"].createElement(_reactIcons.BellIcon, null), " Notifications"), _react2["default"].createElement(_reactCore.DropdownItem, null, _react2["default"].createElement(_reactIcons.CogIcon, null), " Settings")];
        var userDropdownItems = [_react2["default"].createElement(_reactCore.DropdownItem, null, "Link"), _react2["default"].createElement(_reactCore.DropdownItem, {
          component: "button"
        }, "Action"), _react2["default"].createElement(_reactCore.DropdownItem, {
          isDisabled: true
        }, "Disabled Link"), _react2["default"].createElement(_reactCore.DropdownItem, {
          isDisabled: true,
          component: "button"
        }, "Disabled Action"), _react2["default"].createElement(_reactCore.DropdownSeparator, null), _react2["default"].createElement(_reactCore.DropdownItem, null, "Separated Link"), _react2["default"].createElement(_reactCore.DropdownItem, {
          component: "button"
        }, "Separated Action")];

        var PageToolbar = _react2["default"].createElement(_reactCore.Toolbar, null, _react2["default"].createElement(_reactCore.ToolbarGroup, {
          className: (0, _reactStyles.css)(_accessibilityCss2["default"].screenReader, _accessibilityCss2["default"].visibleOnLg)
        }, _react2["default"].createElement(_reactCore.ToolbarItem, null, _react2["default"].createElement(_reactCore.Button, {
          id: "groups-example-uid-01",
          "aria-label": "Notifications actions",
          variant: _reactCore.ButtonVariant.plain
        }, _react2["default"].createElement(_reactIcons.BellIcon, null))), _react2["default"].createElement(_reactCore.ToolbarItem, null, _react2["default"].createElement(_reactCore.Button, {
          id: "groups-example-uid-02",
          "aria-label": "Setings actions",
          variant: _reactCore.ButtonVariant.plain
        }, _react2["default"].createElement(_reactIcons.CogIcon, null)))), _react2["default"].createElement(_reactCore.ToolbarGroup, null, _react2["default"].createElement(_reactCore.ToolbarItem, {
          className: (0, _reactStyles.css)(_accessibilityCss2["default"].hiddenOnLg, _spacingCss2["default"].mr_0)
        }, _react2["default"].createElement(_reactCore.Dropdown, {
          isPlain: true,
          position: "right",
          onSelect: this.onKebabDropdownSelect,
          toggle: _react2["default"].createElement(_reactCore.KebabToggle, {
            onToggle: this.onKebabDropdownToggle
          }),
          isOpen: isKebabDropdownOpen,
          dropdownItems: kebabDropdownItems
        })), _react2["default"].createElement(_reactCore.ToolbarItem, {
          className: (0, _reactStyles.css)(_accessibilityCss2["default"].screenReader, _accessibilityCss2["default"].visibleOnMd)
        }, _react2["default"].createElement(_reactCore.Dropdown, {
          isPlain: true,
          position: "right",
          onSelect: this.onDropdownSelect,
          isOpen: isDropdownOpen,
          toggle: _react2["default"].createElement(_reactCore.DropdownToggle, {
            onToggle: this.onDropdownToggle
          }, "Kyle Baker"),
          dropdownItems: userDropdownItems
        }))));

        var Header = _react2["default"].createElement(_reactCore.PageHeader, {
          logo: _react2["default"].createElement(_reactCore.Brand, {
            src: _imgBrand2["default"],
            alt: "Patternfly Logo"
          }),
          toolbar: PageToolbar,
          avatar: _react2["default"].createElement(_reactCore.Avatar, {
            src: _imgAvatar2["default"],
            alt: "Avatar image"
          }),
          showNavToggle: true
        });

        var Sidebar = _react2["default"].createElement(_reactCore.PageSidebar, {
          nav: PageNav
        });

        var PageSkipToContent = _react2["default"].createElement(_reactCore.SkipToContent, {
          href: "#main-content-page-layout-group-nav"
        }, "Skip to Content");

        return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_reactCore.Page, {
          header: Header,
          sidebar: Sidebar,
          isManagedSidebar: true,
          skipToContent: PageSkipToContent
        }, _react2["default"].createElement(_reactCore.PageSection, {
          variant: _reactCore.PageSectionVariants.light
        }, _react2["default"].createElement(_reactCore.TextContent, null, _react2["default"].createElement(_reactCore.Text, {
          component: "h1"
        }, "Main Title"), _react2["default"].createElement(_reactCore.Text, {
          component: "p"
        }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", _react2["default"].createElement("br", null), "of it\u2019s relative line height of 1.5."))), _react2["default"].createElement(_reactCore.PageSection, {
          variant: _reactCore.PageSectionVariants.light
        }, "Light"), _react2["default"].createElement(_reactCore.PageSection, {
          variant: _reactCore.PageSectionVariants.dark
        }, "Dark"), _react2["default"].createElement(_reactCore.PageSection, {
          variant: _reactCore.PageSectionVariants.darker
        }, "Darker"), _react2["default"].createElement(_reactCore.PageSection, null, "Content")));
      }
    }]);

    return PageLayoutGroupsNav;
  }(_react2["default"].Component);

  exports["default"] = PageLayoutGroupsNav;
});