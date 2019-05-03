import React from 'react';
import { mount } from 'enzyme';
import Split from './Split';
import SplitItem from './SplitItem';
import { GutterSize } from '../../styles/gutters';
test('isMain', function () {
  var view = mount(React.createElement(Split, null, React.createElement(SplitItem, {
    isMain: true
  }, "Main content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
  var view = mount(React.createElement(Split, null, React.createElement(SplitItem, null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = mount(React.createElement(Split, {
      gutter: gutter
    }, React.createElement(SplitItem, null, "Basic Content")));
    expect(view).toMatchSnapshot();
  });
});