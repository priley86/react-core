"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js", "@patternfly/react-core", "../../helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js"), require("@patternfly/react-core"), require("../../helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.chipGroupCss, global.reactCore, global.helpers);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _chipGroupCss, _reactCore, _helpers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _chipGroupCss2 = _interopRequireDefault(_chipGroupCss);

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

  var ChipGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ChipGroup, _React$Component);

    function ChipGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ChipGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChipGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        isOpen: false
      });

      _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function () {
        _this.setState(function (prevState) {
          return {
            isOpen: !prevState.isOpen
          };
        });
      });

      return _this;
    }

    _createClass(ChipGroup, [{
      key: "renderToolbarGroup",
      value: function renderToolbarGroup() {
        var isOpen = this.state.isOpen;
        return _react2["default"].createElement(InnerChipGroup, _extends({}, this.props, {
          isOpen: isOpen,
          onToggleCollapse: this.toggleCollapse
        }));
      }
    }, {
      key: "renderChipGroup",
      value: function renderChipGroup() {
        var className = this.props.className;
        var isOpen = this.state.isOpen;
        return _react2["default"].createElement("ul", {
          className: (0, _reactStyles.css)(_chipGroupCss2["default"].chipGroup, className)
        }, _react2["default"].createElement(InnerChipGroup, _extends({}, this.props, {
          isOpen: isOpen,
          onToggleCollapse: this.toggleCollapse
        })));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            withToolbar = _this$props.withToolbar,
            children = _this$props.children;

        if (_react2["default"].Children.count(children)) {
          return withToolbar ? this.renderToolbarGroup() : this.renderChipGroup();
        }

        return null;
      }
    }]);

    return ChipGroup;
  }(_react2["default"].Component);

  var InnerChipGroup = function InnerChipGroup(props) {
    var children = props.children,
        expandedText = props.expandedText,
        isOpen = props.isOpen,
        onToggleCollapse = props.onToggleCollapse,
        collapsedText = props.collapsedText,
        withToolbar = props.withToolbar;
    var collapsedTextResult = (0, _helpers.fillTemplate)(collapsedText, {
      remaining: _react2["default"].Children.count(children) - 1
    });

    var mappedChildren = _react2["default"].Children.map(children, function (child) {
      if (withToolbar) return _react2["default"].cloneElement(child, {
        children: child.props.children.map(function (chip) {
          return _react2["default"].cloneElement(chip, {
            component: 'li'
          });
        })
      });
      return _react2["default"].cloneElement(child, {
        component: 'li'
      });
    });

    return _react2["default"].createElement(_react2["default"].Fragment, null, isOpen ? _react2["default"].createElement(_react2["default"].Fragment, null, mappedChildren) : _react2["default"].createElement(_react2["default"].Fragment, null, mappedChildren.map(function (child, i) {
      if (i === 0) return child;
    })), _react2["default"].Children.count(children) > 1 && _react2["default"].createElement(_reactCore.Chip, {
      isOverflowChip: true,
      onClick: onToggleCollapse,
      component: withToolbar ? 'div' : 'li'
    }, isOpen ? expandedText : collapsedTextResult));
  };

  ChipGroup.propTypes = {
    /** Content rendered inside the chip text */
    children: _propTypes2["default"].node,

    /** Additional classes added to the chip item */
    className: _propTypes2["default"].string,

    /** Customizable "Show Less" text string */
    expandedText: _propTypes2["default"].string,

    /**
     * Customizeable template string. Use variable "${remaining}" for the overflow chip count.
     */
    collapsedText: _propTypes2["default"].string,

    /** Flag for grouping with a toolbar & category name */
    withToolbar: _propTypes2["default"].bool
  };
  ChipGroup.defaultProps = {
    children: null,
    className: '',
    expandedText: 'Show Less',
    collapsedText: '${remaining} more',
    withToolbar: false
  };
  exports["default"] = ChipGroup;
});