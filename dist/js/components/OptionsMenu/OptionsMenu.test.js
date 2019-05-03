"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _OptionsMenu = _interopRequireDefault(require("./OptionsMenu"));

var _OptionsMenuToggle = _interopRequireDefault(require("./OptionsMenuToggle"));

var _OptionsMenuItemGroup = _interopRequireDefault(require("./OptionsMenuItemGroup"));

var _OptionsMenuItem = _interopRequireDefault(require("./OptionsMenuItem"));

var _OptionsMenuSeparator = _interopRequireDefault(require("./OptionsMenuSeparator"));

var _optionsMenuConstants = require("./optionsMenuConstants");

var _OptionsMenuToggleWithText = _interopRequireDefault(require("./OptionsMenuToggleWithText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var menuItems = [_react["default"].createElement(_OptionsMenuItemGroup["default"], {
  key: "first group"
}, _react["default"].createElement(_OptionsMenuItem["default"], {
  key: "name"
}, "Name"), _react["default"].createElement(_OptionsMenuItem["default"], {
  key: "date"
}, "Date"), _react["default"].createElement(_OptionsMenuItem["default"], {
  isDisabled: true,
  key: "disabled"
}, "Disabled"), _react["default"].createElement(_OptionsMenuItem["default"], {
  key: "size"
}, "Size")), _react["default"].createElement(_OptionsMenuSeparator["default"], {
  key: "separator"
}), _react["default"].createElement(_OptionsMenuItemGroup["default"], {
  key: "second group"
}, _react["default"].createElement(_OptionsMenuItem["default"], {
  key: "ascending"
}, "Ascending"), _react["default"].createElement(_OptionsMenuItem["default"], {
  key: "descending"
}, "Descending"))];
describe('optionsMenu', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "regular",
      menuItems: menuItems,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "rightAligned",
      menuItems: menuItems,
      position: _optionsMenuConstants.OptionsMenuPosition.right,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('open up', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "openUp",
      menuItems: menuItems,
      direction: _optionsMenuConstants.OptionsMenuDirection.up,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned + open up', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "rightAlignedOpenUp",
      menuItems: menuItems,
      position: _optionsMenuConstants.OptionsMenuPosition.right,
      direction: _optionsMenuConstants.OptionsMenuDirection.up,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "expanded",
      menuItems: menuItems,
      isOpen: true,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "plain",
      menuItems: menuItems,
      isPlain: true,
      toggle: _react["default"].createElement(_OptionsMenuToggle["default"], null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('text', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu["default"], {
      id: "text",
      menuItems: menuItems,
      toggle: _react["default"].createElement(_OptionsMenuToggleWithText["default"], {
        toggleButtonContents: _react["default"].createElement(_react["default"].Fragment, null, "Test"),
        toggleText: "Test"
      })
    }));
    expect(view).toMatchSnapshot();
  });
});