"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _Tab = _interopRequireDefault(require("./Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('should render simple tabs', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tabs["default"], {
    id: "simpleTabs"
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render accessible tabs', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tabs["default"], {
    id: "accessibleTabs",
    "aria-label": "accessible Tabs example",
    variant: "nav"
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1",
    href: "#/items/1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2",
    href: "#/items/2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3",
    href: "#/items/3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render filled tabs', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tabs["default"], {
    id: "filledTabs",
    isFilled: true
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render secondary tabs', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tabs["default"], {
    id: "primaryTabs"
  }, _react["default"].createElement(_Tab["default"], {
    eventKey: 0,
    title: "Tab item 1"
  }, _react["default"].createElement(_Tabs["default"], {
    id: "secondaryTabs"
  }, _react["default"].createElement(_Tab["default"], {
    id: "secondary tab1",
    eventKey: 10,
    title: "Secondary Tab 1"
  }, "Secondary Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "secondary tab2",
    eventKey: 11,
    title: "Secondary Tab 2"
  }, "Secondary Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "secondary tab3",
    eventKey: 12,
    title: "Secondary Tab 3"
  }, "Secondary Tab 3 section"))), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should call scrollLeft tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs["default"], {
    id: "scrollLeft",
    isFilled: true
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call scrollRight tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs["default"], {
    id: "scrollRight",
    isFilled: true
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').last().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call handleScrollButtons tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs["default"], {
    id: "handleScrollButtons",
    isFilled: true
  }, _react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab["default"], {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.simulate('scroll');
  expect(view).toMatchSnapshot();
});