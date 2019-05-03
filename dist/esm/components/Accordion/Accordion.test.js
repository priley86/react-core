import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionToggle from './AccordionToggle';
describe('Accordion', function () {
  test('Accordion default', function () {
    var view = shallow(React.createElement(Accordion, {
      "aria-label": "this is a simple accordion"
    }));
    expect(view.render()).toMatchSnapshot();
  });
  test('It should pass optional aria props', function () {
    var view = mount(React.createElement(AccordionToggle, {
      "aria-label": "Toggle details for",
      "aria-labelledby": "ex-toggle2 ex-item2",
      id: "ex-toggle2"
    }));
    var button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-label']).toBe('Toggle details for');
    expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
    expect(button.props['aria-expanded']).toBe(false);
  });
  test('Toggle expanded', function () {
    var view = mount(React.createElement(AccordionToggle, {
      "aria-label": "Toggle details for",
      id: "ex-toggle2",
      isExpanded: true
    }));
    var button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-expanded']).toBe(true);
    expect(button.props.className).toContain('pf-m-expanded');
  });
});