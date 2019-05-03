import React from 'react';
import { mount } from 'enzyme';
import OptionsMenu from './OptionsMenu';
import OptionsMenuToggle from './OptionsMenuToggle';
import OptionsMenuItemGroup from './OptionsMenuItemGroup';
import OptionsMenuItem from './OptionsMenuItem';
import OptionsMenuSeparator from './OptionsMenuSeparator';
import { OptionsMenuDirection, OptionsMenuPosition } from './optionsMenuConstants';
import OptionsMenuToggleWithText from './OptionsMenuToggleWithText';
var menuItems = [React.createElement(OptionsMenuItemGroup, {
  key: "first group"
}, React.createElement(OptionsMenuItem, {
  key: "name"
}, "Name"), React.createElement(OptionsMenuItem, {
  key: "date"
}, "Date"), React.createElement(OptionsMenuItem, {
  isDisabled: true,
  key: "disabled"
}, "Disabled"), React.createElement(OptionsMenuItem, {
  key: "size"
}, "Size")), React.createElement(OptionsMenuSeparator, {
  key: "separator"
}), React.createElement(OptionsMenuItemGroup, {
  key: "second group"
}, React.createElement(OptionsMenuItem, {
  key: "ascending"
}, "Ascending"), React.createElement(OptionsMenuItem, {
  key: "descending"
}, "Descending"))];
describe('optionsMenu', function () {
  test('regular', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "regular",
      menuItems: menuItems,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "rightAligned",
      menuItems: menuItems,
      position: OptionsMenuPosition.right,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('open up', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "openUp",
      menuItems: menuItems,
      direction: OptionsMenuDirection.up,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned + open up', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "rightAlignedOpenUp",
      menuItems: menuItems,
      position: OptionsMenuPosition.right,
      direction: OptionsMenuDirection.up,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "expanded",
      menuItems: menuItems,
      isOpen: true,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "plain",
      menuItems: menuItems,
      isPlain: true,
      toggle: React.createElement(OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('text', function () {
    var view = mount(React.createElement(OptionsMenu, {
      id: "text",
      menuItems: menuItems,
      toggle: React.createElement(OptionsMenuToggleWithText, {
        toggleButtonContents: React.createElement(React.Fragment, null, "Test"),
        toggleText: "Test"
      })
    }));
    expect(view).toMatchSnapshot();
  });
});