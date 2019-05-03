"use strict";

var _Modal = _interopRequireDefault(require("./Modal"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../helpers/constants");

var _js = require("../../../../react-styles/dist/js");

var _backdropCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');
var props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};
test('Modal creates a container element once for div', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], props));
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('modal closes with escape', function () {
  (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], _extends({}, props, {
    isOpen: true
  })));

  var _document$addEventLis = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _document$addEventLis[0],
      handler = _document$addEventLis[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
  (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], props));

  var _document$addEventLis2 = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _document$addEventLis2[0],
      handler = _document$addEventLis2[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).not.toBeCalled();
});
test('Each modal is given a new id', function () {
  var first = (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], props));
  var second = (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], props));
  expect(first.instance().id).not.toBe(second.instance().id);
});
test('modal removes body backdropOpen class when removed', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Modal["default"], _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(document.body.className).toContain((0, _js.css)(_backdropCss["default"].backdropOpen));
  view.setProps({
    isOpen: false
  });
  view.update();
  expect(document.body.className).not.toContain((0, _js.css)(_backdropCss["default"].backdropOpen));
});