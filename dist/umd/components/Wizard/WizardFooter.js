"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../../@patternfly/patternfly/components/Wizard/wizard.css.js", "@patternfly/react-styles", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"), require("@patternfly/react-styles"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.wizardCss, global.reactStyles, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _wizardCss, _reactStyles, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WizardFooterInternal = exports.WizardFooter = undefined;

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

  var WizardFooter = exports.WizardFooter = function WizardFooter(_ref) {
    var children = _ref.children;
    return React.createElement("footer", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardFooter)
    }, children);
  };

  WizardFooter.propTypes = {
    children: _propTypes2["default"].any.isRequired
  };

  var WizardFooterInternal = exports.WizardFooterInternal = function WizardFooterInternal(_ref2) {
    var onNext = _ref2.onNext,
        onBack = _ref2.onBack,
        onClose = _ref2.onClose,
        isValid = _ref2.isValid,
        firstStep = _ref2.firstStep,
        activeStep = _ref2.activeStep,
        nextButtonText = _ref2.nextButtonText,
        backButtonText = _ref2.backButtonText,
        cancelButtonText = _ref2.cancelButtonText;
    return React.createElement("footer", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardFooter)
    }, React.createElement(_Button.Button, {
      variant: _Button.ButtonVariant.primary,
      type: "submit",
      onClick: onNext,
      isDisabled: !isValid
    }, nextButtonText), !activeStep.hideBackButton && React.createElement(_Button.Button, {
      variant: _Button.ButtonVariant.secondary,
      onClick: onBack,
      className: (0, _reactStyles.css)(firstStep && 'pf-m-disabled')
    }, backButtonText), !activeStep.hideCancelButton && React.createElement(_Button.Button, {
      variant: _Button.ButtonVariant.link,
      onClick: onClose
    }, cancelButtonText));
  };

  WizardFooterInternal.propTypes = {
    onNext: _propTypes2["default"].any.isRequired,
    onBack: _propTypes2["default"].any.isRequired,
    onClose: _propTypes2["default"].any.isRequired,
    isValid: _propTypes2["default"].bool.isRequired,
    firstStep: _propTypes2["default"].bool.isRequired,
    activeStep: _propTypes2["default"].any.isRequired,
    nextButtonText: _propTypes2["default"].string.isRequired,
    backButtonText: _propTypes2["default"].string.isRequired,
    cancelButtonText: _propTypes2["default"].string.isRequired
  };
});