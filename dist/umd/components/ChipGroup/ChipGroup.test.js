"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _index) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ChipGroup', function () {
    test('chip group default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.ChipGroup, null, _react2["default"].createElement(_index.Chip, null, "1.1")));
      expect(view).toMatchSnapshot();
    });
    test('chip group with toolbar', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.ChipGroup, {
        withToolbar: true
      }, _react2["default"].createElement(_index.ChipGroupToolbarItem, null, _react2["default"].createElement(_index.Chip, null, "1.1"))));
      expect(view).toMatchSnapshot();
    });
    test('chip group expanded', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_index.ChipGroup, null, _react2["default"].createElement(_index.Chip, null, "1"), _react2["default"].createElement(_index.Chip, null, "2")));
      var overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
      expect(overflowButton.text()).toBe('1 more');
      overflowButton.simulate('click');
      expect(overflowButton.text()).toBe('Show Less');
    });
    test('chip group will not render if no children passed', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.ChipGroup, null));
      expect(view.equals(null)).toBe(true);
    });
  });
});