import React from 'react';
import { mount } from 'enzyme';
import DropdownToggle from './DropdownToggle';
import KebabToggle from './KebabToggle';
test('Dropdown toggle', function () {
  var view = mount(React.createElement(DropdownToggle, {
    id: "Dropdown Toggle"
  }, "Dropdown"));
  expect(view).toMatchSnapshot();
});
test('Kebab toggle', function () {
  var view = mount(React.createElement(KebabToggle, {
    id: "Dropdown Toggle"
  }));
  expect(view).toMatchSnapshot();
});