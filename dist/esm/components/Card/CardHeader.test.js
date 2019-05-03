import React from 'react';
import CardHeader from './CardHeader';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(CardHeader, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(CardHeader, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-header';
  var view = shallow(React.createElement(CardHeader, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('set size and level props', function () {
  var size = 'xl';
  var level = 'h6';
  var view = shallow(React.createElement(CardHeader, {
    size: size,
    headingLevel: level
  }));
  expect(view.prop('size')).toBe(size);
  expect(view.prop('headingLevel')).toBe(level);
});