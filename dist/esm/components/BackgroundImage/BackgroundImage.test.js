var _images;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import BackgroundImage, { BackgroundImageSrc } from './BackgroundImage';
import React from 'react';
import { shallow } from 'enzyme';
var images = (_images = {}, _defineProperty(_images, BackgroundImageSrc.lg, '/assets/images/pfbg_1200.jpg'), _defineProperty(_images, BackgroundImageSrc.sm, '/assets/images/pfbg_768.jpg'), _defineProperty(_images, BackgroundImageSrc.sm2x, '/assets/images/pfbg_768@2x.jpg'), _defineProperty(_images, BackgroundImageSrc.xs, '/assets/images/pfbg_576.jpg'), _defineProperty(_images, BackgroundImageSrc.xs2x, '/assets/images/pfbg_576@2x.jpg'), _defineProperty(_images, BackgroundImageSrc.filter, '/assets/images/background-filter.svg'), _images);
Object.values([true, false]).forEach(function (isRead) {
  test("BackgroundImage", function () {
    var view = shallow(React.createElement(BackgroundImage, {
      src: images
    }));
    expect(view).toMatchSnapshot();
  });
});
test('allows passing in a single string as the image src', function () {
  var view = shallow(React.createElement(BackgroundImage, {
    src: images.lg
  }));
  expect(view).toMatchSnapshot();
});