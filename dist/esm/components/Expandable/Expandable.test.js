import * as React from 'react';
import { shallow } from 'enzyme';
import Expandable from './Expandable';
var props = {};
test('Expandable', function () {
  var view = shallow(React.createElement(Expandable, props, "test "));
  expect(view).toMatchSnapshot();
});
test('Renders Expandable expanded', function () {
  var view = shallow(React.createElement(Expandable, {
    isExpanded: true
  }, " test "));
  expect(view).toMatchSnapshot();
});
test('Expandable onToggle called', function () {
  var mockfn = jest.fn();
  var view = shallow(React.createElement(Expandable, {
    onToggle: mockfn
  }, " test "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});