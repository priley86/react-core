"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Avatar);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Avatar) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  test('simple avatar', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_Avatar.Avatar, {
      alt: "avatar"
    }));
    expect(view).toMatchSnapshot();
  });
});