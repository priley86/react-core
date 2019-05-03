"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Alert", "./AlertActionLink", "./AlertActionCloseButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Alert"), require("./AlertActionLink"), require("./AlertActionCloseButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Alert, global.AlertActionLink, global.AlertActionCloseButton);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Alert, _AlertActionLink, _AlertActionCloseButton) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Alert2 = _interopRequireDefault(_Alert);

  var _AlertActionLink2 = _interopRequireDefault(_AlertActionLink);

  var _AlertActionCloseButton2 = _interopRequireDefault(_AlertActionCloseButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.keys(_Alert.AlertVariant).forEach(function (variant) {
    describe("Alert - ".concat(variant), function () {
      test('Description', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          title: ""
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Title', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Action Link', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          action: _react2["default"].createElement(_AlertActionLink2["default"], null, "test"),
          title: ""
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Action Close Button', function () {
        var onClose = jest.fn();
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          action: _react2["default"].createElement(_AlertActionCloseButton2["default"], {
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
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          action: _react2["default"].createElement(_AlertActionLink2["default"], null, "test"),
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Custom aria label', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Alert2["default"], {
          variant: variant,
          "aria-label": "Custom aria label for ".concat(variant),
          action: _react2["default"].createElement(_AlertActionLink2["default"], null, "test"),
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
    });
  });
});