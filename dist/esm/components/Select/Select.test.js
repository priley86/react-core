import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';
import SelectOption from './SelectOption';
import { SelectVariant } from './selectConstants';
import CheckboxSelectOption from './CheckboxSelectOption';
import CheckboxSelectGroup from './CheckboxSelectGroup';
var selectOptions = [React.createElement(SelectOption, {
  value: "Mr",
  key: "0"
}), React.createElement(SelectOption, {
  value: "Mrs",
  key: "1"
}), React.createElement(SelectOption, {
  value: "Ms",
  key: "2"
}), React.createElement(SelectOption, {
  value: "Other",
  key: "3"
})];
var checkboxSelectOptions = [React.createElement(CheckboxSelectOption, {
  value: "Mr",
  key: "0"
}), React.createElement(CheckboxSelectOption, {
  value: "Mrs",
  key: "1"
}), React.createElement(CheckboxSelectOption, {
  value: "Ms",
  key: "2"
}), React.createElement(CheckboxSelectOption, {
  value: "Other",
  key: "3"
})];
describe('select', function () {
  describe('single select', function () {
    test('renders closed successfully', function () {
      var view = mount(React.createElement(Select, {
        variant: SelectVariant.single,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
      var view = mount(React.createElement(Select, {
        variant: SelectVariant.single,
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
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, checkboxSelectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, checkboxSelectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders checkbox select groups successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.checkbox,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true,
      isGrouped: true
    }, React.createElement(CheckboxSelectGroup, {
      label: "group 1"
    }, checkboxSelectOptions), React.createElement(CheckboxSelectGroup, {
      label: "group 2"
    }, checkboxSelectOptions)));
    expect(view).toMatchSnapshot();
  });
});
describe('typeahead select', function () {
  test('renders closed successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeahead,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeahead,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders selected successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeahead,
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
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeahead,
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
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeaheadMulti,
      onSelect: jest.fn(),
      onToggle: jest.fn()
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeaheadMulti,
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(view).toMatchSnapshot();
  });
  test('renders selected successfully', function () {
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeaheadMulti,
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
    var view = mount(React.createElement(Select, {
      variant: SelectVariant.typeahead,
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
    var view = mount(React.createElement(Select, {
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
    mount(React.createElement(Select, {
      variant: "single",
      onSelect: jest.fn(),
      onToggle: jest.fn(),
      isExpanded: true
    }, selectOptions));
    expect(myMock).not.toBeCalled();
  });
});