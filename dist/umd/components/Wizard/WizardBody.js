"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../../@patternfly/patternfly/components/Wizard/wizard.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.wizardCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _wizardCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WizardBody = undefined;

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

  var WizardBody = exports.WizardBody = function WizardBody(_ref) {
    var children = _ref.children,
        _ref$hasBodyPadding = _ref.hasBodyPadding,
        hasBodyPadding = _ref$hasBodyPadding === void 0 ? true : _ref$hasBodyPadding;
    return React.createElement("main", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardMain, !hasBodyPadding && 'pf-m-no-padding')
    }, React.createElement("div", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardMainBody)
    }, children));
  };

  WizardBody.propTypes = {
    children: _propTypes2["default"].any.isRequired,
    hasBodyPadding: _propTypes2["default"].bool.isRequired
  };
});