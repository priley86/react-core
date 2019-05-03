"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactIcons = require("@patternfly/react-icons");

var _EmptyState = _interopRequireWildcard(require("./EmptyState"));

var _EmptyStateBody = _interopRequireDefault(require("./EmptyStateBody"));

var _EmptyStateSecondaryActions = _interopRequireDefault(require("./EmptyStateSecondaryActions"));

var _EmptyStateIcon = _interopRequireDefault(require("./EmptyStateIcon"));

var _Button = require("../Button");

var _Title = require("../Title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('EmptyState', function () {
  test('Main', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyState["default"], null, _react["default"].createElement(_Title.Title, {
      headingLevel: "h5",
      size: "lg"
    }, "HTTP Proxies"), _react["default"].createElement(_EmptyStateBody["default"], null, "Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies."), _react["default"].createElement(_Button.Button, {
      variant: "primary"
    }, "New HTTP Proxy"), _react["default"].createElement(_EmptyStateSecondaryActions["default"], null, _react["default"].createElement(_Button.Button, {
      variant: "link",
      "aria-label": "learn more action"
    }, "Learn more about this in the documentation."))));
    expect(view).toMatchSnapshot();
  });
  test('Main variant regular', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyState["default"], {
      variant: _EmptyState.EmptyStateVariant.full
    }, _react["default"].createElement(_Title.Title, null, "EmptyState full")));
    expect(view).toMatchSnapshot();
  });
  test('Main variant small', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyState["default"], {
      variant: _EmptyState.EmptyStateVariant.small
    }, _react["default"].createElement(_Title.Title, null, "EmptyState small")));
    expect(view).toMatchSnapshot();
  });
  test('Body', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyStateBody["default"], {
      className: "custom-empty-state-body",
      id: "empty-state-1"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
    expect(view.props().id).toBe('empty-state-1');
  });
  test('Secondary Action', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyStateSecondaryActions["default"], {
      className: "custom-empty-state-secondary",
      id: "empty-state-2"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
    expect(view.props().id).toBe('empty-state-2');
  });
  test('Icon', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_EmptyStateIcon["default"], {
      icon: _reactIcons.AddressBookIcon,
      className: "custom-empty-state-icon",
      id: "empty-state-icon"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
    expect(view.props().id).toBe('empty-state-icon');
  });
});