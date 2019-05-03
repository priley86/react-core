"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  // toolbar css
  var toolbarCss = _reactStyles.StyleSheet.parse("\n  .pf-l-toolbar {\n  --pf-l-toolbar__section--MarginTop: var(--pf-global--spacer--md);\n  --pf-l-toolbar__group--MarginRight: var(--pf-global--spacer--xl);\n  --pf-l-toolbar__group--MarginLeft: var(--pf-global--spacer--xl);\n  --pf-l-toolbar__item--MarginRight: var(--pf-global--spacer--md);\n  --pf-l-toolbar__item--MarginLeft: var(--pf-global--spacer--md); }\n\n.pf-l-toolbar,\n.pf-l-toolbar__section,\n.pf-l-toolbar__group {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.pf-l-toolbar__section {\n  flex-basis: 100%; }\n.pf-l-toolbar__section:not(:first-child) {\n  margin-top: var(--pf-l-toolbar__section--MarginTop); }\n\n.pf-l-toolbar__group:not(:last-child) {\n  margin-right: var(--pf-l-toolbar__group--MarginRight); }\n\n.pf-l-toolbar__item .pf-l-toolbar:not(:last-child) {\n  margin-right: var(--pf-l-toolbar__item--MarginRight); }\n");

  toolbarCss.inject();
  var propTypes = {
    /** Anything that can be rendered as toolbar item content */
    children: _propTypes2["default"].node,

    /** Classes applied to toolbar item */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: null
  };

  var ToolbarItem = function ToolbarItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["children", "className"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)('pf-l-toolbar__item', className)
    }), children);
  };

  ToolbarItem.propTypes = propTypes;
  ToolbarItem.defaultProps = defaultProps;
  exports["default"] = ToolbarItem;
});