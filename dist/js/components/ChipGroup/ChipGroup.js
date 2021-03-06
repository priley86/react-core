"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chipGroupCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js"));

var _reactCore = require("@patternfly/react-core");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      return _react["default"].createElement(InnerChipGroup, _extends({}, this.props, {
        isOpen: isOpen,
        onToggleCollapse: this.toggleCollapse
      }));
    }
  }, {
    key: "renderChipGroup",
    value: function renderChipGroup() {
      var className = this.props.className;
      var isOpen = this.state.isOpen;
      return _react["default"].createElement("ul", {
        className: (0, _reactStyles.css)(_chipGroupCss["default"].chipGroup, className)
      }, _react["default"].createElement(InnerChipGroup, _extends({}, this.props, {
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

      if (_react["default"].Children.count(children)) {
        return withToolbar ? this.renderToolbarGroup() : this.renderChipGroup();
      }

      return null;
    }
  }]);

  return ChipGroup;
}(_react["default"].Component);

var InnerChipGroup = function InnerChipGroup(props) {
  var children = props.children,
      expandedText = props.expandedText,
      isOpen = props.isOpen,
      onToggleCollapse = props.onToggleCollapse,
      collapsedText = props.collapsedText,
      withToolbar = props.withToolbar;
  var collapsedTextResult = (0, _helpers.fillTemplate)(collapsedText, {
    remaining: _react["default"].Children.count(children) - 1
  });

  var mappedChildren = _react["default"].Children.map(children, function (child) {
    if (withToolbar) return _react["default"].cloneElement(child, {
      children: child.props.children.map(function (chip) {
        return _react["default"].cloneElement(chip, {
          component: 'li'
        });
      })
    });
    return _react["default"].cloneElement(child, {
      component: 'li'
    });
  });

  return _react["default"].createElement(_react["default"].Fragment, null, isOpen ? _react["default"].createElement(_react["default"].Fragment, null, mappedChildren) : _react["default"].createElement(_react["default"].Fragment, null, mappedChildren.map(function (child, i) {
    if (i === 0) return child;
  })), _react["default"].Children.count(children) > 1 && _react["default"].createElement(_reactCore.Chip, {
    isOverflowChip: true,
    onClick: onToggleCollapse,
    component: withToolbar ? 'div' : 'li'
  }, isOpen ? expandedText : collapsedTextResult));
};

ChipGroup.propTypes = {
  /** Content rendered inside the chip text */
  children: _propTypes["default"].node,

  /** Additional classes added to the chip item */
  className: _propTypes["default"].string,

  /** Customizable "Show Less" text string */
  expandedText: _propTypes["default"].string,

  /**
   * Customizeable template string. Use variable "${remaining}" for the overflow chip count.
   */
  collapsedText: _propTypes["default"].string,

  /** Flag for grouping with a toolbar & category name */
  withToolbar: _propTypes["default"].bool
};
ChipGroup.defaultProps = {
  children: null,
  className: '',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
  withToolbar: false
};
var _default = ChipGroup;
exports["default"] = _default;