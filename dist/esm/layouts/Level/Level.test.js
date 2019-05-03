import React from 'react';
import Level from './Level';
import { GutterSize } from '../../styles/gutters';
import LevelItem from './LevelItem';
import { shallow } from 'enzyme';
Object.values(GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = shallow(React.createElement(Level, {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});
test('item', function () {
  var view = shallow(React.createElement(LevelItem, null, "Level Item"));
  expect(view).toMatchSnapshot();
});