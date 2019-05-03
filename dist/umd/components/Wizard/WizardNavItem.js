"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Wizard/wizard.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactStyles, global.wizardCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _reactStyles, _wizardCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WizardNavItem = undefined;

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

  var WizardNavItem = exports.WizardNavItem = function WizardNavItem(_ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? null : _ref$children,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? '' : _ref$text,
        _ref$isCurrent = _ref.isCurrent,
        isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
        _ref$isDisabled = _ref.isDisabled,
        isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
        step = _ref.step,
        _ref$onNavItemClick = _ref.onNavItemClick,
        onNavItemClick = _ref$onNavItemClick === void 0 ? function () {
      return undefined;
    } : _ref$onNavItemClick;
    return React.createElement("li", {
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardNavItem)
    }, React.createElement("a", {
      "aria-current": isCurrent && !children ? 'page' : false,
      onClick: function onClick() {
        return onNavItemClick(step);
      },
      className: (0, _reactStyles.css)(_wizardCss2["default"].wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled'),
      "aria-disabled": isDisabled ? true : false,
      tabIndex: isDisabled ? -1 : undefined
    }, text), children);
  };

  WizardNavItem.propTypes = {
    children: _propTypes2["default"].node,
    text: _propTypes2["default"].string,
    isCurrent: _propTypes2["default"].bool,
    isDisabled: _propTypes2["default"].bool,
    step: _propTypes2["default"].number.isRequired
  };
});