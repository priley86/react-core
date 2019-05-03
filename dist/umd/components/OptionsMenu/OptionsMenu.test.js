"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./OptionsMenu", "./OptionsMenuToggle", "./OptionsMenuItemGroup", "./OptionsMenuItem", "./OptionsMenuSeparator", "./optionsMenuConstants", "./OptionsMenuToggleWithText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./OptionsMenu"), require("./OptionsMenuToggle"), require("./OptionsMenuItemGroup"), require("./OptionsMenuItem"), require("./OptionsMenuSeparator"), require("./optionsMenuConstants"), require("./OptionsMenuToggleWithText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.OptionsMenu, global.OptionsMenuToggle, global.OptionsMenuItemGroup, global.OptionsMenuItem, global.OptionsMenuSeparator, global.optionsMenuConstants, global.OptionsMenuToggleWithText);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _OptionsMenu, _OptionsMenuToggle, _OptionsMenuItemGroup, _OptionsMenuItem, _OptionsMenuSeparator, _optionsMenuConstants, _OptionsMenuToggleWithText) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _OptionsMenu2 = _interopRequireDefault(_OptionsMenu);

  var _OptionsMenuToggle2 = _interopRequireDefault(_OptionsMenuToggle);

  var _OptionsMenuItemGroup2 = _interopRequireDefault(_OptionsMenuItemGroup);

  var _OptionsMenuItem2 = _interopRequireDefault(_OptionsMenuItem);

  var _OptionsMenuSeparator2 = _interopRequireDefault(_OptionsMenuSeparator);

  var _OptionsMenuToggleWithText2 = _interopRequireDefault(_OptionsMenuToggleWithText);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var menuItems = [_react2["default"].createElement(_OptionsMenuItemGroup2["default"], {
    key: "first group"
  }, _react2["default"].createElement(_OptionsMenuItem2["default"], {
    key: "name"
  }, "Name"), _react2["default"].createElement(_OptionsMenuItem2["default"], {
    key: "date"
  }, "Date"), _react2["default"].createElement(_OptionsMenuItem2["default"], {
    isDisabled: true,
    key: "disabled"
  }, "Disabled"), _react2["default"].createElement(_OptionsMenuItem2["default"], {
    key: "size"
  }, "Size")), _react2["default"].createElement(_OptionsMenuSeparator2["default"], {
    key: "separator"
  }), _react2["default"].createElement(_OptionsMenuItemGroup2["default"], {
    key: "second group"
  }, _react2["default"].createElement(_OptionsMenuItem2["default"], {
    key: "ascending"
  }, "Ascending"), _react2["default"].createElement(_OptionsMenuItem2["default"], {
    key: "descending"
  }, "Descending"))];
  describe('optionsMenu', function () {
    test('regular', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "regular",
        menuItems: menuItems,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "rightAligned",
        menuItems: menuItems,
        position: _optionsMenuConstants.OptionsMenuPosition.right,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('open up', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "openUp",
        menuItems: menuItems,
        direction: _optionsMenuConstants.OptionsMenuDirection.up,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned + open up', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "rightAlignedOpenUp",
        menuItems: menuItems,
        position: _optionsMenuConstants.OptionsMenuPosition.right,
        direction: _optionsMenuConstants.OptionsMenuDirection.up,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "expanded",
        menuItems: menuItems,
        isOpen: true,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('plain', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "plain",
        menuItems: menuItems,
        isPlain: true,
        toggle: _react2["default"].createElement(_OptionsMenuToggle2["default"], null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('text', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_OptionsMenu2["default"], {
        id: "text",
        menuItems: menuItems,
        toggle: _react2["default"].createElement(_OptionsMenuToggleWithText2["default"], {
          toggleButtonContents: _react2["default"].createElement(_react2["default"].Fragment, null, "Test"),
          toggleText: "Test"
        })
      }));
      expect(view).toMatchSnapshot();
    });
  });
});