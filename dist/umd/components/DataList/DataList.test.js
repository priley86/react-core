"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DataList", "./DataListItem", "./DataListAction", "./DataListCell", "./DataListToggle", "./DataListItemCells", "./DataListItemRow", "./DataListContent", "../Button", "../Dropdown"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DataList"), require("./DataListItem"), require("./DataListAction"), require("./DataListCell"), require("./DataListToggle"), require("./DataListItemCells"), require("./DataListItemRow"), require("./DataListContent"), require("../Button"), require("../Dropdown"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DataList, global.DataListItem, global.DataListAction, global.DataListCell, global.DataListToggle, global.DataListItemCells, global.DataListItemRow, global.DataListContent, global.Button, global.Dropdown);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _DataList, _DataListItem, _DataListAction, _DataListCell, _DataListToggle, _DataListItemCells, _DataListItemRow, _DataListContent, _Button, _Dropdown) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _DataList2 = _interopRequireDefault(_DataList);

  var _DataListItem2 = _interopRequireDefault(_DataListItem);

  var _DataListAction2 = _interopRequireDefault(_DataListAction);

  var _DataListCell2 = _interopRequireDefault(_DataListCell);

  var _DataListToggle2 = _interopRequireDefault(_DataListToggle);

  var _DataListItemCells2 = _interopRequireDefault(_DataListItemCells);

  var _DataListItemRow2 = _interopRequireDefault(_DataListItemRow);

  var _DataListContent2 = _interopRequireDefault(_DataListContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('DataList', function () {
    test('List default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataList2["default"], {
        "aria-label": "this is a simple list"
      }));
      expect(view).toMatchSnapshot();
    });
    test('List', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataList2["default"], {
        key: "list-id-1",
        className: "data-list-custom",
        "aria-label": "this is a simple list"
      }));
      expect(view).toMatchSnapshot();
    });
    test('Item default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListItem2["default"], {
        key: "item-id-1",
        "aria-labelledby": "item-1"
      }, "test"));
      expect(view).toMatchSnapshot();
    });
    test('Item expanded', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListItem2["default"], {
        "aria-labelledby": "item-1",
        isExpanded: true
      }, "test"));
      expect(view.props().className).toBe('pf-c-data-list__item pf-m-expanded');
    });
    test('Item', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListItem2["default"], {
        className: "data-list-item-custom",
        "aria-labelledby": "item-1"
      }, "test"));
      expect(view).toMatchSnapshot();
    });
    test('item row default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListItemRow2["default"], null, "test"));
      expect(view).toMatchSnapshot();
    });
    test('Cell default', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListCell2["default"], null, "Secondary"));
      expect(view).toMatchSnapshot();
    });
    test('Cells', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListItemCells2["default"], {
        dataListCells: [_react2["default"].createElement(_DataListCell2["default"], {
          key: "list-id-1",
          id: "primary-item",
          className: "data-list-custom"
        }, "Primary Id"), _react2["default"].createElement(_DataListCell2["default"], {
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
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListCell2["default"], {
          width: testCase.width,
          key: "list-id-1",
          id: "primary-item"
        }, "Primary Id"));
        testCase["class"] === '' ? expect(view.props().className).toBe('pf-c-data-list__cell') : expect(view.props().className).toBe("pf-c-data-list__cell ".concat(testCase["class"]));
      });
    });
    test('Toggle default with aria label', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListToggle2["default"], {
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
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListToggle2["default"], {
        "aria-label": "Toggle details for",
        id: "ex-toggle2",
        isExpanded: true
      }));
      expect(view.find(_Button.Button).props()['aria-expanded']).toBe(true);
    });
    test('DataListAction dropdown', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListAction2["default"], {
        "aria-label": "Actions",
        "aria-labelledby": "ex-action",
        id: "ex-action"
      }, _react2["default"].createElement(_Dropdown.Dropdown, {
        isPlain: true,
        position: _Dropdown.DropdownPosition.right,
        toggle: _react2["default"].createElement(_Dropdown.KebabToggle, null),
        dropdownItems: [_react2["default"].createElement(_Dropdown.DropdownItem, {
          component: "button",
          onClick: jest.fn(),
          key: "action-1"
        }, "action-1"), _react2["default"].createElement(_Dropdown.DropdownItem, {
          component: "button",
          onClick: jest.fn(),
          key: "action-2"
        }, "action-2")]
      })));
      expect(view).toMatchSnapshot();
    });
    test('DataListAction button', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListAction2["default"], {
        "aria-label": "Actions",
        "aria-labelledby": "ex-action",
        id: "ex-action"
      }, _react2["default"].createElement(_Button.Button, {
        id: "delete-item-1"
      }, "Delete")));
      expect(view).toMatchSnapshot();
    });
    test('DataListContent', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListContent2["default"], {
        "aria-label": "Primary Content Details"
      }, " test"));
      expect(view).toMatchSnapshot();
    });
    test('DataListContent noPadding', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DataListContent2["default"], {
        "aria-label": "Primary Content Details",
        hidden: true,
        noPadding: true
      }, "test"));
      expect(view).toMatchSnapshot();
    });
  });
});