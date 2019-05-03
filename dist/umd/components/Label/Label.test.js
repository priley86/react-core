"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Label"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Label"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Label);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Label) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Label2 = _interopRequireDefault(_Label);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('label', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Label2["default"], null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('compact label', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Label2["default"], {
      isCompact: true
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('label with additional class name', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Label2["default"], {
      className: "klass1"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('label with additional class name and props', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Label2["default"], {
      className: "class-1",
      id: "label-1",
      "data-label-name": "something"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
});