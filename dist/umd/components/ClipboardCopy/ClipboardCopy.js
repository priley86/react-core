"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js", "@patternfly/react-styles", "prop-types", "../TextInput", "../Tooltip", "../../helpers/GenerateId/GenerateId", "./CopyButton", "./ToggleButton", "./ExpandedContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../TextInput"), require("../Tooltip"), require("../../helpers/GenerateId/GenerateId"), require("./CopyButton"), require("./ToggleButton"), require("./ExpandedContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.clipboardCopyCss, global.reactStyles, global.propTypes, global.TextInput, global.Tooltip, global.GenerateId, global.CopyButton, global.ToggleButton, global.ExpandedContent);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _clipboardCopyCss, _reactStyles, _propTypes, _TextInput, _Tooltip, _GenerateId, _CopyButton, _ToggleButton, _ExpandedContent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ClipboardCopyVariant = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _clipboardCopyCss2 = _interopRequireDefault(_clipboardCopyCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _GenerateId2 = _interopRequireDefault(_GenerateId);

  var _CopyButton2 = _interopRequireDefault(_CopyButton);

  var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

  var _ExpandedContent2 = _interopRequireDefault(_ExpandedContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var clipboardCopyFunc = function clipboardCopyFunc(event, text) {
    var clipboard = event.currentTarget.parentElement;
    var el = document.createElement('input');
    el.value = text;
    clipboard.appendChild(el);
    el.select();
    document.execCommand('copy');
    clipboard.removeChild(el);
  };

  var ClipboardCopyVariant = exports.ClipboardCopyVariant = {
    inline: 'inline',
    expansion: 'expansion'
  };

  var ClipboardCopy =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ClipboardCopy, _React$Component);

    function ClipboardCopy(props) {
      var _this;

      _classCallCheck(this, ClipboardCopy);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ClipboardCopy).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "expandContent", function () {
        _this.setState(function (prevState) {
          return {
            expanded: !prevState.expanded
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "updateText", function (text) {
        _this.setState({
          text: text
        });

        _this.props.onChange(text);
      });

      _this.timer = null;
      _this.state = {
        text: _this.props.children,
        expanded: false,
        copied: false
      };
      return _this;
    }

    _createClass(ClipboardCopy, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            isReadOnly = _this$props.isReadOnly,
            exitDelay = _this$props.exitDelay,
            maxWidth = _this$props.maxWidth,
            entryDelay = _this$props.entryDelay,
            switchDelay = _this$props.switchDelay,
            onCopy = _this$props.onCopy,
            hoverTip = _this$props.hoverTip,
            clickTip = _this$props.clickTip,
            textAriaLabel = _this$props.textAriaLabel,
            toggleAriaLabel = _this$props.toggleAriaLabel,
            variant = _this$props.variant,
            position = _this$props.position,
            className = _this$props.className,
            props = _objectWithoutProperties(_this$props, ["isReadOnly", "exitDelay", "maxWidth", "entryDelay", "switchDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className"]);

        var textIdPrefix = 'text-input-';
        var toggleIdPrefix = 'toggle-';
        var contentIdPrefix = 'content-';
        return _react2["default"].createElement("div", _extends({
          className: (0, _reactStyles.css)(_clipboardCopyCss2["default"].clipboardCopy, this.state.expanded && _clipboardCopyCss2["default"].modifiers.expanded, className)
        }, props), _react2["default"].createElement(_GenerateId2["default"], {
          prefix: ""
        }, function (id) {
          return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("div", {
            className: (0, _reactStyles.css)(_clipboardCopyCss2["default"].clipboardCopyGroup)
          }, variant === 'expansion' && _react2["default"].createElement(_ToggleButton2["default"], {
            isExpanded: _this2.state.expanded,
            onClick: _this2.expandContent,
            id: "".concat(toggleIdPrefix, "-").concat(id),
            textId: "".concat(textIdPrefix, "-").concat(id),
            contentId: "".concat(contentIdPrefix, "-").concat(id),
            "aria-label": toggleAriaLabel
          }), _react2["default"].createElement(_TextInput.TextInput, {
            isReadOnly: isReadOnly || _this2.state.expanded,
            onChange: _this2.updateText,
            value: _this2.state.text,
            id: "text-input-".concat(id),
            "aria-label": textAriaLabel
          }), _react2["default"].createElement(_CopyButton2["default"], {
            exitDelay: exitDelay,
            entryDelay: entryDelay,
            maxWidth: maxWidth,
            position: position,
            id: "copy-button-".concat(id),
            textId: "text-input-".concat(id),
            "aria-label": hoverTip,
            onClick: function onClick(event) {
              if (_this2.timer) {
                clearTimeout(_this2.timer);

                _this2.setState({
                  copied: false
                });
              }

              onCopy(event, _this2.state.text);

              _this2.setState({
                copied: true
              }, function () {
                _this2.timer = setTimeout(function () {
                  _this2.setState({
                    copied: false
                  });

                  _this2.timer = null;
                }, switchDelay);
              });
            }
          }, _this2.state.copied ? clickTip : hoverTip)), _this2.state.expanded && _react2["default"].createElement(_ExpandedContent2["default"], {
            id: "content-".concat(id),
            onChange: _this2.updateText
          }, _this2.state.text));
        }));
      }
    }]);

    return ClipboardCopy;
  }(_react2["default"].Component);

  ClipboardCopy.propTypes = {
    /** Additional classes added to the clipboard copy container. */
    className: _propTypes2["default"].string,

    /** Tooltip message to display when hover the copy button */
    hoverTip: _propTypes2["default"].string,

    /** Tooltip message to display when clicking the copy button */
    clickTip: _propTypes2["default"].string,

    /** Custom flag to show that the input requires an associated id or aria-label. */
    textAriaLabel: _propTypes2["default"].string,

    /** Custom flag to show that the toggle button requires an associated id or aria-label. */
    toggleAriaLabel: _propTypes2["default"].string,

    /** Flag to show if the input is read only. */
    isReadOnly: _propTypes2["default"].bool,

    /** Adds Clipboard Copy variant styles. */
    variant: _propTypes2["default"].oneOf(Object.keys(ClipboardCopyVariant)),

    /** Copy button popover position. */
    position: _propTypes2["default"].oneOf(Object.keys(_Tooltip.TooltipPosition)),

    /** Maximum width of the tooltip (default 150px). */
    maxWidth: _propTypes2["default"].string,

    /** Delay in ms before the tooltip disappears. */
    exitDelay: _propTypes2["default"].number,

    /** Delay in ms before the tooltip appears. */
    entryDelay: _propTypes2["default"].number,

    /** Delay in ms before the tooltip message switch to hover tip. */
    switchDelay: _propTypes2["default"].number,

    /** A function that is triggered on clicking the copy button. */
    onCopy: _propTypes2["default"].func,

    /** A function that is triggered on changing the text. */
    onChange: _propTypes2["default"].func,

    /** The text which is copied. */
    children: _propTypes2["default"].node.isRequired,

    /** Additional props are spread to the container <div>. */
    '': _propTypes2["default"].any
  };
  ClipboardCopy.defaultProps = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    variant: ClipboardCopyVariant.inline,
    position: _Tooltip.TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1600,
    entryDelay: 100,
    switchDelay: 2000,
    onCopy: clipboardCopyFunc,
    onChange: function onChange() {},
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content'
  };
  exports["default"] = ClipboardCopy;
});