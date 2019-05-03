"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorItem", "./ContextSelectorMenuList"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorItem"), require("./ContextSelectorMenuList"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorItem, global.ContextSelectorMenuList);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ContextSelectorItem, _ContextSelectorMenuList) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ContextSelectorItem2 = _interopRequireDefault(_ContextSelectorItem);

  var _ContextSelectorMenuList2 = _interopRequireDefault(_ContextSelectorMenuList);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var items = [_react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "0"
  }, "My Project"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "1"
  }, "OpenShift Cluster"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "2"
  }, "Production Ansible"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "3"
  }, "AWS"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "4"
  }, "Azure")];
  test('Renders ContextSelectorMenuList open', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelectorMenuList2["default"], {
      isOpen: true,
      openedOnEnter: false
    }, items));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelectorMenuList closed', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelectorMenuList2["default"], {
      openedOnEnter: false
    }, items));
    expect(view).toMatchSnapshot();
  });
});