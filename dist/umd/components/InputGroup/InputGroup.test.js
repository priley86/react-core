"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./InputGroup", "./InputGroupText", "../Button", "../TextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./InputGroup"), require("./InputGroupText"), require("../Button"), require("../TextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.InputGroup, global.InputGroupText, global.Button, global.TextInput);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _InputGroup, _InputGroupText, _Button, _TextInput) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _InputGroup2 = _interopRequireDefault(_InputGroup);

  var _InputGroupText2 = _interopRequireDefault(_InputGroupText);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('InputGroupText', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_InputGroupText2["default"], {
      className: "inpt-grp-text",
      id: "email-npt-grp"
    }, "@"));
    expect(view.find('span')).toHaveLength(1);
    var spanProps = view.find('span').props();
    expect(spanProps.className).toEqual(expect.stringContaining('inpt-grp-text'));
    expect(spanProps.id).toBe('email-npt-grp');
    expect(view.text()).toBe('@');
  });
  test('InputGroup', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_InputGroup2["default"], {
      className: "text-verify-cls",
      id: "text-1"
    }, _react2["default"].createElement(_TextInput.TextInput, {
      value: "this is text",
      "aria-label": "data text"
    })));
    expect(view.find('div')).toHaveLength(1);
    var divProps = view.find('div').props();
    expect(divProps.className).toEqual(expect.stringContaining('text-verify-cls'));
    expect(divProps.id).toBe('text-1');
  });
  test('add aria-describedby to form-control if one of the non form-controls has id', function () {
    // In this test, TextInput is a form-control component and Button is not.
    // If Button has an id props, this should be used in aria-describedby.
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_InputGroup2["default"], null, _react2["default"].createElement(_TextInput.TextInput, {
      value: "some data",
      "aria-label": "some text"
    }), _react2["default"].createElement(_Button.Button, {
      variant: "primary",
      id: "button-id"
    }, "hello")));
    expect(view.find(_TextInput.TextInput).props()['aria-describedby']).toBe('button-id');
  });
});