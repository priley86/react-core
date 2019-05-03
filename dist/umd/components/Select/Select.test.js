"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Select", "./SelectOption", "./selectConstants", "./CheckboxSelectOption", "./CheckboxSelectGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Select"), require("./SelectOption"), require("./selectConstants"), require("./CheckboxSelectOption"), require("./CheckboxSelectGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Select, global.SelectOption, global.selectConstants, global.CheckboxSelectOption, global.CheckboxSelectGroup);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Select, _SelectOption, _selectConstants, _CheckboxSelectOption, _CheckboxSelectGroup) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Select2 = _interopRequireDefault(_Select);

  var _SelectOption2 = _interopRequireDefault(_SelectOption);

  var _CheckboxSelectOption2 = _interopRequireDefault(_CheckboxSelectOption);

  var _CheckboxSelectGroup2 = _interopRequireDefault(_CheckboxSelectGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var selectOptions = [_react2["default"].createElement(_SelectOption2["default"], {
    value: "Mr",
    key: "0"
  }), _react2["default"].createElement(_SelectOption2["default"], {
    value: "Mrs",
    key: "1"
  }), _react2["default"].createElement(_SelectOption2["default"], {
    value: "Ms",
    key: "2"
  }), _react2["default"].createElement(_SelectOption2["default"], {
    value: "Other",
    key: "3"
  })];
  var checkboxSelectOptions = [_react2["default"].createElement(_CheckboxSelectOption2["default"], {
    value: "Mr",
    key: "0"
  }), _react2["default"].createElement(_CheckboxSelectOption2["default"], {
    value: "Mrs",
    key: "1"
  }), _react2["default"].createElement(_CheckboxSelectOption2["default"], {
    value: "Ms",
    key: "2"
  }), _react2["default"].createElement(_CheckboxSelectOption2["default"], {
    value: "Other",
    key: "3"
  })];
  describe('select', function () {
    describe('single select', function () {
      test('renders closed successfully', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn()
        }, selectOptions));
        expect(view).toMatchSnapshot();
      });
      test('renders expanded successfully', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn(),
          isExpanded: true
        }, selectOptions));
        expect(view).toMatchSnapshot();
      });
    });
  });
  describe('checkbox select', function () {
    test('renders closed successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, checkboxSelectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, checkboxSelectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders checkbox select groups successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true,
        isGrouped: true
      }, _react2["default"].createElement(_CheckboxSelectGroup2["default"], {
        label: "group 1"
      }, checkboxSelectOptions), _react2["default"].createElement(_CheckboxSelectGroup2["default"], {
        label: "group 2"
      }, checkboxSelectOptions)));
      expect(view).toMatchSnapshot();
    });
  });
  describe('typeahead select', function () {
    test('renders closed successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeahead,
        selections: "Mr",
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('test onChange', function () {
      var mockEvent = {
        target: {
          value: 'test'
        }
      };
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        onClear: jest.fn(),
        isExpanded: true
      }, selectOptions));
      var inst = view.instance();
      inst.onChange(mockEvent);
      view.update();
      expect(view).toMatchSnapshot();
    });
  });
  describe('typeahead multi select', function () {
    test('renders closed successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        selections: ['Mr', 'Mrs'],
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('test onChange', function () {
      var mockEvent = {
        target: {
          value: 'test'
        }
      };
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        onClear: jest.fn(),
        isExpanded: true
      }, selectOptions));
      var inst = view.instance();
      inst.onChange(mockEvent);
      view.update();
      expect(view).toMatchSnapshot();
    });
  });
  describe('API', function () {
    test('click on item', function () {
      var mockToggle = jest.fn();
      var mockSelect = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: "single",
        onToggle: mockToggle,
        onSelect: mockSelect,
        isExpanded: true
      }, selectOptions));
      view.find('button').at(1).simulate('click');
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(mockSelect.mock.calls).toHaveLength(1);
    });
    test('children only, no console error', function () {
      var myMock = jest.fn();
      global.console = {
        error: myMock
      };
      (0, _enzyme.mount)(_react2["default"].createElement(_Select2["default"], {
        variant: "single",
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(myMock).not.toBeCalled();
    });
  });
});