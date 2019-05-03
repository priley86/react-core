"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Nav", "./NavList", "./NavGroup", "./NavItem", "./NavExpandable"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Nav"), require("./NavList"), require("./NavGroup"), require("./NavItem"), require("./NavExpandable"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Nav, global.NavList, global.NavGroup, global.NavItem, global.NavExpandable);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Nav, _NavList, _NavGroup, _NavItem, _NavExpandable) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Nav2 = _interopRequireDefault(_Nav);

  var _NavList2 = _interopRequireDefault(_NavList);

  var _NavGroup2 = _interopRequireDefault(_NavGroup);

  var _NavItem2 = _interopRequireDefault(_NavItem);

  var _NavExpandable2 = _interopRequireDefault(_NavExpandable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var props = {
    items: [{
      to: '#link1',
      label: 'Link 1'
    }, {
      to: '#link2',
      label: 'Link 2'
    }, {
      to: '#link3',
      label: 'Link 3'
    }, {
      to: '#link4',
      label: 'Link 4'
    }]
  };
  beforeEach(function () {
    window.location.hash = '#link1';
  });
  var context = {
    onSelect: function onSelect() {
      return undefined;
    },
    onToggle: function onToggle() {
      return undefined;
    }
  };
  test('Default Nav List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], null, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    }))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Default Nav List - Trigger item active update', function () {
    window.location.hash = '#link2';
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], null, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    }))), {
      context: context
    });
    view.find({
      href: '#link2'
    }).first().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('Simple Nav List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], {
      variant: "simple"
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    }))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], null, _react2["default"].createElement(_NavExpandable2["default"], {
      id: "grp-1",
      title: "Section 1"
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    })))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List - Trigger toggle', function () {
    window.location.hash = '#link2';
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], null, _react2["default"].createElement(_NavExpandable2["default"], {
      id: "grp-1",
      title: "Section 1",
      className: "expandable-group",
      isExpanded: true
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    })))), {
      context: context
    });
    view.find('li.expandable-group').first().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List with aria label', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], {
      "aria-label": "Test"
    }, _react2["default"].createElement(_NavList2["default"], null, _react2["default"].createElement(_NavExpandable2["default"], {
      id: "grp-1",
      title: "Section 1",
      srText: "Section 1 - Example sub-navigation"
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    })))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Nav Grouped List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavGroup2["default"], {
      id: "grp-1",
      title: "Section 1"
    }, _react2["default"].createElement(_NavList2["default"], null, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: "section1_".concat(item.to)
      }, item.label);
    }))), _react2["default"].createElement(_NavGroup2["default"], {
      id: "grp-2",
      title: "Section 2"
    }, _react2["default"].createElement(_NavList2["default"], null, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: "section2_".concat(item.to)
      }, item.label);
    })))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Horizontal Nav List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], {
      variant: "horizontal"
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    }))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Tertiary Nav List', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], {
      variant: "tertiary"
    }, props.items.map(function (item) {
      return _react2["default"].createElement(_NavItem2["default"], {
        to: item.to,
        key: item.to
      }, item.label);
    }))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
  test('Nav List with custom item nodes', function () {
    var CustomNode = function CustomNode() {
      return _react2["default"].createElement("div", null, "My custom node");
    };

    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Nav2["default"], null, _react2["default"].createElement(_NavList2["default"], {
      variant: "tertiary"
    }, _react2["default"].createElement(_NavItem2["default"], {
      to: "/components/nav#link1"
    }, _react2["default"].createElement(CustomNode, null)))), {
      context: context
    });
    expect(view).toMatchSnapshot();
  });
});