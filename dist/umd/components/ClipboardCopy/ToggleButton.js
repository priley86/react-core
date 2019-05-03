"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js", "@patternfly/react-styles", "@patternfly/react-icons", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.clipboardCopyCss, global.reactStyles, global.reactIcons, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _clipboardCopyCss, _reactStyles, _reactIcons, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _clipboardCopyCss2 = _interopRequireDefault(_clipboardCopyCss);

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

  var ToggleButton = function ToggleButton(_ref) {
    var isExpanded = _ref.isExpanded,
        onClick = _ref.onClick,
        className = _ref.className,
        id = _ref.id,
        textId = _ref.textId,
        contentId = _ref.contentId,
        props = _objectWithoutProperties(_ref, ["isExpanded", "onClick", "className", "id", "textId", "contentId"]);

    return _react2["default"].createElement("button", _extends({
      onClick: onClick,
      className: (0, _reactStyles.css)(_clipboardCopyCss2["default"].clipboardCopyGroupToggle, className),
      id: id,
      "aria-labelledby": "".concat(id, " ").concat(textId),
      "aria-controls": "".concat(contentId),
      "aria-expanded": "".concat(isExpanded)
    }, props), _react2["default"].createElement(_reactIcons.AngleRightIcon, {
      "aria-hidden": "true",
      className: (0, _reactStyles.css)(_clipboardCopyCss2["default"].clipboardCopyGroupToggleIcon)
    }));
  };

  ToggleButton.propTypes = {
    onClick: _propTypes2["default"].func.isRequired,
    id: _propTypes2["default"].string.isRequired,
    textId: _propTypes2["default"].string.isRequired,
    contentId: _propTypes2["default"].string.isRequired,
    isExpanded: _propTypes2["default"].bool,
    className: _propTypes2["default"].string
  };
  ToggleButton.defaultProps = {
    isExpanded: false,
    className: ''
  };
  exports["default"] = ToggleButton;
});