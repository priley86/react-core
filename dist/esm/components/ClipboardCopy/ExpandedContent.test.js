function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import ExpandedContent from './ExpandedContent';
var props = {
  className: 'class-1',
  id: 'id-1'
};
test('expanded content render', function () {
  var view = shallow(React.createElement(ExpandedContent, _extends({}, props, {
    onChange: function onChange() {}
  }), "This is my text"));
  expect(view).toMatchSnapshot();
});