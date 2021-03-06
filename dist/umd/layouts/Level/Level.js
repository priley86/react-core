"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/layouts/Level/level.css.js", "../../styles/gutters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/layouts/Level/level.css.js"), require("../../styles/gutters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.levelCss, global.gutters);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _levelCss, _gutters) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _levelCss2 = _interopRequireDefault(_levelCss);

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
    /** Adds space between children. Options are sm, md or lg */
    gutter: _propTypes2["default"].oneOf(Object.keys(_gutters.GutterSize)),

    /** additional classes added to the Level layout */
    className: _propTypes2["default"].string,

    /** content rendered inside the Level layout */
    children: _propTypes2["default"].node,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    gutter: null,
    className: '',
    children: null
  };

  var Level = function Level(_ref) {
    var gutter = _ref.gutter,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["gutter", "className", "children"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_levelCss2["default"].level, gutter && (0, _gutters.getGutterModifier)(_levelCss2["default"], gutter, _levelCss2["default"].modifiers.gutter), className)
    }), children);
  };

  Level.propTypes = propTypes;
  Level.defaultProps = defaultProps;
  exports["default"] = Level;
});