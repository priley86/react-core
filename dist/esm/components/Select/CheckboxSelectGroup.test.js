import React from 'react';
import { shallow } from 'enzyme';
import CheckboxSelectGroup from './CheckboxSelectGroup';
describe('checkbox select options', function () {
  test('renders with children successfully', function () {
    var view = shallow(React.createElement(CheckboxSelectGroup, {
      label: "test"
    }, React.createElement("div", null, "child")));
    expect(view).toMatchSnapshot();
  });
});