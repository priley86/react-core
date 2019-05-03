import React from 'react';
import { mount } from 'enzyme';
import Nav from './Nav';
import NavList from './NavList';
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import NavExpandable from './NavExpandable';
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
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, null, props.items.map(function (item) {
    return React.createElement(NavItem, {
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
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, null, props.items.map(function (item) {
    return React.createElement(NavItem, {
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
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "simple"
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List', function () {
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1"
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
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
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    className: "expandable-group",
    isExpanded: true
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
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
  var view = mount(React.createElement(Nav, {
    "aria-label": "Test"
  }, React.createElement(NavList, null, React.createElement(NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    srText: "Section 1 - Example sub-navigation"
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Nav Grouped List', function () {
  var view = mount(React.createElement(Nav, null, React.createElement(NavGroup, {
    id: "grp-1",
    title: "Section 1"
  }, React.createElement(NavList, null, props.items.map(function (item) {
    return React.createElement(NavItem, {
      to: item.to,
      key: "section1_".concat(item.to)
    }, item.label);
  }))), React.createElement(NavGroup, {
    id: "grp-2",
    title: "Section 2"
  }, React.createElement(NavList, null, props.items.map(function (item) {
    return React.createElement(NavItem, {
      to: item.to,
      key: "section2_".concat(item.to)
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Horizontal Nav List', function () {
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "horizontal"
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Tertiary Nav List', function () {
  var view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "tertiary"
  }, props.items.map(function (item) {
    return React.createElement(NavItem, {
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
    return React.createElement("div", null, "My custom node");
  };

  var view = mount(React.createElement(Nav, null, React.createElement(NavList, {
    variant: "tertiary"
  }, React.createElement(NavItem, {
    to: "/components/nav#link1"
  }, React.createElement(CustomNode, null)))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});