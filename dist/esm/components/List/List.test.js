import React from 'react';
import { mount } from 'enzyme';
import List from './List';
import ListItem from './ListItem';

var ListItems = function ListItems() {
  return React.createElement(React.Fragment, null, React.createElement(List, null, React.createElement(ListItem, null, "First"), React.createElement(ListItem, null, "Second"), React.createElement(ListItem, null, "Third")));
};

describe('list', function () {
  test('simple list', function () {
    var view = mount(React.createElement(List, null, React.createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
  test('inline list', function () {
    var view = mount(React.createElement(List, {
      variant: "inline"
    }, React.createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
  test('grid list', function () {
    var view = mount(React.createElement(List, {
      variant: "grid"
    }, React.createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
});