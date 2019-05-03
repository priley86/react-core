"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalContainer);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _AboutModalContainer) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _AboutModalContainer2 = _interopRequireDefault(_AboutModalContainer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var props = {
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    brandImageAlt: 'Brand Image',
    logoImageSrc: 'logoImg...',
    logoImageAlt: 'AboutModal Logo',
    ariaLabelledbyId: 'ariaLablledbyId',
    ariaDescribedById: 'ariaDescribedById'
  };
  test('About Modal Container Test simple', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalContainer2["default"], props, "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
  test('About Modal Container Test isOpen', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalContainer2["default"], _extends({
      title: "Test Modal Container title"
    }, props, {
      isOpen: true
    }), "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
  test('About Modal Container Test with onlose', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalContainer2["default"], _extends({
      onclose: function onclose() {
        return undefined;
      }
    }, props), "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
});