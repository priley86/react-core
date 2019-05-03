"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PageHeader = _interopRequireDefault(require("./PageHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock('./Page');
test('Check page vertical layout example against snapshot', function () {
  var Header = _react["default"].createElement(_PageHeader["default"], {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });

  var view = (0, _enzyme.mount)(Header);
  expect(view).toMatchSnapshot();
});