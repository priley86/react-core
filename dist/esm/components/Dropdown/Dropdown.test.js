import React from 'react';
import { mount } from 'enzyme';
import Dropdown from './Dropdown';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';
import DropdownItem from './DropdownItem';
import DropdownSeparator from './Separator';
import DropdownToggle from './DropdownToggle';
import KebabToggle from './KebabToggle';
var dropdownItems = [React.createElement(DropdownItem, {
  key: "link"
}, "Link"), React.createElement(DropdownItem, {
  key: "action",
  component: "button"
}, "Action"), React.createElement(DropdownItem, {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), React.createElement(DropdownItem, {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), React.createElement(DropdownSeparator, {
  key: "separator"
}), React.createElement(DropdownItem, {
  key: "separated link"
}, "Separated Link"), React.createElement(DropdownItem, {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('dropdown', function () {
  test('regular', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      position: DropdownPosition.right,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      position: DropdownPosition.right,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('KebabToggle', function () {
  test('regular', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      position: DropdownPosition.right,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      position: DropdownPosition.right,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isPlain: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('API', function () {
  test('click on item', function () {
    var mockToggle = jest.fn();
    var mockSelect = jest.fn();
    var view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      onSelect: mockSelect,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
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
    mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "Children items")));
    expect(myMock).toBeCalled();
  });
  test('dropdownItems only, no console error ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
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
    mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "Children items")));
    expect(myMock).not.toBeCalled();
  });
});