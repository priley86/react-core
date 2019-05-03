"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./FormGroup", "./Form", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./FormGroup"), require("./Form"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.FormGroup, global.Form, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _FormGroup, _Form, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _FormGroup2 = _interopRequireDefault(_FormGroup);

  var _Form2 = _interopRequireDefault(_Form);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('FormGroup component', function () {
    var returnFunction = function returnFunction() {
      return _react2["default"].createElement("div", null, "label");
    };

    test('should render default form group variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: "label",
        fieldId: "label-id",
        helperText: "this is helper text"
      }, _react2["default"].createElement("input", {
        id: "label-id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render inline form group variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        isInline: true,
        label: "label",
        fieldId: "label-id",
        helperText: "this is helper text"
      }, _react2["default"].createElement("input", {
        id: "label-id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant with required label', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: "label",
        isRequired: true,
        fieldId: "label-id"
      }, _react2["default"].createElement("input", {
        id: "label-id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant with node label', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: _react2["default"].createElement("h1", null, "Header")
      }, _react2["default"].createElement("input", {
        "aria-label": "input"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant with function label', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: returnFunction()
      }, _react2["default"].createElement("input", {
        "aria-label": "input"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant with node helperText', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: "Label",
        fieldId: "label-id",
        helperText: _react2["default"].createElement("h1", null, "Header")
      }, _react2["default"].createElement("input", {
        id: "label-id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant with function helperText', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: "Label",
        fieldId: "label-id",
        helperText: returnFunction()
      }, _react2["default"].createElement("input", {
        id: "label-id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render horizontal form group variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Form2["default"], {
        isHorizontal: true
      }, _react2["default"].createElement(_FormGroup2["default"], {
        label: "label",
        fieldId: "label-id",
        helperText: "this is helperText"
      }, _react2["default"].createElement("input", {
        id: "label-id"
      }))));
      expect(view).toMatchSnapshot();
    });
    test('should render form group variant without label', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], null, _react2["default"].createElement("input", {
        "aria-label": "input"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group required variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        isRequired: true,
        label: "label",
        fieldId: "id"
      }, _react2["default"].createElement("input", {
        id: "id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render form group invalid variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: "label",
        fieldId: "label-id",
        isValid: false,
        helperTextInvalid: "Invalid FormGroup"
      }, _react2["default"].createElement("input", {
        id: "id"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should render correctly when label is not a string with Children = Array', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_FormGroup2["default"], {
        label: returnFunction()
      }, _react2["default"].createElement("input", {
        "aria-label": "label"
      }), _react2["default"].createElement("input", {
        id: "id"
      }), _react2["default"].createElement("input", null)));
      expect(view).toMatchSnapshot();
    });
  });
});