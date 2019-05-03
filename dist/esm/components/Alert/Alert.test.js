import React from 'react';
import { mount } from 'enzyme';
import Alert, { AlertVariant } from './Alert';
import AlertActionLink from './AlertActionLink';
import AlertActionCLoseButton from './AlertActionCloseButton';
Object.keys(AlertVariant).forEach(function (variant) {
  describe("Alert - ".concat(variant), function () {
    test('Description', function () {
      var view = mount(React.createElement(Alert, {
        variant: variant,
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Title', function () {
      var view = mount(React.createElement(Alert, {
        variant: variant,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Link', function () {
      var view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionLink, null, "test"),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Close Button', function () {
      var onClose = jest.fn();
      var view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionCLoseButton, {
          "aria-label": "Close",
          onClose: onClose
        }),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
      view.find('button[aria-label="Close"]').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
    test('Action and Title', function () {
      var view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Custom aria label', function () {
      var view = mount(React.createElement(Alert, {
        variant: variant,
        "aria-label": "Custom aria label for ".concat(variant),
        action: React.createElement(AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
  });
});