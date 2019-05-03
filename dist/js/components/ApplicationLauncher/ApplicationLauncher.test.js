"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ApplicationLauncher = _interopRequireDefault(require("./ApplicationLauncher"));

var _DropdownItem = _interopRequireDefault(require("../Dropdown/DropdownItem"));

var _dropdownConstants = require("../Dropdown/dropdownConstants");

var _Separator = _interopRequireDefault(require("../Dropdown/Separator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dropdownItems = [_react["default"].createElement(_DropdownItem["default"], {
  key: "link"
}, "Link"), _react["default"].createElement(_DropdownItem["default"], {
  key: "action",
  component: "button"
}, "Action"), _react["default"].createElement(_DropdownItem["default"], {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), _react["default"].createElement(_DropdownItem["default"], {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), _react["default"].createElement(_Separator["default"], {
  key: "separator"
}), _react["default"].createElement(_DropdownItem["default"], {
  key: "separated link"
}, "Separated Link"), _react["default"].createElement(_DropdownItem["default"], {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('ApplicationLauncher', function () {
  test('regular', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_ApplicationLauncher["default"], {
      dropdownItems: dropdownItems
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_ApplicationLauncher["default"], {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_ApplicationLauncher["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_ApplicationLauncher["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_ApplicationLauncher["default"], {
      dropdownItems: dropdownItems,
      isOpen: true
    }));
    expect(view).toMatchSnapshot();
  });
});