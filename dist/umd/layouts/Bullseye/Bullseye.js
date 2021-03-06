"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "../../@patternfly/patternfly/layouts/Bullseye/bullseye.css.js", "prop-types", "../../helpers/componentShape"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/layouts/Bullseye/bullseye.css.js"), require("prop-types"), require("../../helpers/componentShape"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.bullseyeCss, global.propTypes, global.componentShape);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _bullseyeCss, _propTypes, _componentShape) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _bullseyeCss2 = _interopRequireDefault(_bullseyeCss);

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

  var propTypes = {
    /** content rendered inside the Bullseye layout */
    children: _propTypes2["default"].any,

    /** additional classes added to the Bullseye layout */
    className: _propTypes2["default"].string,

    /** Sets the base component to render. defaults to div */
    component: _componentShape.componentShape,

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    component: 'div'
  };

  var Bullseye = function Bullseye(_ref) {
    var children = _ref.children,
        className = _ref.className,
        Component = _ref.component,
        props = _objectWithoutProperties(_ref, ["children", "className", "component"]);

    return _react2["default"].createElement(Component, _extends({
      className: (0, _reactStyles.css)(_bullseyeCss2["default"].bullseye, className)
    }, props), children);
  };

  Bullseye.propTypes = propTypes;
  Bullseye.defaultProps = defaultProps;
  exports["default"] = Bullseye;
});