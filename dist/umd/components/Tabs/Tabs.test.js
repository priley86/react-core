"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Tabs", "./Tab"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Tabs"), require("./Tab"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Tabs, global.Tab);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Tabs, _Tab) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Tabs2 = _interopRequireDefault(_Tabs);

  var _Tab2 = _interopRequireDefault(_Tab);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('should render simple tabs', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Tabs2["default"], {
      id: "simpleTabs"
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    expect(view).toMatchSnapshot();
  });
  test('should render accessible tabs', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Tabs2["default"], {
      id: "accessibleTabs",
      "aria-label": "accessible Tabs example",
      variant: "nav"
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1",
      href: "#/items/1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2",
      href: "#/items/2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3",
      href: "#/items/3"
    }, "Tab 3 section")));
    expect(view).toMatchSnapshot();
  });
  test('should render filled tabs', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Tabs2["default"], {
      id: "filledTabs",
      isFilled: true
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    expect(view).toMatchSnapshot();
  });
  test('should render secondary tabs', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Tabs2["default"], {
      id: "primaryTabs"
    }, _react2["default"].createElement(_Tab2["default"], {
      eventKey: 0,
      title: "Tab item 1"
    }, _react2["default"].createElement(_Tabs2["default"], {
      id: "secondaryTabs"
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "secondary tab1",
      eventKey: 10,
      title: "Secondary Tab 1"
    }, "Secondary Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "secondary tab2",
      eventKey: 11,
      title: "Secondary Tab 2"
    }, "Secondary Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "secondary tab3",
      eventKey: 12,
      title: "Secondary Tab 3"
    }, "Secondary Tab 3 section"))), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    expect(view).toMatchSnapshot();
  });
  test('should call scrollLeft tabs with scrolls', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Tabs2["default"], {
      id: "scrollLeft",
      isFilled: true
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    view.find('.pf-c-tabs__scroll-button').first().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('should call scrollRight tabs with scrolls', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Tabs2["default"], {
      id: "scrollRight",
      isFilled: true
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    view.find('.pf-c-tabs__scroll-button').last().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('should call handleScrollButtons tabs with scrolls', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Tabs2["default"], {
      id: "handleScrollButtons",
      isFilled: true
    }, _react2["default"].createElement(_Tab2["default"], {
      id: "tab1",
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab2",
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), _react2["default"].createElement(_Tab2["default"], {
      id: "tab3",
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
    view.simulate('scroll');
    expect(view).toMatchSnapshot();
  });
});