"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "prop-types", "./AboutModalContainer", "exenv", "../../helpers/constants", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("prop-types"), require("./AboutModalContainer"), require("exenv"), require("../../helpers/constants"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.propTypes, global.AboutModalContainer, global.exenv, global.constants, global.reactStyles, global.backdropCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactDom, _propTypes, _AboutModalContainer, _exenv, _constants, _reactStyles, _backdropCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _AboutModalContainer2 = _interopRequireDefault(_AboutModalContainer);

  var _backdropCss2 = _interopRequireDefault(_backdropCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var propTypes = {
    /** Content rendered inside the about modal */
    children: _propTypes2["default"].node.isRequired,

    /** Additional classes added to the about modal */
    className: _propTypes2["default"].string,

    /** Flag to show the about modal */
    isOpen: _propTypes2["default"].bool,

    /** A callback for when the close button is clicked */
    onClose: _propTypes2["default"].func,

    /** Product name */
    productName: _propTypes2["default"].string,

    /** Trademark information */
    trademark: _propTypes2["default"].string,

    /** The URL of the image for the brand */
    brandImageSrc: _propTypes2["default"].string.isRequired,

    /** The alternate text of the brand image */
    brandImageAlt: _propTypes2["default"].string.isRequired,

    /** The URL of the image for the logo */
    logoImageSrc: _propTypes2["default"].string,

    /** The alternate text of the logo image */
    logoImageAlt: function logoImageAlt(props) {
      if (props.logoImageSrc && !props.logoImageAlt) {
        return new Error('logoImageAlt is required when a logoImageSrc is specified');
      }

      return null;
    },

    /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
    noAboutModalBoxContentContainer: _propTypes2["default"].bool,

    /** Additional props are passed and spread to the modal content container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    isOpen: false,
    onClose: function onClose() {
      return undefined;
    },
    productName: '',
    trademark: '',
    logoImageSrc: '',
    logoImageAlt: '',
    noAboutModalBoxContentContainer: false
  };
  var currentId = 0;

  var AboutModal =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(AboutModal, _React$Component);

    function AboutModal() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AboutModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AboutModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "ariaLabelledbyId", "pf-about-modal-title-".concat(currentId++));

      _defineProperty(_assertThisInitialized(_this), "ariaDescribedById", "pf-about-modal-content-".concat(currentId++));

      _defineProperty(_assertThisInitialized(_this), "handleEscKeyClick", function (event) {
        if (event.keyCode === _constants.KEY_CODES.ESCAPE_KEY && _this.props.isOpen) {
          _this.props.onClose();
        }
      });

      return _this;
    }

    _createClass(AboutModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.body.appendChild(this.container);
        document.addEventListener('keydown', this.handleEscKeyClick, false);

        if (this.props.isOpen) {
          document.body.classList.add((0, _reactStyles.css)(_backdropCss2["default"].backdropOpen));
        } else {
          document.body.classList.remove((0, _reactStyles.css)(_backdropCss2["default"].backdropOpen));
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.props.isOpen) {
          document.body.classList.add((0, _reactStyles.css)(_backdropCss2["default"].backdropOpen));
        } else {
          document.body.classList.remove((0, _reactStyles.css)(_backdropCss2["default"].backdropOpen));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.body.removeChild(this.container);
        document.removeEventListener('keydown', this.handleEscKeyClick, false);
      }
    }, {
      key: "render",
      value: function render() {
        if (!_exenv.canUseDOM) {
          return null;
        }

        if (!this.container) {
          this.container = document.createElement('div');
        }

        return _reactDom2["default"].createPortal(_react2["default"].createElement(_AboutModalContainer2["default"], _extends({}, this.props, {
          ariaLabelledbyId: this.ariaLabelledbyId,
          ariaDescribedById: this.ariaDescribedById
        })), this.container);
      }
    }]);

    return AboutModal;
  }(_react2["default"].Component);

  _defineProperty(AboutModal, "propTypes", propTypes);

  _defineProperty(AboutModal, "defaultProps", defaultProps);

  exports["default"] = AboutModal;
});