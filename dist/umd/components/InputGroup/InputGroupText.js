"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/InputGroup/input-group.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/componentShape"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/InputGroup/input-group.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/componentShape"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.inputGroupCss, global.reactStyles, global.propTypes, global.componentShape);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _inputGroupCss, _reactStyles, _propTypes, _componentShape) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _inputGroupCss2 = _interopRequireDefault(_inputGroupCss);

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

  var InputGroupText = function InputGroupText(_ref) {
    var Component = _ref.component,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["component", "className", "children"]);

    return _react2["default"].createElement(Component, _extends({
      className: (0, _reactStyles.css)(_inputGroupCss2["default"].inputGroupText, className)
    }, props), children);
  };

  InputGroupText.propTypes = {
    /** Additional classes added to the input group text. */
    className: _propTypes2["default"].string,

    /** Content rendered inside the input group text. */
    children: _propTypes2["default"].node.isRequired,

    /** Component that wraps the input group text. */
    component: _componentShape.componentShape
  };
  InputGroupText.defaultProps = {
    className: '',
    component: 'span'
  };
  exports["default"] = InputGroupText;
});