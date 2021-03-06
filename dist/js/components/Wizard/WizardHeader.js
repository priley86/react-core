"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardHeader = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _wizardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _Button = require("../Button");

var _Title = require("../Title");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WizardHeader = function WizardHeader(_ref) {
  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return undefined;
  } : _ref$onClose,
      title = _ref.title,
      description = _ref.description,
      ariaLabelCloseButton = _ref.ariaLabelCloseButton,
      titleId = _ref.titleId,
      descriptionId = _ref.descriptionId;
  return React.createElement("div", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardHeader)
  }, React.createElement(_Button.Button, {
    variant: "plain",
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardClose),
    "aria-label": ariaLabelCloseButton,
    onClick: onClose
  }, React.createElement(_reactIcons.TimesIcon, {
    "aria-hidden": "true"
  })), React.createElement(_Title.Title, {
    size: "3xl",
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardTitle),
    "aria-label": title,
    id: titleId
  }, title), description && React.createElement("p", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardDescription),
    id: descriptionId
  }, description));
};

exports.WizardHeader = WizardHeader;
WizardHeader.propTypes = {
  onClose: _propTypes["default"].func,
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  ariaLabelCloseButton: _propTypes["default"].string,
  titleId: _propTypes["default"].string,
  descriptionId: _propTypes["default"].string
};