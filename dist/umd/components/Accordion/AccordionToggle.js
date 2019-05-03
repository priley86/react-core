"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "@patternfly/react-icons", "../../@patternfly/patternfly/components/Accordion/accordion.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("../../@patternfly/patternfly/components/Accordion/accordion.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.reactIcons, global.accordionCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _reactIcons, _accordionCss) {
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

  var AccordionToggle = function AccordionToggle(_ref) {
    var className = _ref.className,
        id = _ref.id,
        isExpanded = _ref.isExpanded,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["className", "id", "isExpanded", "children"]);

    return _react2["default"].createElement("dt", null, _react2["default"].createElement("h3", null, _react2["default"].createElement("button", _extends({
      id: id,
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordionToggle, isExpanded && _accordionCss2["default"].modifiers.expanded, className)
    }, props, {
      variant: "plain",
      "aria-expanded": isExpanded
    }), _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordionToggleText)
    }, children), _react2["default"].createElement(_reactIcons.AngleRightIcon, {
      className: (0, _reactStyles.css)(_accordionCss2["default"].accordionToggleIcon)
    }))));
  };

  AccordionToggle.propTypes = {
    /** Additional classes added to the Accordion Toggle */
    className: _propTypes2["default"].string,

    /** Flag to show if the expanded content of the Accordion item is visible */
    isExpanded: _propTypes2["default"].bool,

    /** Identify the Accordion toggle number */
    id: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <dt> */
    '': _propTypes2["default"].any
  };
  AccordionToggle.defaultProps = {
    className: '',
    isExpanded: false
  };
  exports["default"] = AccordionToggle;
});