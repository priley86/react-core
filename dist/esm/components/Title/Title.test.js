import * as React from 'react';
import { shallow } from 'enzyme';
import { Title, TitleSize, TitleLevel } from '.';
Object.values(TitleSize).forEach(function (size) {
  test("".concat(size, " Title"), function () {
    var view = shallow(React.createElement(Title, {
      size: size,
      headingLevel: TitleLevel.h1
    }, size, " Title"));
    expect(view).toMatchSnapshot();
  });
});
test('Heading level can be set using a string value', function () {
  var view = shallow(React.createElement(Title, {
    size: "lg",
    headingLevel: TitleLevel.h3
  }, "H3 Heading"));
  var isH3 = view.find('h3').length === 1;
  var isH1 = view.find('h1').length === 1;
  expect(isH1).toBe(false);
  expect(isH3).toBe(true);
});