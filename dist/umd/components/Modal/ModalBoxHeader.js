"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../Title", "../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../Title"), require("../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Title, global.accessibilityCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _Title, _accessibilityCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _accessibilityCss2 = _interopRequireDefault(_accessibilityCss);

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

  var propTypes = {
    /** content rendered inside the Header */
    children: _propTypes2["default"].node,

    /** additional classes added to the button */
    className: _propTypes2["default"].string,

    /** Flag to show the title */
    hideTitle: _propTypes2["default"].bool.isRequired,

    /** Additional props are spread to the container <header> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: ''
  };

  var ModalBoxHeader = function ModalBoxHeader(_ref) {
    var hideTitle = _ref.hideTitle,
        children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["hideTitle", "children", "className"]);

    var hidden = hideTitle ? (0, _reactStyles.css)(_accessibilityCss2["default"].screenReader) : '';
    return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Title.Title, _extends({
      size: "2xl",
      headingLevel: "h3",
      className: className + hidden
    }, props), children));
  };

  ModalBoxHeader.propTypes = propTypes;
  ModalBoxHeader.defaultProps = defaultProps;
  exports["default"] = ModalBoxHeader;
});