function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Modal from './Modal';
import React from 'react';
import { shallow } from 'enzyme';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '../../../../react-styles/dist/js';
import styles from "../../@patternfly/patternfly/components/Backdrop/backdrop.css.js";
jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');
var props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};
test('Modal creates a container element once for div', function () {
  var view = shallow(React.createElement(Modal, props));
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('modal closes with escape', function () {
  shallow(React.createElement(Modal, _extends({}, props, {
    isOpen: true
  })));

  var _document$addEventLis = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _document$addEventLis[0],
      handler = _document$addEventLis[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
  shallow(React.createElement(Modal, props));

  var _document$addEventLis2 = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _document$addEventLis2[0],
      handler = _document$addEventLis2[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).not.toBeCalled();
});
test('Each modal is given a new id', function () {
  var first = shallow(React.createElement(Modal, props));
  var second = shallow(React.createElement(Modal, props));
  expect(first.instance().id).not.toBe(second.instance().id);
});
test('modal removes body backdropOpen class when removed', function () {
  var view = shallow(React.createElement(Modal, _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(document.body.className).toContain(css(styles.backdropOpen));
  view.setProps({
    isOpen: false
  });
  view.update();
  expect(document.body.className).not.toContain(css(styles.backdropOpen));
});