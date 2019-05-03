"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/Accordion/accordion.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/Accordion/accordion.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.accordionCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _accordionCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _accordionCss2 = _interopRequireDefault(_accordionCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  var Accordion = function Accordion(_ref) {
    var children = _ref.children,
        className = _ref.className,
        ariaLabel = _ref['aria-label'],
        props = _objectWithoutProperties(_ref, ["children", "className", "aria-label"]);

    return _react2["default"].createElement("dl", _extends({
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordion, className),
      "aria-label": ariaLabel
    }, props), children);
  };

  Accordion.propTypes = {
    /** Content rendered inside the Accordion */
    children: _propTypes2["default"].node,

    /** Additional classes added to the Accordion */
    className: _propTypes2["default"].string,

    /** Adds accessible text to the Accordion */
    'aria-label': _propTypes2["default"].string,

    /** Additional props are spread to the container <dl> */
    '': _propTypes2["default"].any
  };
  Accordion.defaultProps = {
    children: null,
    className: '',
    'aria-label': ''
  };
  exports["default"] = Accordion;
});