"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCore = require("@patternfly/react-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TooltipPositions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TooltipPositions, _React$Component);

  function TooltipPositions(props) {
    var _this;

    _classCallCheck(this, TooltipPositions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TooltipPositions).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleKeepInViewChange", function (checked) {
      _this.setState({
        keepInViewChecked: checked
      });
    });

    _this.state = {
      position: _reactCore.TooltipPosition.top,
      keepInViewChecked: true
    };
    return _this;
  }

  _createClass(TooltipPositions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("span", {
        style: {
          paddingRight: '10px'
        }
      }, "Tooltip Position"), _react["default"].createElement("select", {
        onChange: function onChange(event) {
          _this2.setState({
            position: event.target.value
          });
        }
      }, Object.keys(_reactCore.TooltipPosition).map(function (key) {
        return _react["default"].createElement("option", {
          key: key,
          value: _reactCore.TooltipPosition[key]
        }, _reactCore.TooltipPosition[key]);
      })), _react["default"].createElement(_reactCore.Checkbox, {
        label: "Flip tooltip if the position falls outside the view",
        isChecked: this.state.keepInViewChecked,
        onChange: this.handleKeepInViewChange,
        "aria-label": "Keep in view",
        id: "check-3"
      })), _react["default"].createElement("div", {
        style: {
          margin: '50px'
        }
      }, _react["default"].createElement(_reactCore.Tooltip, {
        position: this.state.position,
        enableFlip: this.state.keepInViewChecked,
        content: _react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
      }, _react["default"].createElement("span", null, "I have a tooltip!"))));
    }
  }]);

  return TooltipPositions;
}(_react["default"].Component);

var _default = TooltipPositions;
exports["default"] = _default;