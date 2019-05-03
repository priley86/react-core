"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./GridItem", "enzyme", "../../styles/sizes", "./gridUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./GridItem"), require("enzyme"), require("../../styles/sizes"), require("./gridUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.GridItem, global.enzyme, global.sizes, global.gridUtils);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _GridItem, _enzyme, _sizes, _gridUtils) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _GridItem2 = _interopRequireDefault(_GridItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  test('adds span class', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], {
      span: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  test('adds offset class', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], {
      offset: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  test('adds row class', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], {
      rowSpan: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  Object.values(_sizes.DeviceSizes).forEach(function (size) {
    test("adds ".concat(size, " span class"), function () {
      var props = _defineProperty({}, size, 4);

      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], props));
      expect(view.props().className).toMatchSnapshot();
    });
    test("adds ".concat(size, " offset classes"), function () {
      var props = _defineProperty({}, (0, _gridUtils.getOffsetKey)(size), 1);

      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], props));
      expect(view.props().className).toMatchSnapshot();
    });
    test("adds ".concat(size, " row classes"), function () {
      var props = _defineProperty({}, (0, _gridUtils.getRowSpanKey)(size), 1);

      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_GridItem2["default"], props));
      expect(view.props().className).toMatchSnapshot();
    });
  });
});