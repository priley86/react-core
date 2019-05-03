"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _dropdownConstants = require("./dropdownConstants");

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _Separator = _interopRequireDefault(require("./Separator"));

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

var _KebabToggle = _interopRequireDefault(require("./KebabToggle"));

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
describe('dropdown', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, _react["default"].createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('KebabToggle', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      isPlain: true,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      isOpen: true,
      toggle: _react["default"].createElement(_KebabToggle["default"], {
        id: "Dropdown Toggle"
      })
    }, _react["default"].createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('API', function () {
  test('click on item', function () {
    var mockToggle = jest.fn();
    var mockSelect = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      onSelect: mockSelect,
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    view.find('a').first().simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });
  test('dropdownItems and children console error ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, _react["default"].createElement("div", null, "Children items")));
    expect(myMock).toBeCalled();
  });
  test('dropdownItems only, no console error ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(myMock).not.toBeCalled();
  });
  test('children only, no console ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.mount)(_react["default"].createElement(_Dropdown["default"], {
      isOpen: true,
      toggle: _react["default"].createElement(_DropdownToggle["default"], {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, _react["default"].createElement("div", null, "Children items")));
    expect(myMock).not.toBeCalled();
  });
});