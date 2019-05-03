import React from 'react';
import { shallow, mount } from 'enzyme';
import { Chip, ChipGroup, ChipGroupToolbarItem } from './index';
describe('ChipGroup', function () {
  test('chip group default', function () {
    var view = shallow(React.createElement(ChipGroup, null, React.createElement(Chip, null, "1.1")));
    expect(view).toMatchSnapshot();
  });
  test('chip group with toolbar', function () {
    var view = shallow(React.createElement(ChipGroup, {
      withToolbar: true
    }, React.createElement(ChipGroupToolbarItem, null, React.createElement(Chip, null, "1.1"))));
    expect(view).toMatchSnapshot();
  });
  test('chip group expanded', function () {
    var view = mount(React.createElement(ChipGroup, null, React.createElement(Chip, null, "1"), React.createElement(Chip, null, "2")));
    var overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });
  test('chip group will not render if no children passed', function () {
    var view = shallow(React.createElement(ChipGroup, null));
    expect(view.equals(null)).toBe(true);
  });
});