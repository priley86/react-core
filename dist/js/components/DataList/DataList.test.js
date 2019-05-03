"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DataList = _interopRequireDefault(require("./DataList"));

var _DataListItem = _interopRequireDefault(require("./DataListItem"));

var _DataListAction = _interopRequireDefault(require("./DataListAction"));

var _DataListCell = _interopRequireDefault(require("./DataListCell"));

var _DataListToggle = _interopRequireDefault(require("./DataListToggle"));

var _DataListItemCells = _interopRequireDefault(require("./DataListItemCells"));

var _DataListItemRow = _interopRequireDefault(require("./DataListItemRow"));

var _DataListContent = _interopRequireDefault(require("./DataListContent"));

var _Button = require("../Button");

var _Dropdown = require("../Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('DataList', function () {
  test('List default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataList["default"], {
      "aria-label": "this is a simple list"
    }));
    expect(view).toMatchSnapshot();
  });
  test('List', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataList["default"], {
      key: "list-id-1",
      className: "data-list-custom",
      "aria-label": "this is a simple list"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Item default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListItem["default"], {
      key: "item-id-1",
      "aria-labelledby": "item-1"
    }, "test"));
    expect(view).toMatchSnapshot();
  });
  test('Item expanded', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListItem["default"], {
      "aria-labelledby": "item-1",
      isExpanded: true
    }, "test"));
    expect(view.props().className).toBe('pf-c-data-list__item pf-m-expanded');
  });
  test('Item', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListItem["default"], {
      className: "data-list-item-custom",
      "aria-labelledby": "item-1"
    }, "test"));
    expect(view).toMatchSnapshot();
  });
  test('item row default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListItemRow["default"], null, "test"));
    expect(view).toMatchSnapshot();
  });
  test('Cell default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListCell["default"], null, "Secondary"));
    expect(view).toMatchSnapshot();
  });
  test('Cells', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListItemCells["default"], {
      dataListCells: [_react["default"].createElement(_DataListCell["default"], {
        key: "list-id-1",
        id: "primary-item",
        className: "data-list-custom"
      }, "Primary Id"), _react["default"].createElement(_DataListCell["default"], {
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
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListCell["default"], {
        width: testCase.width,
        key: "list-id-1",
        id: "primary-item"
      }, "Primary Id"));
      testCase["class"] === '' ? expect(view.props().className).toBe('pf-c-data-list__cell') : expect(view.props().className).toBe("pf-c-data-list__cell ".concat(testCase["class"]));
    });
  });
  test('Toggle default with aria label', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListToggle["default"], {
      "aria-label": "Toggle details for",
      "aria-labelledby": "ex-toggle2 ex-item2",
      id: "ex-toggle2"
    }));
    expect(view.find(_Button.Button).props()['aria-label']).toBe('Toggle details for');
    expect(view.find(_Button.Button).props()['aria-labelledby']).toBe(null);
    expect(view.find(_Button.Button).props()['aria-expanded']).toBe(false);
    expect(view.find(_Button.Button).props().id).toBe('ex-toggle2');
    expect(view.find(_Button.Button).props().id).toBe('ex-toggle2');
  });
  test('Toggle expanded', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListToggle["default"], {
      "aria-label": "Toggle details for",
      id: "ex-toggle2",
      isExpanded: true
    }));
    expect(view.find(_Button.Button).props()['aria-expanded']).toBe(true);
  });
  test('DataListAction dropdown', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListAction["default"], {
      "aria-label": "Actions",
      "aria-labelledby": "ex-action",
      id: "ex-action"
    }, _react["default"].createElement(_Dropdown.Dropdown, {
      isPlain: true,
      position: _Dropdown.DropdownPosition.right,
      toggle: _react["default"].createElement(_Dropdown.KebabToggle, null),
      dropdownItems: [_react["default"].createElement(_Dropdown.DropdownItem, {
        component: "button",
        onClick: jest.fn(),
        key: "action-1"
      }, "action-1"), _react["default"].createElement(_Dropdown.DropdownItem, {
        component: "button",
        onClick: jest.fn(),
        key: "action-2"
      }, "action-2")]
    })));
    expect(view).toMatchSnapshot();
  });
  test('DataListAction button', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListAction["default"], {
      "aria-label": "Actions",
      "aria-labelledby": "ex-action",
      id: "ex-action"
    }, _react["default"].createElement(_Button.Button, {
      id: "delete-item-1"
    }, "Delete")));
    expect(view).toMatchSnapshot();
  });
  test('DataListContent', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListContent["default"], {
      "aria-label": "Primary Content Details"
    }, " test"));
    expect(view).toMatchSnapshot();
  });
  test('DataListContent noPadding', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DataListContent["default"], {
      "aria-label": "Primary Content Details",
      hidden: true,
      noPadding: true
    }, "test"));
    expect(view).toMatchSnapshot();
  });
});