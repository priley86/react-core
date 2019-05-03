"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Alert = _interopRequireWildcard(require("./Alert"));

var _AlertActionLink = _interopRequireDefault(require("./AlertActionLink"));

var _AlertActionCloseButton = _interopRequireDefault(require("./AlertActionCloseButton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.keys(_Alert.AlertVariant).forEach(function (variant) {
  describe("Alert - ".concat(variant), function () {
    test('Description', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Title', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Link', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        action: _react["default"].createElement(_AlertActionLink["default"], null, "test"),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Close Button', function () {
      var onClose = jest.fn();
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        action: _react["default"].createElement(_AlertActionCloseButton["default"], {
          "aria-label": "Close",
          onClose: onClose
        }),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
      view.find('button[aria-label="Close"]').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
    test('Action and Title', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        action: _react["default"].createElement(_AlertActionLink["default"], null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Custom aria label', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
        variant: variant,
        "aria-label": "Custom aria label for ".concat(variant),
        action: _react["default"].createElement(_AlertActionLink["default"], null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
  });
});