import React from 'react';
import { shallow } from 'enzyme';
import GenerateId from './GenerateId';
test('generates id', function () {
  var view = shallow(React.createElement(GenerateId, null, function (id) {
    return React.createElement("div", {
      id: id
    }, "div with random ID");
  }));
  expect(view).toMatchSnapshot();
});