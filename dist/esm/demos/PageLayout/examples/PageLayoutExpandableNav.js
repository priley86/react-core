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

import React from 'react';
import { Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Card, CardBody, Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, Gallery, GalleryItem, KebabToggle, Nav, NavExpandable, NavItem, NavList, Page, PageHeader, PageSection, PageSectionVariants, PageSidebar, SkipToContent, TextContent, Text, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core'; // make sure you've installed @patternfly/patternfly

import accessibleStyles from "../../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js";
import spacingStyles from "../../../@patternfly/patternfly/utilities/Spacing/spacing.css.js";
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

var PageLayoutExpandableNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageLayoutExpandableNav, _React$Component);

  function PageLayoutExpandableNav(props) {
    var _this;

    _classCallCheck(this, PageLayoutExpandableNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayoutExpandableNav).call(this, props));

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
        activeItem: result.itemId,
        activeGroup: result.groupId
      });
    });

    _this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };
    return _this;
  }

  _createClass(PageLayoutExpandableNav, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDropdownOpen = _this$state.isDropdownOpen,
          isKebabDropdownOpen = _this$state.isKebabDropdownOpen,
          activeItem = _this$state.activeItem,
          activeGroup = _this$state.activeGroup;
      var PageNav = React.createElement(Nav, {
        onSelect: this.onNavSelect,
        "aria-label": "Nav"
      }, React.createElement(NavList, null, React.createElement(NavExpandable, {
        title: "System Panel",
        groupId: "grp-1",
        isActive: activeGroup === 'grp-1',
        isExpanded: true
      }, React.createElement(NavItem, {
        to: "#expandable-1",
        groupId: "grp-1",
        itemId: "grp-1_itm-1",
        isActive: activeItem === 'grp-1_itm-1'
      }, "Overview"), React.createElement(NavItem, {
        to: "#expandable-2",
        groupId: "grp-1",
        itemId: "grp-1_itm-2",
        isActive: activeItem === 'grp-1_itm-2'
      }, "Resource Usage"), React.createElement(NavItem, {
        to: "#expandable-3",
        groupId: "grp-1",
        itemId: "grp-1_itm-3",
        isActive: activeItem === 'grp-1_itm-3'
      }, "Hypervisors"), React.createElement(NavItem, {
        to: "#expandable-4",
        groupId: "grp-1",
        itemId: "grp-1_itm-4",
        isActive: activeItem === 'grp-1_itm-4'
      }, "Instances"), React.createElement(NavItem, {
        to: "#expandable-5",
        groupId: "grp-1",
        itemId: "grp-1_itm-5",
        isActive: activeItem === 'grp-1_itm-5'
      }, "Volumes"), React.createElement(NavItem, {
        to: "#expandable-6",
        groupId: "grp-1",
        itemId: "grp-1_itm-6",
        isActive: activeItem === 'grp-1_itm-6'
      }, "Network")), React.createElement(NavExpandable, {
        title: "Policy",
        groupId: "grp-2",
        isActive: activeGroup === 'grp-2'
      }, React.createElement(NavItem, {
        to: "#expandable-4",
        groupId: "grp-2",
        itemId: "grp-2_itm-1",
        isActive: activeItem === 'grp-2_itm-1'
      }, "Subnav Link 1"), React.createElement(NavItem, {
        to: "#expandable-5",
        groupId: "grp-2",
        itemId: "grp-2_itm-2",
        isActive: activeItem === 'grp-2_itm-2'
      }, "Subnav Link 2")), React.createElement(NavExpandable, {
        title: "Authentication",
        groupId: "grp-3",
        isActive: activeGroup === 'grp-3'
      }, React.createElement(NavItem, {
        to: "#expandable-7",
        groupId: "grp-3",
        itemId: "grp-3_itm-1",
        isActive: activeItem === 'grp-3_itm-1'
      }, "Subnav Link 1"), React.createElement(NavItem, {
        to: "#expandable-8",
        groupId: "grp-3",
        itemId: "grp-3_itm-2",
        isActive: activeItem === 'grp-3_itm-2'
      }, "Subnav Link 2"))));
      var kebabDropdownItems = [React.createElement(DropdownItem, null, React.createElement(BellIcon, null), " Notifications"), React.createElement(DropdownItem, null, React.createElement(CogIcon, null), " Settings")];
      var userDropdownItems = [React.createElement(DropdownItem, null, "Link"), React.createElement(DropdownItem, {
        component: "button"
      }, "Action"), React.createElement(DropdownItem, {
        isDisabled: true
      }, "Disabled Link"), React.createElement(DropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Disabled Action"), React.createElement(DropdownSeparator, null), React.createElement(DropdownItem, null, "Separated Link"), React.createElement(DropdownItem, {
        component: "button"
      }, "Separated Action")];
      var PageToolbar = React.createElement(Toolbar, null, React.createElement(ToolbarGroup, {
        className: css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)
      }, React.createElement(ToolbarItem, null, React.createElement(Button, {
        id: "expanded-example-uid-01",
        "aria-label": "Notifications actions",
        variant: ButtonVariant.plain
      }, React.createElement(BellIcon, null))), React.createElement(ToolbarItem, null, React.createElement(Button, {
        id: "expanded-example-uid-02",
        "aria-label": "Settings actions",
        variant: ButtonVariant.plain
      }, React.createElement(CogIcon, null)))), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, {
        className: css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)
      }, React.createElement(Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onKebabDropdownSelect,
        toggle: React.createElement(KebabToggle, {
          onToggle: this.onKebabDropdownToggle
        }),
        isOpen: isKebabDropdownOpen,
        dropdownItems: kebabDropdownItems
      })), React.createElement(ToolbarItem, {
        className: css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)
      }, React.createElement(Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onDropdownSelect,
        isOpen: isDropdownOpen,
        toggle: React.createElement(DropdownToggle, {
          onToggle: this.onDropdownToggle
        }, "Kyle Baker"),
        dropdownItems: userDropdownItems
      }))));
      var Header = React.createElement(PageHeader, {
        logo: React.createElement(Brand, {
          src: imgBrand,
          alt: "Patternfly Logo"
        }),
        toolbar: PageToolbar,
        avatar: React.createElement(Avatar, {
          src: imgAvatar,
          alt: "Avatar image"
        }),
        showNavToggle: true
      });
      var Sidebar = React.createElement(PageSidebar, {
        nav: PageNav
      });
      var PageBreadcrumb = React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, null, "Section Home"), React.createElement(BreadcrumbItem, {
        to: "#"
      }, "Section Title"), React.createElement(BreadcrumbItem, {
        to: "#"
      }, "Section Title"), React.createElement(BreadcrumbItem, {
        to: "#",
        isActive: true
      }, "Section Landing"));
      var PageSkipToContent = React.createElement(SkipToContent, {
        href: "#main-content-page-layout-expandable-nav"
      }, "Skip to Content");
      return React.createElement(React.Fragment, null, React.createElement(Page, {
        header: Header,
        sidebar: Sidebar,
        isManagedSidebar: true,
        skipToContent: PageSkipToContent,
        breadcrumb: PageBreadcrumb
      }, React.createElement(PageSection, {
        variant: PageSectionVariants.light
      }, React.createElement(TextContent, null, React.createElement(Text, {
        component: "h1"
      }, "Main Title"), React.createElement(Text, {
        component: "p"
      }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", React.createElement("br", null), "of it\u2019s relative line height of 1.5."))), React.createElement(PageSection, null, React.createElement(Gallery, {
        gutter: "md"
      }, Array.apply(0, Array(10)).map(function (x, i) {
        return React.createElement(GalleryItem, {
          key: i
        }, React.createElement(Card, null, React.createElement(CardBody, null, "This is a card")));
      })))));
    }
  }]);

  return PageLayoutExpandableNav;
}(React.Component);

export default PageLayoutExpandableNav;