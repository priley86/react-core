"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Nav = _interopRequireDefault(require("./Nav"));

var _NavList = _interopRequireDefault(require("./NavList"));

var _NavGroup = _interopRequireDefault(require("./NavGroup"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavExpandable = _interopRequireDefault(require("./NavExpandable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], null, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
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
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], null, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
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
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], {
    variant: "simple"
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], null, _react["default"].createElement(_NavExpandable["default"], {
    id: "grp-1",
    title: "Section 1"
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
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
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], null, _react["default"].createElement(_NavExpandable["default"], {
    id: "grp-1",
    title: "Section 1",
    className: "expandable-group",
    isExpanded: true
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
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
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], {
    "aria-label": "Test"
  }, _react["default"].createElement(_NavList["default"], null, _react["default"].createElement(_NavExpandable["default"], {
    id: "grp-1",
    title: "Section 1",
    srText: "Section 1 - Example sub-navigation"
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
      to: item.to,
      key: item.to
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Nav Grouped List', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavGroup["default"], {
    id: "grp-1",
    title: "Section 1"
  }, _react["default"].createElement(_NavList["default"], null, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
      to: item.to,
      key: "section1_".concat(item.to)
    }, item.label);
  }))), _react["default"].createElement(_NavGroup["default"], {
    id: "grp-2",
    title: "Section 2"
  }, _react["default"].createElement(_NavList["default"], null, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
      to: item.to,
      key: "section2_".concat(item.to)
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Horizontal Nav List', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], {
    variant: "horizontal"
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Tertiary Nav List', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], {
    variant: "tertiary"
  }, props.items.map(function (item) {
    return _react["default"].createElement(_NavItem["default"], {
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
    return _react["default"].createElement("div", null, "My custom node");
  };

  var view = (0, _enzyme.mount)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement(_NavList["default"], {
    variant: "tertiary"
  }, _react["default"].createElement(_NavItem["default"], {
    to: "/components/nav#link1"
  }, _react["default"].createElement(CustomNode, null)))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});