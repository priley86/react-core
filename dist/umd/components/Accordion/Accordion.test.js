"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Accordion", "./AccordionToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Accordion"), require("./AccordionToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Accordion, global.AccordionToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Accordion, _AccordionToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Accordion2 = _interopRequireDefault(_Accordion);

  var _AccordionToggle2 = _interopRequireDefault(_AccordionToggle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Accordion', function () {
    test('Accordion default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Accordion2["default"], {
        "aria-label": "this is a simple accordion"
      }));
      expect(view.render()).toMatchSnapshot();
    });
    test('It should pass optional aria props', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_AccordionToggle2["default"], {
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
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_AccordionToggle2["default"], {
        "aria-label": "Toggle details for",
        id: "ex-toggle2",
        isExpanded: true
      }));
      var button = view.find('button[id="ex-toggle2"]').getElement();
      expect(button.props['aria-expanded']).toBe(true);
      expect(button.props.className).toContain('pf-m-expanded');
    });
  });
});