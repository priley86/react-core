"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Wizard"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Wizard"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Wizard);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Wizard) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

    var view = (0, _enzyme.mount)(React.createElement(_Wizard.Wizard, {
      isOpen: true,
      title: "Wizard title",
      description: "Description here",
      steps: steps,
      startAtStep: 1,
      onBack: onBack
    })); // ran into: https://github.com/airbnb/enzyme/issues/1213
    // so instead of: expect(view).toMatchSnapshot();

    var fragment = view.instance().render();
    expect((0, _enzyme.mount)(React.createElement("div", null, fragment)).getElement()).toMatchSnapshot();
  });
});