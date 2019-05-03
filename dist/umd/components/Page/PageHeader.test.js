"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./PageHeader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./PageHeader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PageHeader);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _PageHeader) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _PageHeader2 = _interopRequireDefault(_PageHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  jest.mock('./Page');
  test('Check page vertical layout example against snapshot', function () {
    var Header = _react2["default"].createElement(_PageHeader2["default"], {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      onNavToggle: function onNavToggle() {
        return undefined;
      }
    });

    var view = (0, _enzyme.mount)(Header);
    expect(view).toMatchSnapshot();
  });
});