import React from 'react';
import { mount } from 'enzyme';
import Stack from './Stack';
import StackItem from './StackItem';
import { GutterSize } from '../../styles/gutters';
test('isMain set to true', function () {
  var view = mount(React.createElement(Stack, null, React.createElement(StackItem, {
    isFilled: true
  }, "Filled content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
  var view = mount(React.createElement(Stack, null, React.createElement(StackItem, null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = mount(React.createElement(Stack, {
      gutter: gutter
    }, React.createElement(StackItem, null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
});