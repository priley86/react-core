"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./SpanSlider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./SpanSlider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.SpanSlider);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _SpanSlider) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _SpanSlider2 = _interopRequireDefault(_SpanSlider);

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

  var StringOrNumber = _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]);

  var propTypes = {
    id: _propTypes2["default"].number.isRequired,
    span: StringOrNumber.isRequired,
    offset: StringOrNumber.isRequired,
    rowSpan: StringOrNumber.isRequired,
    onUpdateItem: _propTypes2["default"].func.isRequired
  };

  var ItemControl =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ItemControl, _React$Component);

    function ItemControl() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ItemControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItemControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleSpanChange", function (event) {
        var _this$props = _this.props,
            id = _this$props.id,
            onUpdateItem = _this$props.onUpdateItem;
        onUpdateItem(id, {
          span: event.currentTarget.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleOffsetChange", function (event) {
        var _this$props2 = _this.props,
            id = _this$props2.id,
            onUpdateItem = _this$props2.onUpdateItem;
        onUpdateItem(id, {
          offset: event.currentTarget.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleRowSpanChange", function (event) {
        var _this$props3 = _this.props,
            id = _this$props3.id,
            onUpdateItem = _this$props3.onUpdateItem;
        onUpdateItem(id, {
          rowSpan: event.currentTarget.value
        });
      });

      return _this;
    }

    _createClass(ItemControl, [{
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            id = _this$props4.id,
            span = _this$props4.span,
            offset = _this$props4.offset,
            rowSpan = _this$props4.rowSpan;
        return _react2["default"].createElement("div", null, _react2["default"].createElement("div", null, id), _react2["default"].createElement(_SpanSlider2["default"], {
          id: "grid-item-".concat(id, "-span"),
          label: "Span",
          value: span,
          onChange: this.handleSpanChange
        }), _react2["default"].createElement(_SpanSlider2["default"], {
          id: "grid-item-".concat(id, "-row-span"),
          label: "Row Span",
          min: 1,
          value: rowSpan,
          onChange: this.handleRowSpanChange
        }), _react2["default"].createElement(_SpanSlider2["default"], {
          id: "grid-item-".concat(id, "-offset"),
          label: "Offset",
          min: 0,
          value: offset,
          onChange: this.handleOffsetChange
        }));
      }
    }]);

    return ItemControl;
  }(_react2["default"].Component);

  _defineProperty(ItemControl, "propTypes", propTypes);

  exports["default"] = ItemControl;
});