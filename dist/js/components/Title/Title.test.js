"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ = require(".");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

Object.values(_.TitleSize).forEach(function (size) {
  test("".concat(size, " Title"), function () {
    var view = (0, _enzyme.shallow)(React.createElement(_.Title, {
      size: size,
      headingLevel: _.TitleLevel.h1
    }, size, " Title"));
    expect(view).toMatchSnapshot();
  });
});
test('Heading level can be set using a string value', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_.Title, {
    size: "lg",
    headingLevel: _.TitleLevel.h3
  }, "H3 Heading"));
  var isH3 = view.find('h3').length === 1;
  var isH1 = view.find('h1').length === 1;
  expect(isH1).toBe(false);
  expect(isH3).toBe(true);
});