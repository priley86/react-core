import React from 'react';
import { shallow } from 'enzyme';
import SelectOption from './SelectOption';
describe('select options', function () {
  test('renders with value parameter successfully', function () {
    var view = shallow(React.createElement(SelectOption, {
      value: "test",
      sendRef: jest.fn()
    }));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('renders with hover successfully', function () {
      var view = shallow(React.createElement(SelectOption, {
        isHovered: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('renders disabled successfully', function () {
      var view = shallow(React.createElement(SelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('is selected', function () {
    test('renders selected successfully', function () {
      var view = shallow(React.createElement(SelectOption, {
        isSelected: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});