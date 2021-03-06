"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Title/title.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Title/title.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactStyles, global.titleCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _reactStyles, _titleCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Title = exports.TitleLevel = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _titleCss2 = _interopRequireDefault(_titleCss);

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

  var TitleLevel = exports.TitleLevel = undefined;

  (function (TitleLevel) {
    TitleLevel["h1"] = "h1";
    TitleLevel["h2"] = "h2";
    TitleLevel["h3"] = "h3";
    TitleLevel["h4"] = "h4";
    TitleLevel["h5"] = "h5";
    TitleLevel["h6"] = "h6";
  })(TitleLevel || (exports.TitleLevel = TitleLevel = {}));

  var Title = function Title(_ref) {
    var size = _ref.size,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? '' : _ref$children,
        _ref$headingLevel = _ref.headingLevel,
        HeadingLevel = _ref$headingLevel === void 0 ? TitleLevel.h1 : _ref$headingLevel,
        props = _objectWithoutProperties(_ref, ["size", "className", "children", "headingLevel"]);

    return React.createElement(HeadingLevel, _extends({}, props, {
      className: (0, _reactStyles.css)(_titleCss2["default"].title, (0, _reactStyles.getModifier)(_titleCss2["default"], size), className)
    }), children);
  };

  Title.propTypes = {
    size: _propTypes2["default"].any.isRequired,
    children: _propTypes2["default"].node,
    className: _propTypes2["default"].string,
    headingLevel: _propTypes2["default"].any
  };
  exports.Title = Title;
});