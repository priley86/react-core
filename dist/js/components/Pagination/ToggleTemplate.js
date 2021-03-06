"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var propTypes = {
  firstIndex: _propTypes["default"].number,
  lastIndex: _propTypes["default"].number,
  itemCount: _propTypes["default"].number,
  itemsTitle: _propTypes["default"].string
};
var defaultProps = {
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  itemsTitle: 'items'
};

var ToggleTemplate = function ToggleTemplate(_ref) {
  var firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      itemCount = _ref.itemCount,
      itemsTitle = _ref.itemsTitle;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("strong", null, firstIndex, " - ", lastIndex), " of ", _react["default"].createElement("strong", null, itemCount), " ", itemsTitle);
};

ToggleTemplate.propTypes = propTypes;
ToggleTemplate.defaultProps = defaultProps;
var _default = ToggleTemplate;
exports["default"] = _default;