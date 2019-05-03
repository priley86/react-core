"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModal", "react-dom", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModal"), require("react-dom"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModal, global.reactDom, global.constants);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _AboutModal, _reactDom, _constants) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _AboutModal2 = _interopRequireDefault(_AboutModal);

  var _reactDom2 = _interopRequireDefault(_reactDom);

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

  jest.spyOn(_reactDom2["default"], 'createPortal');
  jest.spyOn(document, 'createElement');
  jest.spyOn(document, 'addEventListener');

  _reactDom2["default"].createPortal.mockImplementation(function (v) {
    return v;
  });

  var props = {
    onClose: jest.fn(),
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    brandImageAlt: 'Brand Image',
    logoImageSrc: 'logoImg...',
    logoImageAlt: 'AboutModal Logo'
  };
  test('AboutModal creates a container element once for div', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], props, " Test About Modal "));
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
  test('About Modal closes with escape', function () {
    (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], _extends({}, props, {
      isOpen: true
    }), "Test About Modal"));

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
    (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], props));

    var _document$addEventLis2 = _slicedToArray(document.addEventListener.mock.calls[0], 2),
        event = _document$addEventLis2[0],
        handler = _document$addEventLis2[1];

    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).not.toBeCalled();
  });
  test('Each modal is given new ariaDescribedById and ariaLablledbyId', function () {
    var first = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], props, " Test About Modal "));
    var second = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], props, " Test About Modal "));
    expect(first.props().ariaLabelledbyId).not.toBe(second.props().ariaLabelledbyId);
    expect(first.props().ariaDescribedById).not.toBe(second.props().ariaDescribedById);
  });
  test('Console error is generated when the logoImageSrc is provided without logoImageAlt', function () {
    var noImgAltrops = {
      onClose: jest.fn(),
      children: 'modal content',
      productName: 'Product Name',
      trademark: 'Trademark and copyright information here',
      brandImageSrc: 'brandImg...',
      brandImageAlt: 'Brand Image',
      logoImageSrc: 'logoImg...'
    };
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModal2["default"], noImgAltrops, " Test About Modal "));
    expect(myMock).toBeCalled();
  });
});