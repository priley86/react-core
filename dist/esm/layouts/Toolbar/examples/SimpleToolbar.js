function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

var SimpleToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleToolbar, _React$Component);

  function SimpleToolbar() {
    _classCallCheck(this, SimpleToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleToolbar).apply(this, arguments));
  }

  _createClass(SimpleToolbar, [{
    key: "render",
    value: function render() {
      return React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 2"), React.createElement(ToolbarItem, null, "Item 3")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4")));
    }
  }]);

  return SimpleToolbar;
}(React.Component);

export default SimpleToolbar;