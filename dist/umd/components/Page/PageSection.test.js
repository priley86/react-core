"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./PageSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./PageSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PageSection);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _PageSection) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _PageSection2 = _interopRequireDefault(_PageSection);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  jest.mock('./Page');
  test('Check page section with no padding example against snapshot', function () {
    var Section = _react2["default"].createElement(_PageSection2["default"], {
      noPadding: true
    });

    var view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page section with no padding on mobile example against snapshot', function () {
    var Section = _react2["default"].createElement(_PageSection2["default"], {
      noPaddingMobile: true
    });

    var view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
});