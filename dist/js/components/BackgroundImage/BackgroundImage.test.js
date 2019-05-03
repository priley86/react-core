"use strict";

var _BackgroundImage = _interopRequireWildcard(require("./BackgroundImage"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _images;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var images = (_images = {}, _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.lg, '/assets/images/pfbg_1200.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm, '/assets/images/pfbg_768.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm2x, '/assets/images/pfbg_768@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs, '/assets/images/pfbg_576.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs2x, '/assets/images/pfbg_576@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.filter, '/assets/images/background-filter.svg'), _images);
Object.values([true, false]).forEach(function (isRead) {
  test("BackgroundImage", function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BackgroundImage["default"], {
      src: images
    }));
    expect(view).toMatchSnapshot();
  });
});
test('allows passing in a single string as the image src', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_BackgroundImage["default"], {
    src: images.lg
  }));
  expect(view).toMatchSnapshot();
});