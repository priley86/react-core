"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardToggle = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _wizardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));

var _reactIcons = require("@patternfly/react-icons");

var _WizardBody = require("./WizardBody");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WizardToggle = function WizardToggle(_ref) {
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
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggle, isNavOpen && 'pf-m-expanded'),
    "aria-expanded": isNavOpen
  }, React.createElement("ol", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleList)
  }, React.createElement("li", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleListItem)
  }, React.createElement("span", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleNum)
  }, activeStepIndex), " ", activeStepName, activeStepSubName && React.createElement(_reactIcons.AngleRightIcon, {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleSeparator),
    "aria-hidden": "true"
  })), activeStepSubName && React.createElement("li", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleListItem)
  }, activeStepSubName)), React.createElement(_reactIcons.CaretDownIcon, {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardToggleIcon),
    "aria-hidden": "true"
  })), React.createElement("div", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardOuterWrap)
  }, React.createElement("div", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardInnerWrap)
  }, nav(isNavOpen), React.createElement(_WizardBody.WizardBody, {
    hasBodyPadding: hasBodyPadding
  }, activeStep.component)), children));
};

exports.WizardToggle = WizardToggle;
WizardToggle.propTypes = {
  nav: _propTypes["default"].any.isRequired,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  activeStep: _propTypes["default"].any.isRequired,
  children: _propTypes["default"].node.isRequired,
  hasBodyPadding: _propTypes["default"].bool.isRequired,
  isNavOpen: _propTypes["default"].bool.isRequired,
  onNavToggle: _propTypes["default"].func.isRequired
};