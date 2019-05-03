"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Page = _interopRequireDefault(require("./Page"));

var _PageHeader = _interopRequireDefault(require("./PageHeader"));

var _PageSidebar = _interopRequireDefault(require("./PageSidebar"));

var _PageSection = _interopRequireDefault(require("./PageSection"));

var _Breadcrumb = require("../Breadcrumb");

var _SkipToContent = require("../SkipToContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  'aria-label': 'Page layout',
  id: 'PageId',
  className: 'my-page-class'
};
test('Check page vertical layout example against snapshot', function () {
  var Header = _react["default"].createElement(_PageHeader["default"], {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });

  var Sidebar = _react["default"].createElement(_PageSidebar["default"], {
    nav: "Navigation",
    isNavOpen: true
  });

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Page["default"], _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), _react["default"].createElement(_PageSection["default"], {
    variant: "default"
  }, "Section with default background"), _react["default"].createElement(_PageSection["default"], {
    variant: "light"
  }, "Section with light background"), _react["default"].createElement(_PageSection["default"], {
    variant: "dark"
  }, "Section with dark background"), _react["default"].createElement(_PageSection["default"], {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page horizontal layout example against snapshot', function () {
  var Header = _react["default"].createElement(_PageHeader["default"], {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });

  var Sidebar = _react["default"].createElement(_PageSidebar["default"], {
    isNavOpen: true
  });

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Page["default"], _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar
  }), _react["default"].createElement(_PageSection["default"], {
    variant: "default"
  }, "Section with default background"), _react["default"].createElement(_PageSection["default"], {
    variant: "light"
  }, "Section with light background"), _react["default"].createElement(_PageSection["default"], {
    variant: "dark"
  }, "Section with dark background"), _react["default"].createElement(_PageSection["default"], {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify breadcrumb is created', function () {
  var Header = _react["default"].createElement(_PageHeader["default"], {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });

  var Sidebar = _react["default"].createElement(_PageSidebar["default"], {
    isNavOpen: true
  });

  var PageBreadcrumb = _react["default"].createElement(_Breadcrumb.Breadcrumb, null, _react["default"].createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Page["default"], _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb
  }), _react["default"].createElement(_PageSection["default"], {
    variant: "default"
  }, "Section with default background"), _react["default"].createElement(_PageSection["default"], {
    variant: "light"
  }, "Section with light background"), _react["default"].createElement(_PageSection["default"], {
    variant: "dark"
  }, "Section with dark background"), _react["default"].createElement(_PageSection["default"], {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify skip to content is created', function () {
  var Header = _react["default"].createElement(_PageHeader["default"], {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });

  var Sidebar = _react["default"].createElement(_PageSidebar["default"], {
    isNavOpen: true
  });

  var PageBreadcrumb = _react["default"].createElement(_Breadcrumb.Breadcrumb, null, _react["default"].createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), _react["default"].createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));

  var PageSkipToContent = _react["default"].createElement(_SkipToContent.SkipToContent, {
    href: "#main-content-page-layout-default-nav"
  }, "Skip to Content");

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Page["default"], _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb,
    skipToContent: PageSkipToContent
  }), _react["default"].createElement(_PageSection["default"], {
    variant: "default"
  }, "Section with default background"), _react["default"].createElement(_PageSection["default"], {
    variant: "light"
  }, "Section with light background"), _react["default"].createElement(_PageSection["default"], {
    variant: "dark"
  }, "Section with dark background"), _react["default"].createElement(_PageSection["default"], {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});