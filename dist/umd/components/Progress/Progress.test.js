"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Progress", "./ProgressContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Progress"), require("./ProgressContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Progress, global.ProgressContainer);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Progress, _ProgressContainer) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Progress2 = _interopRequireDefault(_Progress);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Simple progress', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      value: 33,
      id: "progress-simple-example"
    }));
    expect(view).toMatchSnapshot();
  });
  test('no value specified', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      id: "no-value"
    }));
    expect(view).toMatchSnapshot();
  });
  test('additional label', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      id: "additional-label",
      value: 33,
      label: "Additional label"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Progress with aria-valuetext', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      value: 33,
      id: "progress-aria-valuetext",
      valueText: "Descriptive text here"
    }));
    expect(view).toMatchSnapshot();
  });
  test('value lower than minValue', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      value: 33,
      id: "lower-min-value",
      min: 40
    }));
    expect(view).toMatchSnapshot();
  });
  test('value higher than maxValue', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      value: 77,
      id: "higher-max-value",
      max: 60
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled with minValue', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      min: 10,
      value: 50,
      id: "scaled-min-value"
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled with maxValue', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      value: 50,
      id: "scaled-max-value",
      max: 80
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled between minValue and maxValue', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
      min: 10,
      value: 50,
      id: "scaled-range-value",
      max: 80
    }));
    expect(view).toMatchSnapshot();
  });
  describe('Progress size', function () {
    Object.keys(_Progress.ProgressSize).forEach(function (oneSize) {
      test(oneSize, function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
          id: "".concat(oneSize, "-progress"),
          value: 33,
          size: oneSize
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
  describe('Progress variant', function () {
    Object.keys(_ProgressContainer.ProgressVariant).forEach(function (oneVariant) {
      test(oneVariant, function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
          id: "".concat(oneVariant, "-progress"),
          value: 33,
          variant: oneVariant
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
  describe('Progress measure location', function () {
    Object.keys(_ProgressContainer.ProgressMeasureLocation).forEach(function (oneLocation) {
      test(oneLocation, function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
          id: "".concat(oneLocation, "-progress"),
          value: 33,
          measureLocation: oneLocation
        }));
        expect(view).toMatchSnapshot();
      });
    });
    test('inside and small should render large', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Progress2["default"], {
        id: "large-progress",
        value: 33,
        measureLocation: _ProgressContainer.ProgressMeasureLocation.inside,
        size: _Progress.ProgressSize.sm
      }));
      expect(view).toMatchSnapshot();
    });
  });
});