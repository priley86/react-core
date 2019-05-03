import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { shallow } from 'enzyme';
describe('Breadcrumb component', function () {
  test('should render default breadcrumb', function () {
    var view = shallow(React.createElement(Breadcrumb, null));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with className', function () {
    var view = shallow(React.createElement(Breadcrumb, {
      className: "className"
    }));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with aria-label', function () {
    var view = shallow(React.createElement(Breadcrumb, {
      "aria-label": "custom label"
    }));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with children', function () {
    var view = shallow(React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, {
      to: "#"
    }, "Item 1"), " ", React.createElement(BreadcrumbItem, {
      to: "#"
    }, "Item 1")));
    expect(view).toMatchSnapshot();
  });
});