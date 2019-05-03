import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';
test('label', function () {
  var view = shallow(React.createElement(Label, null, "Something"));
  expect(view).toMatchSnapshot();
});
test('compact label', function () {
  var view = shallow(React.createElement(Label, {
    isCompact: true
  }, "Something"));
  expect(view).toMatchSnapshot();
});
test('label with additional class name', function () {
  var view = shallow(React.createElement(Label, {
    className: "klass1"
  }, "Something"));
  expect(view).toMatchSnapshot();
});
test('label with additional class name and props', function () {
  var view = shallow(React.createElement(Label, {
    className: "class-1",
    id: "label-1",
    "data-label-name": "something"
  }, "Something"));
  expect(view).toMatchSnapshot();
});