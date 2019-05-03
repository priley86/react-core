import React from 'react';
import LoginMainFooterBandItem from './LoginMainFooterBandItem';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(LoginMainFooterBandItem, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(LoginMainFooterBandItem, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-body';
  var view = shallow(React.createElement(LoginMainFooterBandItem, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', function () {
  var CustomNode = function CustomNode() {
    return React.createElement("div", null, "My custom node");
  };

  var view = shallow(React.createElement(LoginMainFooterBandItem, null, React.createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});