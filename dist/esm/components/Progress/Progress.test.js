import React from 'react';
import { mount } from 'enzyme';
import Progress, { ProgressSize } from './Progress';
import { ProgressVariant, ProgressMeasureLocation } from './ProgressContainer';
test('Simple progress', function () {
  var view = mount(React.createElement(Progress, {
    value: 33,
    id: "progress-simple-example"
  }));
  expect(view).toMatchSnapshot();
});
test('no value specified', function () {
  var view = mount(React.createElement(Progress, {
    id: "no-value"
  }));
  expect(view).toMatchSnapshot();
});
test('additional label', function () {
  var view = mount(React.createElement(Progress, {
    id: "additional-label",
    value: 33,
    label: "Additional label"
  }));
  expect(view).toMatchSnapshot();
});
test('Progress with aria-valuetext', function () {
  var view = mount(React.createElement(Progress, {
    value: 33,
    id: "progress-aria-valuetext",
    valueText: "Descriptive text here"
  }));
  expect(view).toMatchSnapshot();
});
test('value lower than minValue', function () {
  var view = mount(React.createElement(Progress, {
    value: 33,
    id: "lower-min-value",
    min: 40
  }));
  expect(view).toMatchSnapshot();
});
test('value higher than maxValue', function () {
  var view = mount(React.createElement(Progress, {
    value: 77,
    id: "higher-max-value",
    max: 60
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled with minValue', function () {
  var view = mount(React.createElement(Progress, {
    min: 10,
    value: 50,
    id: "scaled-min-value"
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled with maxValue', function () {
  var view = mount(React.createElement(Progress, {
    value: 50,
    id: "scaled-max-value",
    max: 80
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled between minValue and maxValue', function () {
  var view = mount(React.createElement(Progress, {
    min: 10,
    value: 50,
    id: "scaled-range-value",
    max: 80
  }));
  expect(view).toMatchSnapshot();
});
describe('Progress size', function () {
  Object.keys(ProgressSize).forEach(function (oneSize) {
    test(oneSize, function () {
      var view = mount(React.createElement(Progress, {
        id: "".concat(oneSize, "-progress"),
        value: 33,
        size: oneSize
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
describe('Progress variant', function () {
  Object.keys(ProgressVariant).forEach(function (oneVariant) {
    test(oneVariant, function () {
      var view = mount(React.createElement(Progress, {
        id: "".concat(oneVariant, "-progress"),
        value: 33,
        variant: oneVariant
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
describe('Progress measure location', function () {
  Object.keys(ProgressMeasureLocation).forEach(function (oneLocation) {
    test(oneLocation, function () {
      var view = mount(React.createElement(Progress, {
        id: "".concat(oneLocation, "-progress"),
        value: 33,
        measureLocation: oneLocation
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('inside and small should render large', function () {
    var view = mount(React.createElement(Progress, {
      id: "large-progress",
      value: 33,
      measureLocation: ProgressMeasureLocation.inside,
      size: ProgressSize.sm
    }));
    expect(view).toMatchSnapshot();
  });
});