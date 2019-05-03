"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCore = require("@patternfly/react-core");

var _ItemControl = _interopRequireDefault(require("./ItemControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GridPlayground =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridPlayground, _React$Component);

  function GridPlayground(props) {
    var _this;

    _classCallCheck(this, GridPlayground);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GridPlayground).call(this, props));
    _this.currentId = 1;
    _this.state = {
      gridItems: [_this.createGridItem(), _this.createGridItem(), _this.createGridItem(), _this.createGridItem()]
    };

    _this.handleAddGridItem = function () {
      _this.setState(function (_ref) {
        var gridItems = _ref.gridItems;
        return {
          gridItems: [].concat(_toConsumableArray(gridItems), [_this.createGridItem()])
        };
      });
    };

    _this.handleGridItemUpdate = function (id, updates) {
      var index = _this.state.gridItems.findIndex(function (i) {
        return i.id === id;
      });

      var updatedItem = _objectSpread({}, _this.state.gridItems[index], updates);

      _this.setState({
        gridItems: [].concat(_toConsumableArray(_this.state.gridItems.slice(0, index)), [updatedItem], _toConsumableArray(_this.state.gridItems.slice(index + 1)))
      });
    };

    return _this;
  }

  _createClass(GridPlayground, [{
    key: "createGridItem",
    value: function createGridItem() {
      return {
        id: this.currentId++,
        span: 3,
        rowSpan: 1,
        offset: 1
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactCore.Grid, {
        gutter: "md"
      }, _react["default"].createElement(_reactCore.GridItem, {
        span: 9
      }, _react["default"].createElement(_reactCore.Grid, {
        gutter: "sm"
      }, this.state.gridItems.map(function (_ref2) {
        var id = _ref2.id,
            span = _ref2.span,
            rowSpan = _ref2.rowSpan,
            offset = _ref2.offset;
        return _react["default"].createElement(_reactCore.GridItem, {
          key: id,
          span: +span,
          rowSpan: +rowSpan,
          offset: +offset
        }, id);
      }))), _react["default"].createElement(_reactCore.GridItem, {
        span: 3
      }, _react["default"].createElement(_reactCore.Button, {
        isBlock: true,
        onClick: this.handleAddGridItem
      }, "Add Item"), _react["default"].createElement("div", null, this.state.gridItems.map(function (item) {
        return _react["default"].createElement(_ItemControl["default"], {
          key: item.id,
          id: item.id,
          span: +item.span,
          rowSpan: +item.rowSpan,
          offset: +item.offset,
          onUpdateItem: _this2.handleGridItemUpdate
        });
      }))));
    }
  }]);

  return GridPlayground;
}(_react["default"].Component);

exports["default"] = GridPlayground;