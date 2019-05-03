"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactCore);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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
    formValue: _propTypes2["default"].string,
    isFormValid: _propTypes2["default"].bool,
    goToStep: _propTypes2["default"].func,
    currentStep: _propTypes2["default"].number
  };
  var defaultProps = {
    formValue: '',
    isFormValid: false,
    goToStep: null,
    currentStep: null
  };

  var SampleForm =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(SampleForm, _React$Component);

    function SampleForm() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SampleForm);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SampleForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: _this.props.formValue,
        isValid: _this.props.isFormValid
      });

      _defineProperty(_assertThisInitialized(_this), "handleTextInputChange", function (value) {
        var isValid = /^\d+$/.test(value);

        _this.setState({
          value: value,
          isValid: isValid
        });

        _this.props.onChange && _this.props.onChange(isValid, value);
      });

      return _this;
    }

    _createClass(SampleForm, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            value = _this$state.value,
            isValid = _this$state.isValid;
        var _this$props = this.props,
            formValue = _this$props.formValue,
            isFormValid = _this$props.isFormValid,
            goToStep = _this$props.goToStep,
            currentStep = _this$props.currentStep;
        return _react2["default"].createElement(_reactCore.Form, null, _react2["default"].createElement(_reactCore.FormGroup, {
          label: "Age:",
          type: "number",
          helperText: "Please write your age",
          helperTextInvalid: "Age has to be a number",
          fieldId: "age",
          isValid: isValid
        }, _react2["default"].createElement(_reactCore.TextInput, {
          isValid: isValid,
          value: value,
          id: "age",
          "aria-describedby": "age-helper",
          onChange: this.handleTextInputChange
        })));
      }
    }]);

    return SampleForm;
  }(_react2["default"].Component);

  _defineProperty(SampleForm, "propTypes", propTypes);

  _defineProperty(SampleForm, "defaultProps", defaultProps);

  exports["default"] = SampleForm;
});