"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Wizard/wizard.css.js", "@patternfly/react-icons", "./WizardBody"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"), require("@patternfly/react-icons"), require("./WizardBody"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactStyles, global.wizardCss, global.reactIcons, global.WizardBody);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _reactStyles, _wizardCss, _reactIcons, _WizardBody) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WizardToggle = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _wizardCss2 = _interopRequireDefault(_wizardCss);

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var WizardToggle = exports.WizardToggle = function WizardToggle(_ref) {
    var isNavOpen = _ref.isNavOpen,
        onNavToggle = _ref.onNavToggle,
        nav = _ref.nav,
        steps = _ref.steps,
        activeStep = _ref.activeStep,
        children = _ref.children,
        _ref$hasBodyPadding = _ref.hasBodyPadding,
        hasBodyPadding = _ref$hasBodyPadding === void 0 ? true : _ref$hasBodyPadding,
        props = _objectWithoutProperties(_ref, ["isNavOpen", "onNavToggle", "nav", "steps", "activeStep", "children", "hasBodyPadding"]);

    var activeStepIndex;
    var activeStepName;
    var activeStepSubName;

    for (var i = 0; i < steps.length; i++) {
      if (activeStep.id && steps[i].id === activeStep.id || steps[i].name === activeStep.name) {
        activeStepIndex = i + 1;
        activeStepName = steps[i].name;
        break;
      } else if (steps[i].steps) {
        for (var j = 0; j < steps[i].steps.length; j++) {
          if (activeStep.id && steps[i].steps[j].id === activeStep.id || steps[i].steps[j].name === activeStep.name) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            activeStepSubName = steps[i].steps[j].name;
            break;
          }
        }
      }
    }

    return React.createElement(React.Fragment, null, React.createElement("button", {
      onClick: function onClick() {
        return onNavToggle(!isNavOpen);
      },
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggle, isNavOpen && 'pf-m-expanded'),
      "aria-expanded": isNavOpen
    }, React.createElement("ol", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleList)
    }, React.createElement("li", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleListItem)
    }, React.createElement("span", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleNum)
    }, activeStepIndex), " ", activeStepName, activeStepSubName && React.createElement(_reactIcons.AngleRightIcon, {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleSeparator),
      "aria-hidden": "true"
    })), activeStepSubName && React.createElement("li", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleListItem)
    }, activeStepSubName)), React.createElement(_reactIcons.CaretDownIcon, {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardToggleIcon),
      "aria-hidden": "true"
    })), React.createElement("div", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardOuterWrap)
    }, React.createElement("div", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardInnerWrap)
    }, nav(isNavOpen), React.createElement(_WizardBody.WizardBody, {
      hasBodyPadding: hasBodyPadding
    }, activeStep.component)), children));
  };

  WizardToggle.propTypes = {
    nav: _propTypes2["default"].any.isRequired,
    steps: _propTypes2["default"].arrayOf(_propTypes2["default"].any).isRequired,
    activeStep: _propTypes2["default"].any.isRequired,
    children: _propTypes2["default"].node.isRequired,
    hasBodyPadding: _propTypes2["default"].bool.isRequired,
    isNavOpen: _propTypes2["default"].bool.isRequired,
    onNavToggle: _propTypes2["default"].func.isRequired
  };
});