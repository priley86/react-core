import React from 'react';
import Grid from './Grid';
import { GutterSize } from '../../styles/gutters';
import { shallow } from 'enzyme';
Object.values(GutterSize).forEach(function (gutter) {
  test("gutter ".concat(gutter), function () {
    var view = shallow(React.createElement(Grid, {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});