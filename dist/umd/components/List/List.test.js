"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./List", "./ListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./List"), require("./ListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.List, global.ListItem);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _List, _ListItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _List2 = _interopRequireDefault(_List);

  var _ListItem2 = _interopRequireDefault(_ListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ListItems = function ListItems() {
    return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_List2["default"], null, _react2["default"].createElement(_ListItem2["default"], null, "First"), _react2["default"].createElement(_ListItem2["default"], null, "Second"), _react2["default"].createElement(_ListItem2["default"], null, "Third")));
  };

  describe('list', function () {
    test('simple list', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_List2["default"], null, _react2["default"].createElement(ListItems, null)));
      expect(view).toMatchSnapshot();
    });
    test('inline list', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_List2["default"], {
        variant: "inline"
      }, _react2["default"].createElement(ListItems, null)));
      expect(view).toMatchSnapshot();
    });
    test('grid list', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_List2["default"], {
        variant: "grid"
      }, _react2["default"].createElement(ListItems, null)));
      expect(view).toMatchSnapshot();
    });
  });
});