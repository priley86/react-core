import React from 'react';
import BreadcrumbHeading from './BreadcrumbHeading';
import { shallow } from 'enzyme';
describe('BreadcrumbHeading component', function () {
  test('should render default breadcrumbHeading', function () {
    var view = shallow(React.createElement(BreadcrumbHeading, null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass classname', function () {
    var view = shallow(React.createElement(BreadcrumbHeading, {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass custom id', function () {
    var view = shallow(React.createElement(BreadcrumbHeading, {
      id: "Id"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbTItle', function () {
    var view = shallow(React.createElement(BreadcrumbHeading, {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbHeading with target', function () {
    var view = shallow(React.createElement(BreadcrumbHeading, {
      to: "#here",
      target: "_blank"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
});