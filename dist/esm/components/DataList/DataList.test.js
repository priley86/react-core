import React from 'react';
import { shallow } from 'enzyme';
import DataList from './DataList';
import DataListItem from './DataListItem';
import DataListAction from './DataListAction';
import DataListCell from './DataListCell';
import DataListToggle from './DataListToggle';
import DataListItemCells from './DataListItemCells';
import DataListItemRow from './DataListItemRow';
import DataListContent from './DataListContent';
import { Button } from '../Button';
import { DropdownItem, Dropdown, KebabToggle, DropdownPosition } from '../Dropdown';
describe('DataList', function () {
  test('List default', function () {
    var view = shallow(React.createElement(DataList, {
      "aria-label": "this is a simple list"
    }));
    expect(view).toMatchSnapshot();
  });
  test('List', function () {
    var view = shallow(React.createElement(DataList, {
      key: "list-id-1",
      className: "data-list-custom",
      "aria-label": "this is a simple list"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Item default', function () {
    var view = shallow(React.createElement(DataListItem, {
      key: "item-id-1",
      "aria-labelledby": "item-1"
    }, "test"));
    expect(view).toMatchSnapshot();
  });
  test('Item expanded', function () {
    var view = shallow(React.createElement(DataListItem, {
      "aria-labelledby": "item-1",
      isExpanded: true
    }, "test"));
    expect(view.props().className).toBe('pf-c-data-list__item pf-m-expanded');
  });
  test('Item', function () {
    var view = shallow(React.createElement(DataListItem, {
      className: "data-list-item-custom",
      "aria-labelledby": "item-1"
    }, "test"));
    expect(view).toMatchSnapshot();
  });
  test('item row default', function () {
    var view = shallow(React.createElement(DataListItemRow, null, "test"));
    expect(view).toMatchSnapshot();
  });
  test('Cell default', function () {
    var view = shallow(React.createElement(DataListCell, null, "Secondary"));
    expect(view).toMatchSnapshot();
  });
  test('Cells', function () {
    var view = shallow(React.createElement(DataListItemCells, {
      dataListCells: [React.createElement(DataListCell, {
        key: "list-id-1",
        id: "primary-item",
        className: "data-list-custom"
      }, "Primary Id"), React.createElement(DataListCell, {
        key: "list-id-2",
        id: "primary-item",
        className: "data-list-custom"
      }, "Primary Id 2")]
    }));
    expect(view).toMatchSnapshot();
  });
  test('Cell with width modifier', function () {
    [{
      width: 1,
      "class": ''
    }, {
      width: 2,
      "class": 'pf-m-flex-2'
    }, {
      width: 3,
      "class": 'pf-m-flex-3'
    }, {
      width: 4,
      "class": 'pf-m-flex-4'
    }, {
      width: 5,
      "class": 'pf-m-flex-5'
    }].forEach(function (testCase) {
      var view = shallow(React.createElement(DataListCell, {
        width: testCase.width,
        key: "list-id-1",
        id: "primary-item"
      }, "Primary Id"));
      testCase["class"] === '' ? expect(view.props().className).toBe('pf-c-data-list__cell') : expect(view.props().className).toBe("pf-c-data-list__cell ".concat(testCase["class"]));
    });
  });
  test('Toggle default with aria label', function () {
    var view = shallow(React.createElement(DataListToggle, {
      "aria-label": "Toggle details for",
      "aria-labelledby": "ex-toggle2 ex-item2",
      id: "ex-toggle2"
    }));
    expect(view.find(Button).props()['aria-label']).toBe('Toggle details for');
    expect(view.find(Button).props()['aria-labelledby']).toBe(null);
    expect(view.find(Button).props()['aria-expanded']).toBe(false);
    expect(view.find(Button).props().id).toBe('ex-toggle2');
    expect(view.find(Button).props().id).toBe('ex-toggle2');
  });
  test('Toggle expanded', function () {
    var view = shallow(React.createElement(DataListToggle, {
      "aria-label": "Toggle details for",
      id: "ex-toggle2",
      isExpanded: true
    }));
    expect(view.find(Button).props()['aria-expanded']).toBe(true);
  });
  test('DataListAction dropdown', function () {
    var view = shallow(React.createElement(DataListAction, {
      "aria-label": "Actions",
      "aria-labelledby": "ex-action",
      id: "ex-action"
    }, React.createElement(Dropdown, {
      isPlain: true,
      position: DropdownPosition.right,
      toggle: React.createElement(KebabToggle, null),
      dropdownItems: [React.createElement(DropdownItem, {
        component: "button",
        onClick: jest.fn(),
        key: "action-1"
      }, "action-1"), React.createElement(DropdownItem, {
        component: "button",
        onClick: jest.fn(),
        key: "action-2"
      }, "action-2")]
    })));
    expect(view).toMatchSnapshot();
  });
  test('DataListAction button', function () {
    var view = shallow(React.createElement(DataListAction, {
      "aria-label": "Actions",
      "aria-labelledby": "ex-action",
      id: "ex-action"
    }, React.createElement(Button, {
      id: "delete-item-1"
    }, "Delete")));
    expect(view).toMatchSnapshot();
  });
  test('DataListContent', function () {
    var view = shallow(React.createElement(DataListContent, {
      "aria-label": "Primary Content Details"
    }, " test"));
    expect(view).toMatchSnapshot();
  });
  test('DataListContent noPadding', function () {
    var view = shallow(React.createElement(DataListContent, {
      "aria-label": "Primary Content Details",
      hidden: true,
      noPadding: true
    }, "test"));
    expect(view).toMatchSnapshot();
  });
});