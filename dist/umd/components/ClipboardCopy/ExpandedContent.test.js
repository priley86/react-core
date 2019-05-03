"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ExpandedContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ExpandedContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ExpandedContent);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ExpandedContent) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ExpandedContent2 = _interopRequireDefault(_ExpandedContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var props = {
    className: 'class-1',
    id: 'id-1'
  };
  test('expanded content render', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ExpandedContent2["default"], _extends({}, props, {
      onChange: function onChange() {}
    }), "This is my text"));
    expect(view).toMatchSnapshot();
  });
});