"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Expandable = _interopRequireDefault(require("./Expandable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var props = {};
test('Expandable', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable["default"], props, "test "));
  expect(view).toMatchSnapshot();
});
test('Renders Expandable expanded', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable["default"], {
    isExpanded: true
  }, " test "));
  expect(view).toMatchSnapshot();
});
test('Expandable onToggle called', function () {
  var mockfn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable["default"], {
    onToggle: mockfn
  }, " test "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});