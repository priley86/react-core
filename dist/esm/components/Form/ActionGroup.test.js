import React from 'react';
import { mount } from 'enzyme';
import ActionGroup from './ActionGroup';
import Form from './Form';
describe('ActionGroup component', function () {
  test('should render default action group variant', function () {
    var view = mount(React.createElement(ActionGroup, null, React.createElement("div", null, "Hello")));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form ActionGroup variant', function () {
    var view = mount(React.createElement(Form, {
      isHorizontal: true
    }, React.createElement(ActionGroup, null)));
    expect(view).toMatchSnapshot();
  });
});