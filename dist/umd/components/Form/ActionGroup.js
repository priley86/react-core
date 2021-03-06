"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/components/Form/form.css.js", "@patternfly/react-styles", "../Form/FormContext"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/components/Form/form.css.js"), require("@patternfly/react-styles"), require("../Form/FormContext"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.formCss, global.reactStyles, global.FormContext);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _formCss, _reactStyles, _FormContext) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _formCss2 = _interopRequireDefault(_formCss);

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
    /** Anything that can be rendered as ActionGroup content. */
    children: _propTypes2["default"].node,

    /** Additional classes added to the ActionGroup. */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: ''
  };

  var ActionGroup = function ActionGroup(_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["className", "children"]);

    var customClassName = (0, _reactStyles.css)(_formCss2["default"].formGroup, _formCss2["default"].modifiers.action, className);
    var classesHorizontal = (0, _reactStyles.css)(_formCss2["default"].formHorizontalGroup);

    var formActionsComponent = _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_formCss2["default"].formActions)
    }, children);

    return _react2["default"].createElement(_FormContext.FormContext.Consumer, null, function (_ref2) {
      var isHorizontal = _ref2.isHorizontal;
      return _react2["default"].createElement("div", _extends({}, props, {
        className: customClassName
      }), isHorizontal ? _react2["default"].createElement("div", {
        className: classesHorizontal
      }, formActionsComponent) : formActionsComponent);
    });
  };

  ActionGroup.propTypes = propTypes;
  ActionGroup.defaultProps = defaultProps;
  exports["default"] = ActionGroup;
});