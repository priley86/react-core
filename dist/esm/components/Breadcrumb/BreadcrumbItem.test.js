import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { shallow } from 'enzyme';
describe('BreadcrumbItem component', function () {
  test('should render default breadcrumbItem', function () {
    var view = shallow(React.createElement(BreadcrumbItem, null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with className', function () {
    var view = shallow(React.createElement(BreadcrumbItem, {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with id', function () {
    var view = shallow(React.createElement(BreadcrumbItem, {
      id: "Item 1"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render active breadcrumbItem', function () {
    var view = shallow(React.createElement(BreadcrumbItem, {
      isActive: true
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbItem', function () {
    var view = shallow(React.createElement(BreadcrumbItem, {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with target', function () {
    var view = shallow(React.createElement(BreadcrumbItem, {
      target: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with custom element', function () {
    var view = shallow(React.createElement(BreadcrumbItem, null, React.createElement("h1", null, "Header")));
    expect(view).toMatchSnapshot();
  });
});