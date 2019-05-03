function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import GridItem from './GridItem';
import { shallow } from 'enzyme';
import { DeviceSizes } from '../../styles/sizes';
import { getOffsetKey, getRowSpanKey } from './gridUtils';
test('adds span class', function () {
  var view = shallow(React.createElement(GridItem, {
    span: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds offset class', function () {
  var view = shallow(React.createElement(GridItem, {
    offset: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds row class', function () {
  var view = shallow(React.createElement(GridItem, {
    rowSpan: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
Object.values(DeviceSizes).forEach(function (size) {
  test("adds ".concat(size, " span class"), function () {
    var props = _defineProperty({}, size, 4);

    var view = shallow(React.createElement(GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " offset classes"), function () {
    var props = _defineProperty({}, getOffsetKey(size), 1);

    var view = shallow(React.createElement(GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " row classes"), function () {
    var props = _defineProperty({}, getRowSpanKey(size), 1);

    var view = shallow(React.createElement(GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
});