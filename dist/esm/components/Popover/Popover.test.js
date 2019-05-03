import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from './index';
test('popover renders close-button, header and body', function () {
  var view = shallow(React.createElement(Popover, {
    position: "top",
    isVisible: true,
    hideOnOutsideClick: true,
    headerContent: React.createElement("div", null, "Popover Header"),
    bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, React.createElement("div", null, "Toggle Popover")));
  expect(view).toMatchSnapshot();
});