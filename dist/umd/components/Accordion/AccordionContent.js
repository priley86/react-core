"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Accordion/accordion.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Accordion/accordion.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.accordionCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _accordionCss) {
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

  var AccordionContent = function AccordionContent(_ref) {
    var className = _ref.className,
        children = _ref.children,
        id = _ref.id,
        isHidden = _ref.isHidden,
        isFixed = _ref.isFixed,
        ariaLabel = _ref['aria-label'],
        props = _objectWithoutProperties(_ref, ["className", "children", "id", "isHidden", "isFixed", "aria-label"]);

    return _react2["default"].createElement("dd", _extends({
      id: id,
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordionExpandedContent, isFixed && _accordionCss2["default"].modifiers.fixed, !isHidden && _accordionCss2["default"].modifiers.expanded, className),
      hidden: isHidden,
      "aria-label": ariaLabel
    }, props), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordionExpandedContentBody)
    }, children));
  };

  AccordionContent.propTypes = {
    /** Content rendered inside the Accordion */
    children: _propTypes2["default"].node,

    /** Additional classes added to the Accordion content */
    className: _propTypes2["default"].string,

    /** Identify the AccordionContent item */
    id: _propTypes2["default"].string,

    /** Flag to show if the expanded content of the Accordion item is visible */
    isHidden: _propTypes2["default"].bool,

    /** Flag to indicate Accordion content is fixed */
    isFixed: _propTypes2["default"].bool,

    /** Adds accessible text to the Accordion content */
    'aria-label': _propTypes2["default"].string,

    /** Additional props are spread to the container <dd> */
    '': _propTypes2["default"].any
  };
  AccordionContent.defaultProps = {
    className: '',
    id: '',
    isHidden: false,
    isFixed: false,
    'aria-label': ''
  };
  exports["default"] = AccordionContent;
});