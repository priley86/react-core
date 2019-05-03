function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import Page from './Page';
import PageHeader from './PageHeader';
import PageSidebar from './PageSidebar';
import PageSection from './PageSection';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { SkipToContent } from '../SkipToContent';
var props = {
  'aria-label': 'Page layout',
  id: 'PageId',
  className: 'my-page-class'
};
test('Check page vertical layout example against snapshot', function () {
  var Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });
  var Sidebar = React.createElement(PageSidebar, {
    nav: "Navigation",
    isNavOpen: true
  });
  var view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page horizontal layout example against snapshot', function () {
  var Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });
  var Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
  });
  var view = mount(React.createElement(Page, _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify breadcrumb is created', function () {
  var Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });
  var Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
  });
  var PageBreadcrumb = React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, null, "Section Home"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));
  var view = mount(React.createElement(Page, _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify skip to content is created', function () {
  var Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    nav: "Navigation"
  });
  var Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
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
    href: "#main-content-page-layout-default-nav"
  }, "Skip to Content");
  var view = mount(React.createElement(Page, _extends({}, props, {
    layout: "horizontal",
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb,
    skipToContent: PageSkipToContent
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});