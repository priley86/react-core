function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow } from 'enzyme';
import SkipToContent from './SkipToContent';
var props = {};
test('Verify Skip To Content', function () {
  var view = shallow(React.createElement(SkipToContent, _extends({
    href: "#main-content"
  }, props))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('Verify Skip To Content if forced to display', function () {
  var view = shallow(React.createElement(SkipToContent, _extends({
    href: "#main-content"
  }, props, {
    show: true
  }))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});