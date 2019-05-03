import AboutModalBoxHeader from './AboutModalBoxHeader';
import React from 'react';
import { shallow } from 'enzyme';
test('AboutModalBoxHeader Test', function () {
  var view = shallow(React.createElement(AboutModalBoxHeader, {
    productName: "Product Name",
    id: "id"
  }, "This is a AboutModalBox header"));
  expect(view).toMatchSnapshot();
});