"use strict";

var _AboutModalBox = _interopRequireDefault(require("./AboutModalBox"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AboutModalBox Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBox["default"], {
    "aria-labelledby": "id",
    "aria-describedby": "id2"
  }, "This is a AboutModalBox"));
  expect(view).toMatchSnapshot();
});