"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _SkipToContent = _interopRequireDefault(require("./SkipToContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {};
test('Verify Skip To Content', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_SkipToContent["default"], _extends({
    href: "#main-content"
  }, props))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('Verify Skip To Content if forced to display', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_SkipToContent["default"], _extends({
    href: "#main-content"
  }, props, {
    show: true
  }))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});