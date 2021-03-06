"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Card/card.css.js", "../../helpers/componentShape"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Card/card.css.js"), require("../../helpers/componentShape"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.cardCss, global.componentShape);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _cardCss, _componentShape) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _cardCss2 = _interopRequireDefault(_cardCss);

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
    /** content rendered inside the Card Footer */
    children: _propTypes2["default"].any,

    /** additional classes added to the Footer */
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

  var CardFooter = function CardFooter(_ref) {
    var children = _ref.children,
        className = _ref.className,
        Component = _ref.component,
        props = _objectWithoutProperties(_ref, ["children", "className", "component"]);

    return _react2["default"].createElement(Component, _extends({
      className: (0, _reactStyles.css)(_cardCss2["default"].cardFooter, className)
    }, props), children);
  };

  CardFooter.propTypes = propTypes;
  CardFooter.defaultProps = defaultProps;
  exports["default"] = CardFooter;
});