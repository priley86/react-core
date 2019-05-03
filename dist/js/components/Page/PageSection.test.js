"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PageSection = _interopRequireDefault(require("./PageSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock('./Page');
test('Check page section with no padding example against snapshot', function () {
  var Section = _react["default"].createElement(_PageSection["default"], {
    noPadding: true
  });

  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no padding on mobile example against snapshot', function () {
  var Section = _react["default"].createElement(_PageSection["default"], {
    noPaddingMobile: true
  });

  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});