"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Modal", "react", "enzyme", "../../helpers/constants", "../../../../react-styles/dist/js", "../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Modal"), require("react"), require("enzyme"), require("../../helpers/constants"), require("../../../../react-styles/dist/js"), require("../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Modal, global.react, global.enzyme, global.constants, global.js, global.backdropCss);
    global.undefined = mod.exports;
  }
})(void 0, function (_Modal, _react, _enzyme, _constants, _js, _backdropCss) {
  "use strict";

  var _Modal2 = _interopRequireDefault(_Modal);

  var _react2 = _interopRequireDefault(_react);

  var _backdropCss2 = _interopRequireDefault(_backdropCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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

  jest.spyOn(document, 'createElement');
  jest.spyOn(document, 'addEventListener');
  var props = {
    title: 'Modal',
    onClose: jest.fn(),
    isOpen: false,
    children: 'modal content'
  };
  test('Modal creates a container element once for div', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], props));
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
  test('modal closes with escape', function () {
    (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], _extends({}, props, {
      isOpen: true
    })));

    var _document$addEventLis = _slicedToArray(document.addEventListener.mock.calls[0], 2),
        event = _document$addEventLis[0],
        handler = _document$addEventLis[1];

    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).toBeCalled();
  });
  test('modal does not call onClose for esc key if it is not open', function () {
    (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], props));

    var _document$addEventLis2 = _slicedToArray(document.addEventListener.mock.calls[0], 2),
        event = _document$addEventLis2[0],
        handler = _document$addEventLis2[1];

    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).not.toBeCalled();
  });
  test('Each modal is given a new id', function () {
    var first = (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], props));
    var second = (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], props));
    expect(first.instance().id).not.toBe(second.instance().id);
  });
  test('modal removes body backdropOpen class when removed', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Modal2["default"], _extends({}, props, {
      isOpen: true
    })));
    view.update();
    expect(document.body.className).toContain((0, _js.css)(_backdropCss2["default"].backdropOpen));
    view.setProps({
      isOpen: false
    });
    view.update();
    expect(document.body.className).not.toContain((0, _js.css)(_backdropCss2["default"].backdropOpen));
  });
});