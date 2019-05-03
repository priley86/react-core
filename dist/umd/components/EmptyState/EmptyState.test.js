"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "@patternfly/react-icons", "./EmptyState", "./EmptyStateBody", "./EmptyStateSecondaryActions", "./EmptyStateIcon", "../Button", "../Title"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("@patternfly/react-icons"), require("./EmptyState"), require("./EmptyStateBody"), require("./EmptyStateSecondaryActions"), require("./EmptyStateIcon"), require("../Button"), require("../Title"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactIcons, global.EmptyState, global.EmptyStateBody, global.EmptyStateSecondaryActions, global.EmptyStateIcon, global.Button, global.Title);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _reactIcons, _EmptyState, _EmptyStateBody, _EmptyStateSecondaryActions, _EmptyStateIcon, _Button, _Title) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _EmptyState2 = _interopRequireDefault(_EmptyState);

  var _EmptyStateBody2 = _interopRequireDefault(_EmptyStateBody);

  var _EmptyStateSecondaryActions2 = _interopRequireDefault(_EmptyStateSecondaryActions);

  var _EmptyStateIcon2 = _interopRequireDefault(_EmptyStateIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('EmptyState', function () {
    test('Main', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyState2["default"], null, _react2["default"].createElement(_Title.Title, {
        headingLevel: "h5",
        size: "lg"
      }, "HTTP Proxies"), _react2["default"].createElement(_EmptyStateBody2["default"], null, "Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies."), _react2["default"].createElement(_Button.Button, {
        variant: "primary"
      }, "New HTTP Proxy"), _react2["default"].createElement(_EmptyStateSecondaryActions2["default"], null, _react2["default"].createElement(_Button.Button, {
        variant: "link",
        "aria-label": "learn more action"
      }, "Learn more about this in the documentation."))));
      expect(view).toMatchSnapshot();
    });
    test('Main variant regular', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyState2["default"], {
        variant: _EmptyState.EmptyStateVariant.full
      }, _react2["default"].createElement(_Title.Title, null, "EmptyState full")));
      expect(view).toMatchSnapshot();
    });
    test('Main variant small', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyState2["default"], {
        variant: _EmptyState.EmptyStateVariant.small
      }, _react2["default"].createElement(_Title.Title, null, "EmptyState small")));
      expect(view).toMatchSnapshot();
    });
    test('Body', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyStateBody2["default"], {
        className: "custom-empty-state-body",
        id: "empty-state-1"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
      expect(view.props().id).toBe('empty-state-1');
    });
    test('Secondary Action', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyStateSecondaryActions2["default"], {
        className: "custom-empty-state-secondary",
        id: "empty-state-2"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
      expect(view.props().id).toBe('empty-state-2');
    });
    test('Icon', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_EmptyStateIcon2["default"], {
        icon: _reactIcons.AddressBookIcon,
        className: "custom-empty-state-icon",
        id: "empty-state-icon"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
      expect(view.props().id).toBe('empty-state-icon');
    });
  });
});