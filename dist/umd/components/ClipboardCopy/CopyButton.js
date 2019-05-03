"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js", "@patternfly/react-styles", "@patternfly/react-icons", "prop-types", "../Tooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("prop-types"), require("../Tooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.clipboardCopyCss, global.reactStyles, global.reactIcons, global.propTypes, global.Tooltip);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _clipboardCopyCss, _reactStyles, _reactIcons, _propTypes, _Tooltip) {
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

  var CopyButton = function CopyButton(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick,
        exitDelay = _ref.exitDelay,
        entryDelay = _ref.entryDelay,
        maxWidth = _ref.maxWidth,
        position = _ref.position,
        children = _ref.children,
        ariaLabel = _ref['aria-label'],
        id = _ref.id,
        textId = _ref.textId,
        props = _objectWithoutProperties(_ref, ["className", "onClick", "exitDelay", "entryDelay", "maxWidth", "position", "children", "aria-label", "id", "textId"]);

    return _react2["default"].createElement(_Tooltip.Tooltip, {
      trigger: 'mouseenter focus click',
      exitDelay: exitDelay,
      entryDelay: entryDelay,
      maxWidth: maxWidth,
      position: position,
      content: _react2["default"].createElement("div", null, children)
    }, _react2["default"].createElement("button", _extends({
      onClick: onClick,
      className: (0, _reactStyles.css)(_clipboardCopyCss2["default"].clipboardCopyGroupCopy, className),
      "aria-label": ariaLabel,
      id: id,
      "aria-labelledby": "".concat(id, " ").concat(textId)
    }, props), _react2["default"].createElement(_reactIcons.CopyIcon, null)));
  };

  CopyButton.propTypes = {
    onClick: _propTypes2["default"].func.isRequired,
    children: _propTypes2["default"].node.isRequired,
    id: _propTypes2["default"].string.isRequired,
    textId: _propTypes2["default"].string.isRequired,
    className: _propTypes2["default"].string,
    exitDelay: _propTypes2["default"].number,
    entryDelay: _propTypes2["default"].number,
    maxWidth: _propTypes2["default"].string,
    position: _propTypes2["default"].oneOf(Object.keys(_Tooltip.TooltipPosition)),
    'aria-label': _propTypes2["default"].string
  };
  CopyButton.defaultProps = {
    className: '',
    exitDelay: 100,
    entryDelay: 100,
    maxWidth: '100px',
    position: 'top',
    'aria-label': 'Copyable input'
  };
  exports["default"] = CopyButton;
});