"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Dropdown", "./dropdownConstants", "./DropdownItem", "./Separator", "./DropdownToggle", "./KebabToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Dropdown"), require("./dropdownConstants"), require("./DropdownItem"), require("./Separator"), require("./DropdownToggle"), require("./KebabToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Dropdown, global.dropdownConstants, global.DropdownItem, global.Separator, global.DropdownToggle, global.KebabToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Dropdown, _dropdownConstants, _DropdownItem, _Separator, _DropdownToggle, _KebabToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Dropdown2 = _interopRequireDefault(_Dropdown);

  var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

  var _Separator2 = _interopRequireDefault(_Separator);

  var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

  var _KebabToggle2 = _interopRequireDefault(_KebabToggle);

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
  describe('dropdown', function () {
    test('regular', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('basic', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, _react2["default"].createElement("div", null, "BASIC")));
      expect(view).toMatchSnapshot();
    });
  });
  describe('KebabToggle', function () {
    test('regular', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('plain', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        isPlain: true,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('basic', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        isOpen: true,
        toggle: _react2["default"].createElement(_KebabToggle2["default"], {
          id: "Dropdown Toggle"
        })
      }, _react2["default"].createElement("div", null, "BASIC")));
      expect(view).toMatchSnapshot();
    });
  });
  describe('API', function () {
    test('click on item', function () {
      var mockToggle = jest.fn();
      var mockSelect = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        onSelect: mockSelect,
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
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
      (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, _react2["default"].createElement("div", null, "Children items")));
      expect(myMock).toBeCalled();
    });
    test('dropdownItems only, no console error ', function () {
      var myMock = jest.fn();
      global.console = {
        error: myMock
      };
      (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
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
      (0, _enzyme.mount)(_react2["default"].createElement(_Dropdown2["default"], {
        isOpen: true,
        toggle: _react2["default"].createElement(_DropdownToggle2["default"], {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, _react2["default"].createElement("div", null, "Children items")));
      expect(myMock).not.toBeCalled();
    });
  });
});