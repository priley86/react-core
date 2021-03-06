"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/ContextSelector/context-selector.css.js", "@patternfly/react-styles", "prop-types", "focus-trap-react", "./ContextSelectorToggle", "./ContextSelectorMenuList", "./contextSelectorConstants", "../Button", "../TextInput", "@patternfly/react-icons", "../InputGroup", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/ContextSelector/context-selector.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("focus-trap-react"), require("./ContextSelectorToggle"), require("./ContextSelectorMenuList"), require("./contextSelectorConstants"), require("../Button"), require("../TextInput"), require("@patternfly/react-icons"), require("../InputGroup"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.contextSelectorCss, global.reactStyles, global.propTypes, global.focusTrapReact, global.ContextSelectorToggle, global.ContextSelectorMenuList, global.contextSelectorConstants, global.Button, global.TextInput, global.reactIcons, global.InputGroup, global.constants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _contextSelectorCss, _reactStyles, _propTypes, _focusTrapReact, _ContextSelectorToggle, _ContextSelectorMenuList, _contextSelectorConstants, _Button, _TextInput, _reactIcons, _InputGroup, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _contextSelectorCss2 = _interopRequireDefault(_contextSelectorCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

  var _ContextSelectorToggle2 = _interopRequireDefault(_ContextSelectorToggle);

  var _ContextSelectorMenuList2 = _interopRequireDefault(_ContextSelectorMenuList);

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

  // seed for the aria-labelledby ID
  var currentId = 0;
  var newId = currentId++;
  var propTypes = {
    /** content rendered inside the Context Selector */
    children: _propTypes2["default"].node,

    /** Classes applied to root element of Context Selector */
    className: _propTypes2["default"].string,

    /** Flag to indicate if Context Selector is opened */
    isOpen: _propTypes2["default"].bool,

    /** Function callback called when user clicks toggle button */
    onToggle: _propTypes2["default"].func,

    /** Function callback called when user selects item */
    onSelect: _propTypes2["default"].func,

    /** Labels the Context Selector for Screen Readers */
    screenReaderLabel: _propTypes2["default"].string,

    /** Text that appears in the Context Selector Toggle */
    toggleText: _propTypes2["default"].string,

    /** aria-label for the Context Selector Search Button */
    searchButtonAriaLabel: _propTypes2["default"].string,

    /** Value in the Search field */
    searchInputValue: _propTypes2["default"].string,

    /** Function callback called when user changes the Search Input */
    onSearchInputChange: _propTypes2["default"].func,

    /** Search Input placeholder */
    searchInputPlaceholder: _propTypes2["default"].string,

    /** Function callback for when Search Button is clicked */
    onSearchButtonClick: _propTypes2["default"].func
  };
  var defaultProps = {
    children: null,
    className: '',
    isOpen: false,
    onToggle: function onToggle() {},
    onSelect: function onSelect() {},
    screenReaderLabel: '',
    toggleText: '',
    searchButtonAriaLabel: 'Search menu items',
    searchInputValue: '',
    onSearchInputChange: function onSearchInputChange() {},
    searchInputPlaceholder: 'Search',
    onSearchButtonClick: function onSearchButtonClick() {}
  };

  var ContextSelector =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ContextSelector, _React$Component);

    function ContextSelector() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ContextSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "parentRef", _react2["default"].createRef());

      _defineProperty(_assertThisInitialized(_this), "onEnterPressed", function (event) {
        if (event.charCode === _constants.KEY_CODES.ENTER) {
          _this.props.onSearchButtonClick();
        }
      });

      return _this;
    }

    _createClass(ContextSelector, [{
      key: "render",
      value: function render() {
        var toggleId = "pf-context-selector-toggle-id-".concat(newId);
        var screenReaderLabelId = "pf-context-selector-label-id-".concat(newId);
        var searchButtonId = "pf-context-selector-search-button-id-".concat(newId);

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            isOpen = _this$props.isOpen,
            onToggle = _this$props.onToggle,
            onSelect = _this$props.onSelect,
            screenReaderLabel = _this$props.screenReaderLabel,
            toggleText = _this$props.toggleText,
            searchButtonAriaLabel = _this$props.searchButtonAriaLabel,
            searchInputValue = _this$props.searchInputValue,
            onSearchInputChange = _this$props.onSearchInputChange,
            searchInputPlaceholder = _this$props.searchInputPlaceholder,
            onSearchButtonClick = _this$props.onSearchButtonClick,
            props = _objectWithoutProperties(_this$props, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick"]);

        return _react2["default"].createElement("div", _extends({
          className: (0, _reactStyles.css)(_contextSelectorCss2["default"].contextSelector, isOpen && _contextSelectorCss2["default"].modifiers.expanded, className),
          ref: this.parentRef
        }, props), screenReaderLabel && _react2["default"].createElement("span", {
          id: screenReaderLabelId,
          hidden: true
        }, screenReaderLabel), _react2["default"].createElement(_ContextSelectorToggle2["default"], {
          onToggle: onToggle,
          isOpen: isOpen,
          toggleText: toggleText,
          id: toggleId,
          parentRef: this.parentRef.current,
          "aria-labelledby": "".concat(screenReaderLabelId, " ").concat(toggleId)
        }), isOpen && _react2["default"].createElement("div", {
          className: (0, _reactStyles.css)(_contextSelectorCss2["default"].contextSelectorMenu)
        }, isOpen && _react2["default"].createElement(_focusTrapReact2["default"], {
          focusTrapOptions: {
            clickOutsideDeactivates: true
          }
        }, _react2["default"].createElement("div", {
          className: (0, _reactStyles.css)(_contextSelectorCss2["default"].contextSelectorMenuInput)
        }, _react2["default"].createElement(_InputGroup.InputGroup, null, _react2["default"].createElement(_TextInput.TextInput, {
          value: searchInputValue,
          type: "search",
          placeholder: searchInputPlaceholder,
          onChange: onSearchInputChange,
          onKeyPress: this.onEnterPressed,
          "aria-labelledby": searchButtonId
        }), _react2["default"].createElement(_Button.Button, {
          variant: _Button.ButtonVariant.tertiary,
          "aria-label": searchButtonAriaLabel,
          id: searchButtonId,
          onClick: onSearchButtonClick
        }, _react2["default"].createElement(_reactIcons.SearchIcon, {
          "aria-hidden": "true"
        })))), _react2["default"].createElement(_contextSelectorConstants.ContextSelectorContext.Provider, {
          value: {
            onSelect: onSelect
          }
        }, _react2["default"].createElement(_ContextSelectorMenuList2["default"], {
          isOpen: isOpen
        }, children)))));
      }
    }]);

    return ContextSelector;
  }(_react2["default"].Component);

  ContextSelector.propTypes = propTypes;
  ContextSelector.defaultProps = defaultProps;
  exports["default"] = ContextSelector;
});