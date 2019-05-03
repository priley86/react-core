import React from 'react';
import { shallow } from 'enzyme';
import ChipButton from './ChipButton';
import Chip from './Chip';
test('ChipButton', function () {
  var view = shallow(React.createElement(ChipButton, {
    id: "my-chip-button",
    className: "chip-bttn-cls"
  }, React.createElement("b", null, "Close")));
  expect(view).toMatchSnapshot();
});
describe('Chip', function () {
  test('overflow', function () {
    var view = shallow(React.createElement(Chip, {
      className: "my-chp-cls",
      isOverflowChip: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
  test('closable', function () {
    var view = shallow(React.createElement(Chip, {
      className: "my-chp-cls",
      id: "chip_one"
    }, "Chip"));
    expect(view).toMatchSnapshot();
  });
  test('closable with tooltip', function () {
    var view = shallow(React.createElement(Chip, {
      className: "my-chp-cls",
      id: "chip_one"
    }, "1234567890123456789"));
    expect(view).toMatchSnapshot();
  });
  test('readonly', function () {
    var view = shallow(React.createElement(Chip, {
      className: "my-chp-cls",
      isReadOnly: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
});