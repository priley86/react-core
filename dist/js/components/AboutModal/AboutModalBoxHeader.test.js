"use strict";

var _AboutModalBoxHeader = _interopRequireDefault(require("./AboutModalBoxHeader"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AboutModalBoxHeader Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxHeader["default"], {
    productName: "Product Name",
    id: "id"
  }, "This is a AboutModalBox header"));
  expect(view).toMatchSnapshot();
});