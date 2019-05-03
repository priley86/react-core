"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Page", "./PageHeader", "./PageSidebar", "./PageSection", "../Breadcrumb", "../SkipToContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Page"), require("./PageHeader"), require("./PageSidebar"), require("./PageSection"), require("../Breadcrumb"), require("../SkipToContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Page, global.PageHeader, global.PageSidebar, global.PageSection, global.Breadcrumb, global.SkipToContent);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Page, _PageHeader, _PageSidebar, _PageSection, _Breadcrumb, _SkipToContent) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Page2 = _interopRequireDefault(_Page);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  var _PageSidebar2 = _interopRequireDefault(_PageSidebar);

  var _PageSection2 = _interopRequireDefault(_PageSection);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var props = {
    'aria-label': 'Page layout',
    id: 'PageId',
    className: 'my-page-class'
  };
  test('Check page vertical layout example against snapshot', function () {
    var Header = _react2["default"].createElement(_PageHeader2["default"], {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      onNavToggle: function onNavToggle() {
        return undefined;
      }
    });

    var Sidebar = _react2["default"].createElement(_PageSidebar2["default"], {
      nav: "Navigation",
      isNavOpen: true
    });

    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Page2["default"], _extends({}, props, {
      header: Header,
      sidebar: Sidebar
    }), _react2["default"].createElement(_PageSection2["default"], {
      variant: "default"
    }, "Section with default background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "light"
    }, "Section with light background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "dark"
    }, "Section with dark background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "darker"
    }, "Section with darker background")));
    expect(view).toMatchSnapshot();
  });
  test('Check page horizontal layout example against snapshot', function () {
    var Header = _react2["default"].createElement(_PageHeader2["default"], {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      nav: "Navigation"
    });

    var Sidebar = _react2["default"].createElement(_PageSidebar2["default"], {
      isNavOpen: true
    });

    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Page2["default"], _extends({}, props, {
      layout: "horizontal",
      header: Header,
      sidebar: Sidebar
    }), _react2["default"].createElement(_PageSection2["default"], {
      variant: "default"
    }, "Section with default background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "light"
    }, "Section with light background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "dark"
    }, "Section with dark background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "darker"
    }, "Section with darker background")));
    expect(view).toMatchSnapshot();
  });
  test('Check page to verify breadcrumb is created', function () {
    var Header = _react2["default"].createElement(_PageHeader2["default"], {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      nav: "Navigation"
    });

    var Sidebar = _react2["default"].createElement(_PageSidebar2["default"], {
      isNavOpen: true
    });

    var PageBreadcrumb = _react2["default"].createElement(_Breadcrumb.Breadcrumb, null, _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));

    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Page2["default"], _extends({}, props, {
      layout: "horizontal",
      header: Header,
      sidebar: Sidebar,
      breadcrumb: PageBreadcrumb
    }), _react2["default"].createElement(_PageSection2["default"], {
      variant: "default"
    }, "Section with default background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "light"
    }, "Section with light background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "dark"
    }, "Section with dark background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "darker"
    }, "Section with darker background")));
    expect(view).toMatchSnapshot();
  });
  test('Check page to verify skip to content is created', function () {
    var Header = _react2["default"].createElement(_PageHeader2["default"], {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      nav: "Navigation"
    });

    var Sidebar = _react2["default"].createElement(_PageSidebar2["default"], {
      isNavOpen: true
    });

    var PageBreadcrumb = _react2["default"].createElement(_Breadcrumb.Breadcrumb, null, _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), _react2["default"].createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));

    var PageSkipToContent = _react2["default"].createElement(_SkipToContent.SkipToContent, {
      href: "#main-content-page-layout-default-nav"
    }, "Skip to Content");

    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Page2["default"], _extends({}, props, {
      layout: "horizontal",
      header: Header,
      sidebar: Sidebar,
      breadcrumb: PageBreadcrumb,
      skipToContent: PageSkipToContent
    }), _react2["default"].createElement(_PageSection2["default"], {
      variant: "default"
    }, "Section with default background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "light"
    }, "Section with light background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "dark"
    }, "Section with dark background"), _react2["default"].createElement(_PageSection2["default"], {
      variant: "darker"
    }, "Section with darker background")));
    expect(view).toMatchSnapshot();
  });
});