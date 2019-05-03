"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ApplicationLauncher", "../Dropdown/DropdownItem", "../Dropdown/dropdownConstants", "../Dropdown/Separator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ApplicationLauncher"), require("../Dropdown/DropdownItem"), require("../Dropdown/dropdownConstants"), require("../Dropdown/Separator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ApplicationLauncher, global.DropdownItem, global.dropdownConstants, global.Separator);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ApplicationLauncher, _DropdownItem, _dropdownConstants, _Separator) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ApplicationLauncher2 = _interopRequireDefault(_ApplicationLauncher);

  var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

  var _Separator2 = _interopRequireDefault(_Separator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var dropdownItems = [_react2["default"].createElement(_DropdownItem2["default"], {
    key: "link"
  }, "Link"), _react2["default"].createElement(_DropdownItem2["default"], {
    key: "action",
    component: "button"
  }, "Action"), _react2["default"].createElement(_DropdownItem2["default"], {
    key: "disabled link",
    isDisabled: true
  }, "Disabled Link"), _react2["default"].createElement(_DropdownItem2["default"], {
    key: "disabled action",
    isDisabled: true,
    component: "button"
  }, "Disabled Action"), _react2["default"].createElement(_Separator2["default"], {
    key: "separator"
  }), _react2["default"].createElement(_DropdownItem2["default"], {
    key: "separated link"
  }, "Separated Link"), _react2["default"].createElement(_DropdownItem2["default"], {
    key: "separated action",
    component: "button"
  }, "Separated Action")];
  describe('ApplicationLauncher', function () {
    test('regular', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ApplicationLauncher2["default"], {
        dropdownItems: dropdownItems
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ApplicationLauncher2["default"], {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ApplicationLauncher2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ApplicationLauncher2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ApplicationLauncher2["default"], {
        dropdownItems: dropdownItems,
        isOpen: true
      }));
      expect(view).toMatchSnapshot();
    });
  });
});