"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Select = _interopRequireDefault(require("./Select"));

var _SelectOption = _interopRequireDefault(require("./SelectOption"));

var _selectConstants = require("./selectConstants");

var _CheckboxSelectOption = _interopRequireDefault(require("./CheckboxSelectOption"));

var _CheckboxSelectGroup = _interopRequireDefault(require("./CheckboxSelectGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var selectOptions = [_react["default"].createElement(_SelectOption["default"], {
  value: "Mr",
  key: "0"
}), _react["default"].createElement(_SelectOption["default"], {
  value: "Mrs",
  key: "1"
}), _react["default"].createElement(_SelectOption["default"], {
  value: "Ms",
  key: "2"
}), _react["default"].createElement(_SelectOption["default"], {
  value: "Other",
  key: "3"
})];
var checkboxSelectOptions = [_react["default"].createElement(_CheckboxSelectOption["default"], {
  value: "Mr",
  key: "0"
}), _react["default"].createElement(_CheckboxSelectOption["default"], {
  value: "Mrs",
  key: "1"
}), _react["default"].createElement(_CheckboxSelectOption["default"], {
  value: "Ms",
  key: "2"
}), _react["default"].createElement(_CheckboxSelectOption["default"], {
  value: "Other",
  key: "3"
})];
describe('select', function () {
  describe('single select', function () {
    test('renders closed successfully', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
        variant: _selectConstants.SelectVariant.single,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, checkboxSelectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, checkboxSelectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders checkbox select groups successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true,
      isGrouped: true
    }, _react["default"].createElement(_CheckboxSelectGroup["default"], {
      label: "group 1"
    }, checkboxSelectOptions), _react["default"].createElement(_CheckboxSelectGroup["default"], {
      label: "group 2"
    }, checkboxSelectOptions)));
    expect(view).toMatchSnapshot();
  });
});
describe('typeahead select', function () {
  test('renders closed successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.typeahead,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.typeahead,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders selected successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.typeaheadMulti,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: _selectConstants.SelectVariant.typeaheadMulti,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders selected successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
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
    (0, _enzyme.mount)(_react["default"].createElement(_Select["default"], {
      variant: "single",
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(myMock).not.toBeCalled();
  });
});