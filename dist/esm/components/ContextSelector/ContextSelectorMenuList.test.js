import React from 'react';
import { shallow } from 'enzyme';
import ContextSelectorItem from './ContextSelectorItem';
import ContextSelectorMenuList from './ContextSelectorMenuList';
var items = [React.createElement(ContextSelectorItem, {
  key: "0"
}, "My Project"), React.createElement(ContextSelectorItem, {
  key: "1"
}, "OpenShift Cluster"), React.createElement(ContextSelectorItem, {
  key: "2"
}, "Production Ansible"), React.createElement(ContextSelectorItem, {
  key: "3"
}, "AWS"), React.createElement(ContextSelectorItem, {
  key: "4"
}, "Azure")];
test('Renders ContextSelectorMenuList open', function () {
  var view = shallow(React.createElement(ContextSelectorMenuList, {
    isOpen: true,
    openedOnEnter: false
  }, items));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorMenuList closed', function () {
  var view = shallow(React.createElement(ContextSelectorMenuList, {
    openedOnEnter: false
  }, items));
  expect(view).toMatchSnapshot();
});