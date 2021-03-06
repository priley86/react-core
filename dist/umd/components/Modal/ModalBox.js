"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/ModalBox/modal-box.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/ModalBox/modal-box.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.modalBoxCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _modalBoxCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _modalBoxCss2 = _interopRequireDefault(_modalBoxCss);

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
    /** content rendered inside the ModalBox. */
    children: _propTypes2["default"].node.isRequired,

    /** additional classes added to the ModalBox */
    className: _propTypes2["default"].string,

    /** Creates a large version of the ModalBox */
    isLarge: _propTypes2["default"].bool,

    /** Creates a small version of the ModalBox. */
    isSmall: _propTypes2["default"].bool,

    /** string to use for Modal Box label */
    title: _propTypes2["default"].string.isRequired,

    /** id to use for Modal Box description */
    id: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    isLarge: false,
    isSmall: false
  };

  var ModalBox = function ModalBox(_ref) {
    var children = _ref.children,
        className = _ref.className,
        isLarge = _ref.isLarge,
        isSmall = _ref.isSmall,
        title = _ref.title,
        id = _ref.id,
        props = _objectWithoutProperties(_ref, ["children", "className", "isLarge", "isSmall", "title", "id"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      role: "dialog",
      "aria-label": title,
      "aria-describedby": id,
      "aria-modal": "true",
      className: (0, _reactStyles.css)(_modalBoxCss2["default"].modalBox, className, isLarge && _modalBoxCss2["default"].modifiers.lg, isSmall && _modalBoxCss2["default"].modifiers.sm)
    }), children);
  };

  ModalBox.propTypes = propTypes;
  ModalBox.defaultProps = defaultProps;
  exports["default"] = ModalBox;
});