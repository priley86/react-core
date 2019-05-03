function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import CopyButton from './CopyButton';
var props = {
  id: 'my-id',
  textId: 'my-text-id',
  className: 'fancy-copy-button',
  onClick: jest.fn(),
  exitDelay: 1000,
  entryDelay: 2000,
  maxWidth: '500px',
  position: 'right',
  'aria-label': 'click this button to copy text'
};
test('copy button render', function () {
  var view = shallow(React.createElement(CopyButton, props, "Copy Me"));
  expect(view).toMatchSnapshot();
});
test('copy button onClick', function () {
  var onclick = jest.fn();
  var view = shallow(React.createElement(CopyButton, _extends({}, props, {
    onClick: onclick
  }), "Copy to Clipboard"));
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});