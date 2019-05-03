"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalContent);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ModalContent) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ModalContent2 = _interopRequireDefault(_ModalContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Modal Content Test only body', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test isOpen', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with header', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true,
      header: "Testing"
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with footer', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true,
      actions: ['Testing']
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content test without footer', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with header and footer', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      header: "Testing header",
      id: "id",
      isOpen: true,
      actions: ['Testing footer']
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with onclose', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalContent2["default"], {
      title: "Test Modal Content title",
      header: "Testing header",
      actions: ['Testing footer'],
      isLarge: true,
      onclose: function onclose() {
        return undefined;
      },
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
});