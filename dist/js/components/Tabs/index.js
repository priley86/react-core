"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab["default"];
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs["default"];
  }
});
Object.defineProperty(exports, "TabsVariant", {
  enumerable: true,
  get: function get() {
    return _Tabs.TabsVariant;
  }
});
Object.defineProperty(exports, "TabContent", {
  enumerable: true,
  get: function get() {
    return _TabContent["default"];
  }
});

var _Tab = _interopRequireDefault(require("./Tab"));

var _Tabs = _interopRequireWildcard(require("./Tabs"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }