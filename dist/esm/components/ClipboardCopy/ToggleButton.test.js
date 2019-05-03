function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './ToggleButton';
var props = {
  id: 'my-id',
  textId: 'my-text-id',
  contentId: 'my-content-id',
  isExpanded: false,
  className: 'myclassName',
  onClick: jest.fn()
};
test('toggle button render', function () {
  var desc = 'toggle content';
  var view = shallow(React.createElement(ToggleButton, _extends({}, props, {
    "aria-label": desc
  })));
  expect(view).toMatchSnapshot();
});
test('toggle button onClick', function () {
  var onclick = jest.fn();
  var view = shallow(React.createElement(ToggleButton, _extends({}, props, {
    onClick: onclick
  })));
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});
test('toggle button is on expanded mode', function () {
  var view = shallow(React.createElement(ToggleButton, _extends({}, props, {
    isExpanded: true
  })));
  expect(view.props()['aria-expanded']).toBe("true");
  view = shallow(React.createElement(ToggleButton, _extends({}, props, {
    isExpanded: false
  })));
  expect(view.props()['aria-expanded']).toBe("false");
});