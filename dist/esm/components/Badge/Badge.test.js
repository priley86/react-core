import Badge from './Badge';
import React from 'react';
import { shallow } from 'enzyme';
Object.values([true, false]).forEach(function (isRead) {
  test("".concat(isRead, " Badge"), function () {
    var view = shallow(React.createElement(Badge, {
      isRead: isRead
    }, isRead ? 'read' : 'unread', " Badge"));
    expect(view).toMatchSnapshot();
  });
});