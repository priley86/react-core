"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _AccordionToggle = _interopRequireDefault(require("./AccordionToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Accordion', function () {
  test('Accordion default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Accordion["default"], {
      "aria-label": "this is a simple accordion"
    }));
    expect(view.render()).toMatchSnapshot();
  });
  test('It should pass optional aria props', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_AccordionToggle["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_AccordionToggle["default"], {
      "aria-label": "Toggle details for",
      id: "ex-toggle2",
      isExpanded: true
    }));
    var button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-expanded']).toBe(true);
    expect(button.props.className).toContain('pf-m-expanded');
  });
});