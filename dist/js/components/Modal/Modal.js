"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _exenv = require("exenv");

var _constants = require("../../helpers/constants");

var _reactStyles = require("@patternfly/react-styles");

var _backdropCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Backdrop/backdrop.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /** content rendered inside the Modal. */
  children: _propTypes["default"].node.isRequired,

  /** additional classes added to the Modal */
  className: _propTypes["default"].string,

  /** Flag to show the modal */
  isOpen: _propTypes["default"].bool,

  /** Content of the Modal Header */
  title: _propTypes["default"].string.isRequired,

  /** Flag to show the title */
  hideTitle: _propTypes["default"].bool,

  /** id to use for Modal Box description */
  ariaDescribedById: _propTypes["default"].string,

  /** Action buttons to put in the Modal Footer */
  actions: _propTypes["default"].any,

  /** A callback for when the close button is clicked */
  onClose: _propTypes["default"].func,

  /** Default width of the Modal. */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Creates a large version of the Modal */
  isLarge: _propTypes["default"].bool,

  /** Creates a small version of the Modal */
  isSmall: _propTypes["default"].bool,

  /** Additional props are passed and spread in the Modal body container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  width: null,
  className: '',
  isOpen: false,
  hideTitle: false,
  ariaDescribedById: '',
  actions: [],
  onClose: function onClose() {
    return undefined;
  },
  isLarge: false,
  isSmall: false
};
var currentId = 0;

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "id", "pf-modal-".concat(currentId++));

    _defineProperty(_assertThisInitialized(_this), "handleEscKeyClick", function (event) {
      if (event.keyCode === _constants.KEY_CODES.ESCAPE_KEY && _this.props.isOpen) {
        _this.props.onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSiblingsFromScreenReaders", function (hide) {
      var bodyChildren = document.body.children;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = bodyChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child !== _this.container) {
            hide ? child.setAttribute('aria-hidden', hide) : child.removeAttribute('aria-hidden');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.appendChild(this.container);
      document.addEventListener('keydown', this.handleEscKeyClick, false);

      if (this.props.isOpen) {
        document.body.classList.add((0, _reactStyles.css)(_backdropCss["default"].backdropOpen));
      } else {
        document.body.classList.remove((0, _reactStyles.css)(_backdropCss["default"].backdropOpen));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        document.body.classList.add((0, _reactStyles.css)(_backdropCss["default"].backdropOpen));
        this.toggleSiblingsFromScreenReaders(true);
      } else {
        document.body.classList.remove((0, _reactStyles.css)(_backdropCss["default"].backdropOpen));
        this.toggleSiblingsFromScreenReaders(false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.container);
      document.removeEventListener('keydown', this.handleEscKeyClick, false);
      document.body.classList.remove((0, _reactStyles.css)(_backdropCss["default"].backdropOpen));
    }
  }, {
    key: "render",
    value: function render() {
      var props = _extends({}, this.props);

      if (!_exenv.canUseDOM) {
        return null;
      }

      if (!this.container) {
        this.container = document.createElement('div');
      }

      return _reactDom["default"].createPortal(_react["default"].createElement(_ModalContent["default"], _extends({}, props, {
        title: this.props.title,
        id: this.id,
        ariaDescribedById: this.props.ariaDescribedById
      })), this.container);
    }
  }]);

  return Modal;
}(_react["default"].Component);

_defineProperty(Modal, "propTypes", propTypes);

_defineProperty(Modal, "defaultProps", defaultProps);

var _default = Modal;
exports["default"] = _default;