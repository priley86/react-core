import React from 'react';
import { shallow } from 'enzyme';
import DropdownItem from './DropdownItem';
import DropdownSeparator from './Separator';
describe('dropdown items', function () {
  test('a', function () {
    var view = shallow(React.createElement(DropdownItem, null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('button', function () {
    var view = shallow(React.createElement(DropdownItem, {
      component: "button"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('separator', function () {
    var view = shallow(React.createElement(DropdownSeparator, null));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('a', function () {
      var view = shallow(React.createElement(DropdownItem, {
        isHovered: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = shallow(React.createElement(DropdownItem, {
        isHovered: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('a', function () {
      var view = shallow(React.createElement(DropdownItem, {
        isDisabled: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = shallow(React.createElement(DropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
});