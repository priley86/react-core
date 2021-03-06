"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardNav = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _wizardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WizardNav = function WizardNav(_ref) {
  var children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$returnList = _ref.returnList,
      returnList = _ref$returnList === void 0 ? false : _ref$returnList;
  var innerList = React.createElement("ol", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardNavList)
  }, children);

  if (returnList) {
    return innerList;
  }

  return React.createElement("nav", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardNav, isOpen && 'pf-m-expanded'),
    "aria-label": ariaLabel
  }, React.createElement("ol", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardNavList)
  }, children));
};

exports.WizardNav = WizardNav;
WizardNav.propTypes = {
  children: _propTypes["default"].any,
  ariaLabel: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  returnList: _propTypes["default"].bool
};