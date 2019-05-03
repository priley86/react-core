import React from 'react';
import { mount } from 'enzyme';
import CheckboxSelectOption from './CheckboxSelectOption';
describe('checkbox select options', function () {
  test('renders with value parameter successfully', function () {
    var view = mount(React.createElement(CheckboxSelectOption, {
      value: "test",
      sendRef: jest.fn()
    }));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('renders with checked successfully', function () {
      var view = mount(React.createElement(CheckboxSelectOption, {
        isChecked: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('renders disabled successfully', function () {
      var view = mount(React.createElement(CheckboxSelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});