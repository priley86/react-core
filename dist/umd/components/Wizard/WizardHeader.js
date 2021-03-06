"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../../@patternfly/patternfly/components/Wizard/wizard.css.js", "@patternfly/react-styles", "../Button", "../Title", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"), require("@patternfly/react-styles"), require("../Button"), require("../Title"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.wizardCss, global.reactStyles, global.Button, global.Title, global.reactIcons);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _wizardCss, _reactStyles, _Button, _Title, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WizardHeader = undefined;

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

  var WizardHeader = exports.WizardHeader = function WizardHeader(_ref) {
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
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardHeader)
    }, React.createElement(_Button.Button, {
      variant: "plain",
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardClose),
      "aria-label": ariaLabelCloseButton,
      onClick: onClose
    }, React.createElement(_reactIcons.TimesIcon, {
      "aria-hidden": "true"
    })), React.createElement(_Title.Title, {
      size: "3xl",
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardTitle),
      "aria-label": title,
      id: titleId
    }, title), description && React.createElement("p", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardDescription),
      id: descriptionId
    }, description));
  };

  WizardHeader.propTypes = {
    onClose: _propTypes2["default"].func,
    title: _propTypes2["default"].string.isRequired,
    description: _propTypes2["default"].string,
    ariaLabelCloseButton: _propTypes2["default"].string,
    titleId: _propTypes2["default"].string,
    descriptionId: _propTypes2["default"].string
  };
});