import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './index';
import Tippy from '@tippy.js/react';
test('tooltip renders', function () {
  var view = shallow(React.createElement(Tooltip, {
    position: "top",
    content: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, React.createElement("div", null, "Toggle tooltip")));
  expect(view).toMatchSnapshot();
});
test('tooltip triggered by click', function () {
  var view = shallow(React.createElement(Tooltip, {
    position: "top",
    trigger: "click",
    content: React.createElement("p", null, "my content")
  }, React.createElement("div", null, "Toggle tooltip")));
  expect(view.find(Tippy).prop('trigger')).toBe('click');
});