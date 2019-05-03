import React from 'react';
import { mount } from 'enzyme';
import Toolbar from './Toolbar';
import ToolbarGroup from './ToolbarGroup';
import ToolbarItem from './ToolbarItem';
import ToolbarSection from './ToolbarSection';
test('Simple toolbar with single group', function () {
  var view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with multiple groups', function () {
  var view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 3")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4"), React.createElement(ToolbarItem, null, "Item 5"), React.createElement(ToolbarItem, null, "Item 6"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with sections', function () {
  var view = mount(React.createElement(Toolbar, null, React.createElement(ToolbarSection, {
    "aria-label": "First section"
  }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1"), React.createElement(ToolbarItem, null, "Item 2")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 3"))), React.createElement(ToolbarSection, {
    "aria-label": "Second section"
  }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4"), React.createElement(ToolbarItem, null, "Item 5"), React.createElement(ToolbarItem, null, "Item 6")))));
  expect(view).toMatchSnapshot();
});