"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./BackgroundImage", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./BackgroundImage"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.BackgroundImage, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_BackgroundImage, _react, _enzyme) {
  "use strict";

  var _BackgroundImage2 = _interopRequireDefault(_BackgroundImage);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _images;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var images = (_images = {}, _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.lg, '/assets/images/pfbg_1200.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm, '/assets/images/pfbg_768.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm2x, '/assets/images/pfbg_768@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs, '/assets/images/pfbg_576.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs2x, '/assets/images/pfbg_576@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.filter, '/assets/images/background-filter.svg'), _images);
  Object.values([true, false]).forEach(function (isRead) {
    test("BackgroundImage", function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BackgroundImage2["default"], {
        src: images
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('allows passing in a single string as the image src', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BackgroundImage2["default"], {
      src: images.lg
    }));
    expect(view).toMatchSnapshot();
  });
});