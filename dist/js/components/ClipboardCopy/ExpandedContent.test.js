"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ExpandedContent = _interopRequireDefault(require("./ExpandedContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  className: 'class-1',
  id: 'id-1'
};
test('expanded content render', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ExpandedContent["default"], _extends({}, props, {
    onChange: function onChange() {}
  }), "This is my text"));
  expect(view).toMatchSnapshot();
});