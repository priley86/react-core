import * as React from 'react';
import { mount } from 'enzyme';
import { Wizard } from './Wizard';
test('Wizard should match snapshot', function () {
  var steps = [{
    name: 'A',
    component: React.createElement("p", null, "Step 1")
  }, {
    name: 'B',
    steps: [{
      name: 'B-1',
      component: React.createElement("p", null, "Step 2"),
      enableNext: true
    }, {
      name: 'B-2',
      component: React.createElement("p", null, "Step 3"),
      enableNext: false
    }]
  }, {
    name: 'C',
    component: React.createElement("p", null, "Step 4")
  }, {
    name: 'D',
    component: React.createElement("p", null, "Step 5")
  }];

  var onBack = function onBack(step) {
    var name = {
      step: step
    };
  };

  var view = mount(React.createElement(Wizard, {
    isOpen: true,
    title: "Wizard title",
    description: "Description here",
    steps: steps,
    startAtStep: 1,
    onBack: onBack
  })); // ran into: https://github.com/airbnb/enzyme/issues/1213
  // so instead of: expect(view).toMatchSnapshot();

  var fragment = view.instance().render();
  expect(mount(React.createElement("div", null, fragment)).getElement()).toMatchSnapshot();
});