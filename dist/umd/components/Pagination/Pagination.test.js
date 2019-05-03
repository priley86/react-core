"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _index) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('component render', function () {
    test('should render correctly top', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 20
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('should render correctly bottom', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 20,
        variant: _index.PaginationVariant.bottom
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('limited number of pages', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 20,
        perPage: 20
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('last page', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 20,
        perPage: 10,
        page: 2
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom perPageOptions', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 40,
        perPageOptions: [{
          title: 'some',
          value: 1
        }]
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('no items', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 0
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom start end', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 40,
        itemsStart: 5,
        itemsEnd: 15
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('titles', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 40,
        titles: {
          items: 'values',
          pages: 'books'
        }
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom pagination toggle', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 40,
        toggleTemplate: '${firstIndex} - ${lastIndex} - ${itemCount} - ${itemsTitle}'
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('up drop direction', function () {
      var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
        itemCount: 40,
        dropDirection: "up"
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('API', function () {
    describe('onSetPage', function () {
      var onSetPage = jest.fn();
      test('should call first', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call previous', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40,
          page: 3
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(2);
      });
      test('should call next', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('[data-action="next"]').first().simulate('click');
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(2);
      });
      test('should call last', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(4);
      });
      test('should call input', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '1'
          }
        });
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call input wrong value', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: 'a'
          }
        });
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call input huge page number', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '10'
          }
        });
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(4);
      });
      test('should call input small page number', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '-10'
          }
        });
        expect(onSetPage.mock.calls.length).toBe(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onSetPage.mock.calls.length).toBe(0);
      });
    });
    describe('onFirst', function () {
      var onFirst = jest.fn();
      test('should call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onFirstClick: onFirst,
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onFirst.mock.calls.length).toBe(1);
        expect(onFirst.mock.calls[0][1]).toBe(1);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onFirst.mock.calls.length).toBe(0);
      });
    });
    describe('onLast', function () {
      var onLast = jest.fn();
      test('should call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onLastClick: onLast,
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onLast.mock.calls.length).toBe(1);
        expect(onLast.mock.calls[0][1]).toBe(4);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onLast.mock.calls.length).toBe(0);
      });
    });
    describe('onPrevious', function () {
      var onPrevious = jest.fn();
      test('should call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onPreviousClick: onPrevious,
          itemCount: 40,
          page: 3
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onPrevious.mock.calls.length).toBe(1);
        expect(onPrevious.mock.calls[0][1]).toBe(2);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onPrevious.mock.calls.length).toBe(0);
      });
    });
    describe('onNext', function () {
      var onNext = jest.fn();
      test('should call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onNextClick: onNext,
          itemCount: 40
        }));
        wrapper.find('[data-action="next"]').first().simulate('click');
        expect(onNext.mock.calls.length).toBe(1);
        expect(onNext.mock.calls[0][1]).toBe(2);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onNext.mock.calls.length).toBe(0);
      });
    });
    describe('onPerPage', function () {
      var onPerPage = jest.fn();
      test('should call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          onPerPageSelect: onPerPage,
          itemCount: 40
        }));
        wrapper.find('.pf-c-options-menu button').first().simulate('click');
        wrapper.update();
        wrapper.find('ul li [data-action="per-page-20"]').first().simulate('click');
        expect(onPerPage.mock.calls.length).toBe(1);
        expect(onPerPage.mock.calls[0][1]).toBe(20);
      });
      test('should NOT call', function () {
        var wrapper = (0, _enzyme.mount)(_react2["default"].createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('.pf-c-options-menu button').first().simulate('click');
        wrapper.update();
        wrapper.find('ul li [data-action="per-page-20"]').first().simulate('click');
        expect(onPerPage.mock.calls.length).toBe(0);
      });
    });
  });
});