import React from 'react';
import LoginMainFooterLinksItem from './LoginMainFooterLinksItem';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(LoginMainFooterLinksItem, {
    href: "#",
    target: ""
  }));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(LoginMainFooterLinksItem, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-body';
  var view = shallow(React.createElement(LoginMainFooterLinksItem, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', function () {
  var CustomNode = function CustomNode() {
    return React.createElement("div", null, "My custom node");
  };

  var view = shallow(React.createElement(LoginMainFooterLinksItem, null, React.createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});