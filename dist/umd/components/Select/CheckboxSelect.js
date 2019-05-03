"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Select/select.css.js", "../../@patternfly/patternfly/components/Form/form.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/util", "focus-trap-react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Select/select.css.js"), require("../../@patternfly/patternfly/components/Form/form.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/util"), require("focus-trap-react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.selectCss, global.formCss, global.reactStyles, global.propTypes, global.util, global.focusTrapReact);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _selectCss, _formCss, _reactStyles, _propTypes, _util, _focusTrapReact) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _selectCss2 = _interopRequireDefault(_selectCss);

  var _formCss2 = _interopRequireDefault(_formCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

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

  var propTypes = {
    /** Content rendered inside the CheckboxSelect */
    children: _propTypes2["default"].node.isRequired,

    /** Additional classes added to the CheckboxSelect control */
    className: _propTypes2["default"].string,

    /** Flag indicating the Select is expanded */
    isExpanded: _propTypes2["default"].bool,

    /** Flag indicating whether checkboxes are grouped */
    isGrouped: _propTypes2["default"].bool,

    /** Currently checked options */
    checked: _propTypes2["default"].arrayOf(_propTypes2["default"].string),

    /** Additional props are spread to the container <select> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    isExpanded: false,
    isGrouped: false,
    checked: []
  };

  var CheckboxSelect =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CheckboxSelect, _React$Component);

    function CheckboxSelect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CheckboxSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "refCollection", []);

      _defineProperty(_assertThisInitialized(_this), "sendRef", function (ref, index) {
        _this.refCollection[index] = ref;
      });

      _defineProperty(_assertThisInitialized(_this), "childKeyHandler", function (index, position) {
        (0, _util.keyHandler)(index, position, _this.refCollection, _this.props.isGrouped ? _this.refCollection : _this.props.children);
      });

      return _this;
    }

    _createClass(CheckboxSelect, [{
      key: "extendChildren",
      value: function extendChildren(props) {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            isGrouped = _this$props.isGrouped,
            checked = _this$props.checked;
        var ariaLabel = props['aria-label'],
            ariaLabelledBy = props['aria-labelledby'];

        if (isGrouped) {
          var index = 0;
          return _react2["default"].Children.map(children, function (group) {
            return _react2["default"].cloneElement(group, {
              titleId: group.props.label.replace(/\W/g, '-'),
              children: _react2["default"].createElement("fieldset", {
                "aria-labelledby": group.props.label.replace(/\W/g, '-'),
                className: (0, _reactStyles.css)(_formCss2["default"].formFieldset)
              }, group.props.children.map(function (option) {
                return _react2["default"].cloneElement(option, {
                  isChecked: checked && checked.includes(option.props.value),
                  sendRef: _this2.sendRef,
                  keyHandler: _this2.childKeyHandler,
                  index: index++
                });
              }))
            });
          });
        }

        return _react2["default"].createElement("fieldset", _extends({}, props, {
          "aria-label": ariaLabel,
          "aria-labelledby": !ariaLabel && ariaLabelledBy || null,
          className: (0, _reactStyles.css)(_formCss2["default"].formFieldset)
        }), _react2["default"].Children.map(children, function (child, index) {
          return _react2["default"].cloneElement(child, {
            isChecked: checked && checked.includes(child.props.value),
            sendRef: _this2.sendRef,
            keyHandler: _this2.childKeyHandler,
            index: index
          });
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            isExpanded = _this$props2.isExpanded,
            checked = _this$props2.checked,
            isGrouped = _this$props2.isGrouped,
            props = _objectWithoutProperties(_this$props2, ["children", "className", "isExpanded", "checked", "isGrouped"]);

        this.renderedChildren = this.extendChildren(props);
        return _react2["default"].createElement(_focusTrapReact2["default"], {
          focusTrapOptions: {
            clickOutsideDeactivates: true
          }
        }, _react2["default"].createElement("div", {
          className: (0, _reactStyles.css)(_selectCss2["default"].selectMenu, className)
        }, _react2["default"].createElement("form", {
          noValidate: true,
          className: (0, _reactStyles.css)(_formCss2["default"].form)
        }, _react2["default"].createElement("div", {
          className: (0, _reactStyles.css)(_formCss2["default"].formGroup)
        }, this.renderedChildren))));
      }
    }]);

    return CheckboxSelect;
  }(_react2["default"].Component);

  CheckboxSelect.propTypes = propTypes;
  CheckboxSelect.defaultProps = defaultProps;
  exports["default"] = CheckboxSelect;
});