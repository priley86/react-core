"use strict";

var _AboutModalBoxContent = _interopRequireDefault(require("./AboutModalBoxContent"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AboutModalBoxContent Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxContent["default"], {
    trademark: "trademark",
    id: "id"
  }, "This is a AboutModalBoxContent"));
  expect(view).toMatchSnapshot();
});