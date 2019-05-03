import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
describe('Form component', function () {
  test('should render default form variant', function () {
    var view = shallow(React.createElement(Form, null));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form variant', function () {
    var view = shallow(React.createElement(Form, {
      isHorizontal: true
    }));
    expect(view).toMatchSnapshot();
  });
});