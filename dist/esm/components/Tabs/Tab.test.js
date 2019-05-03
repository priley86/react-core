import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';
test('should render tab', function () {
  var view = shallow(React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});
test('should render active tab', function () {
  var view = shallow(React.createElement(Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1",
    isActive: true
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});