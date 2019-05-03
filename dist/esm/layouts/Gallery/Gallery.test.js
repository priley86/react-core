import React from 'react';
import Gallery from './Gallery';
import { GutterSize } from '../../styles/gutters';
import { shallow } from 'enzyme';
Object.values(GutterSize).forEach(function (gutter) {
  test("gutter ".concat(gutter), function () {
    var view = shallow(React.createElement(Gallery, {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});