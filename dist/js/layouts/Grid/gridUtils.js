"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetModifier = exports.getRowSpanModifier = exports.getGridSpanModifier = exports.getSpanModifier = exports.getSizeSuffix = exports.getOffsetKey = exports.getRowSpanKey = exports.gridSpans = void 0;

var _gridCss = _interopRequireDefault(require("../../@patternfly/patternfly/layouts/Grid/grid.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gridSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
exports.gridSpans = gridSpans;

var getRowSpanKey = function getRowSpanKey(size) {
  return "".concat(size, "RowSpan");
};

exports.getRowSpanKey = getRowSpanKey;

var getOffsetKey = function getOffsetKey(size) {
  return "".concat(size, "Offset");
};

exports.getOffsetKey = getOffsetKey;

var getSizeSuffix = function getSizeSuffix(size) {
  return size ? "-on-".concat(size) : '';
};

exports.getSizeSuffix = getSizeSuffix;

var getSpanModifier = function getSpanModifier(value, size) {
  return (0, _reactStyles.getModifier)(_gridCss["default"], "".concat(value, "-col").concat(getSizeSuffix(size)));
};

exports.getSpanModifier = getSpanModifier;

var getGridSpanModifier = function getGridSpanModifier(value, size) {
  return (0, _reactStyles.getModifier)(_gridCss["default"], "-all-".concat(value, "-col").concat(getSizeSuffix(size)));
};

exports.getGridSpanModifier = getGridSpanModifier;

var getRowSpanModifier = function getRowSpanModifier(value, size) {
  return (0, _reactStyles.getModifier)(_gridCss["default"], "".concat(value, "-row").concat(getSizeSuffix(size)));
};

exports.getRowSpanModifier = getRowSpanModifier;

var getOffsetModifier = function getOffsetModifier(value, size) {
  return (0, _reactStyles.getModifier)(_gridCss["default"], "offset-".concat(value, "-col").concat(getSizeSuffix(size)));
};

exports.getOffsetModifier = getOffsetModifier;