import React from 'react';
import { mount } from 'enzyme';
import { ApplicationLauncher, DropdownItem, Dropdown, DropdownToggle } from '@patternfly/react-core';
import { capitalize, getUniqueId, debounce, isElementInView, sideElementIsOutOfView, fillTemplate } from './util';
import { KEY_CODES, SIDE } from './constants';

var createMockHtmlElement = function createMockHtmlElement(bounds) {
  return {
    getBoundingClientRect: function getBoundingClientRect() {
      return bounds;
    }
  };
};

test('capitalize', function () {
  expect(capitalize('foo')).toBe('Foo');
});
test('getUniqueId', function () {
  expect(getUniqueId()).not.toBe(getUniqueId());
});
test('getUniqueId prefixed', function () {
  expect(getUniqueId().substring(0, 3)).toBe('pf-');
  expect(getUniqueId('pf-switch').substring(0, 10)).toBe('pf-switch-');
});
test('debounce', function () {
  jest.useFakeTimers();
  var callback = jest.fn();
  var debouncedFunction = debounce(callback, 50);
  debouncedFunction(); // At this point in time, the callback should not have been called yet

  expect(callback).toHaveBeenCalledTimes(0);

  for (var i = 0; i < 10; i++) {
    jest.advanceTimersByTime(50);
    debouncedFunction();
  }

  expect(callback).toBeCalledTimes(10);
});
test('isElementInView should be true when partial out of view and with partial true', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 10,
    right: 210
  });
  expect(isElementInView(container, element, true)).toBe(true);
});
test('isElementInView should be false when partial out of view and with partial false ', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 10,
    right: 210
  });
  expect(isElementInView(container, element, false)).toBe(false);
});
test('isElementInView should be false completely out of view ', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 200,
    right: 300
  });
  expect(isElementInView(container, element, true)).toBe(false);
});
test('isElementInView should be false completely out of view when partial false ', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 200,
    right: 300
  });
  expect(isElementInView(container, element, false)).toBe(false);
});
test('sideElementIsOutOfView Returns left when off on left side', function () {
  var container = createMockHtmlElement({
    left: 20,
    right: 220
  });
  var element = createMockHtmlElement({
    left: 10,
    right: 210
  });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.LEFT);
});
test('sideElementIsOutOfView Returns right when off on right side', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 210,
    right: 410
  });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.RIGHT);
});
test('sideElementIsOutOfView Returns NONE when in view', function () {
  var container = createMockHtmlElement({
    left: 0,
    right: 200
  });
  var element = createMockHtmlElement({
    left: 10,
    right: 110
  });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.NONE);
});
describe('keyHandler works on ApplicationLauncher', function () {
  document.body.innerHTML = '<!doctype html><html><body></body></html>';
  var dropdownItems = [React.createElement(DropdownItem, {
    key: "link",
    id: "first"
  }, "Link"), React.createElement(DropdownItem, {
    key: "action",
    id: "second",
    component: "button"
  }, "Action"), React.createElement(DropdownItem, {
    key: "disabled link",
    id: "third",
    isDisabled: true
  }, "Disabled Link")];
  var view = mount(React.createElement(ApplicationLauncher, {
    dropdownItems: dropdownItems,
    isOpen: true
  }), {
    attachTo: document.getElementsByName('div')[0]
  });
  var firstDropdownItem = view.find('#first').first();
  var secondDropdownItem = view.find('#second').first();
  var thirdDropdownItem = view.find('#third').first();
  test('keyHandler advances forward', function () {
    firstDropdownItem.simulate('keydown', {
      key: 'ArrowDown',
      keyCode: KEY_CODES.ARROW_DOWN,
      which: KEY_CODES.ARROW_DOWN
    });
    expect(secondDropdownItem === document.activeElement);
  });
  test('keyHandler regresses backward', function () {
    secondDropdownItem.simulate('keydown', {
      key: 'ArrowUp',
      keyCode: KEY_CODES.ARROW_UP,
      which: KEY_CODES.ARROW_UP
    });
    expect(firstDropdownItem === document.activeElement);
  });
  test('keyHandler skips disabled items and loops down to top', function () {
    secondDropdownItem.simulate('keydown', {
      key: 'ArrowDown',
      keyCode: KEY_CODES.ARROW_DOWN,
      which: KEY_CODES.ARROW_DOWN
    });
    expect(firstDropdownItem === document.activeElement);
  });
  test('keyHandler loops top to bottom', function () {
    firstDropdownItem.simulate('keydown', {
      key: 'ArrowUp',
      keyCode: KEY_CODES.ARROW_UP,
      which: KEY_CODES.ARROW_UP
    });
    expect(secondDropdownItem === document.activeElement);
  });
});
describe('keyHandler works on Dropdown', function () {
  document.body.innerHTML = '<!doctype html><html><body></body></html>';
  var dropdownItems = [React.createElement(DropdownItem, {
    key: "link",
    id: "first"
  }, "Link"), React.createElement(DropdownItem, {
    key: "action",
    id: "second",
    component: "button"
  }, "Action"), React.createElement(DropdownItem, {
    key: "disabled link",
    id: "third",
    isDisabled: true
  }, "Disabled Link")];
  var view = mount(React.createElement(Dropdown, {
    dropdownItems: dropdownItems,
    isOpen: true,
    toggle: React.createElement(DropdownToggle, null, "Expanded Dropdown")
  }), {
    attachTo: document.getElementsByName('div')[0]
  });
  var firstDropdownItem = view.find('#first').first();
  var secondDropdownItem = view.find('#second').first();
  var thirdDropdownItem = view.find('#third').first();
  test('keyHandler advances forward', function () {
    firstDropdownItem.simulate('keydown', {
      key: 'ArrowDown',
      keyCode: KEY_CODES.ARROW_DOWN,
      which: KEY_CODES.ARROW_DOWN
    });
    expect(secondDropdownItem === document.activeElement);
  });
  test('keyHandler regresses backward', function () {
    secondDropdownItem.simulate('keydown', {
      key: 'ArrowUp',
      keyCode: KEY_CODES.ARROW_UP,
      which: KEY_CODES.ARROW_UP
    });
    expect(firstDropdownItem === document.activeElement);
  });
  test('keyHandler skips disabled items and loops down to top', function () {
    secondDropdownItem.simulate('keydown', {
      key: 'ArrowDown',
      keyCode: KEY_CODES.ARROW_DOWN,
      which: KEY_CODES.ARROW_DOWN
    });
    expect(firstDropdownItem === document.activeElement);
  });
  test('keyHandler loops top to bottom', function () {
    firstDropdownItem.simulate('keydown', {
      key: 'ArrowUp',
      keyCode: KEY_CODES.ARROW_UP,
      which: KEY_CODES.ARROW_UP
    });
    expect(secondDropdownItem === document.activeElement);
  });
});
test('fillTemplate interpolates strings correctly', function () {
  // eslint-disable-next-line no-template-curly-in-string
  var templateString = 'My name is ${firstName} ${lastName}';
  var expected = 'My name is Jon Dough';
  var templatVars = {
    firstName: 'Jon',
    lastName: 'Dough'
  };
  var actual = fillTemplate(templateString, templatVars);
  expect(actual).toEqual(expected);
});