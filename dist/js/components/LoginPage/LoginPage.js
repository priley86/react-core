"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Login = _interopRequireDefault(require("./Login"));

var _LoginHeader = _interopRequireDefault(require("./LoginHeader"));

var _LoginFooter = _interopRequireDefault(require("./LoginFooter"));

var _LoginMainHeader = _interopRequireDefault(require("./LoginMainHeader"));

var _LoginMainBody = _interopRequireDefault(require("./LoginMainBody"));

var _LoginMainFooter = _interopRequireDefault(require("./LoginMainFooter"));

var _BackgroundImage = require("../BackgroundImage");

var _Brand = require("../Brand");

var _List = require("../List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginListVariant = {
  grid: 'grid',
  inline: 'inline'
};
var propTypes = {
  /** Anything that can be rendered inside of the LoginPage (e.g. <LoginPageForm>) */
  children: _propTypes["default"].node,

  /** Additional classes added to the LoginPage. */
  className: _propTypes["default"].string,

  /** Attribute that specifies the URL of the brand image for the LoginPage */
  brandImgSrc: _propTypes["default"].string,

  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  brandImgAlt: _propTypes["default"].string,

  /** Attribute that specifies the URL of the background image for the LoginPage */
  backgroundImgSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    xs: _propTypes["default"].string,
    xs2x: _propTypes["default"].string,
    sm: _propTypes["default"].string,
    sm2x: _propTypes["default"].string,
    lg: _propTypes["default"].string,
    filter: _propTypes["default"].string
  })]),

  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  backgroundImgAlt: _propTypes["default"].string,

  /** Content rendered inside of the Text Component of the LoginPage */
  textContent: _propTypes["default"].string,

  /** Items rendered inside of the Footer List Component of the LoginPage */
  footerListItems: _propTypes["default"].node,

  /** Adds list variant styles for the Footer List component of the LoginPage.  Values are 'grid' or 'inline' */
  footerListVariants: _propTypes["default"].oneOf(Object.values(LoginListVariant)),

  /** Title for the Login Main Body Header of the LoginPage */
  loginTitle: _propTypes["default"].string.isRequired,

  /** Subtitle for the Login Main Body Header of the LoginPage */
  loginSubtitle: _propTypes["default"].string,

  /** Content rendered inside of Login Main Footer Band to display a sign up for account message */
  signUpForAccountMessage: _propTypes["default"].node,

  /** Content rendered inside of Login Main Footer Band do display a forgot credentials link* */
  forgotCredentials: _propTypes["default"].node,

  /** Content rendered inside of Social Media Login footer section . */
  socialMediaLoginContent: _propTypes["default"].node,

  /** Additional props are spread to the Login component */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  brandImgSrc: '',
  brandImgAlt: '',
  backgroundImgSrc: '',
  backgroundImgAlt: '',
  footerListItems: null,
  textContent: '',
  footerListVariants: null,
  signUpForAccountMessage: null,
  forgotCredentials: null,
  socialMediaLoginContent: null
};

var LoginPage = function LoginPage(_ref) {
  var className = _ref.className,
      children = _ref.children,
      brandImgSrc = _ref.brandImgSrc,
      brandImgAlt = _ref.brandImgAlt,
      backgroundImgSrc = _ref.backgroundImgSrc,
      backgroundImgAlt = _ref.backgroundImgAlt,
      textContent = _ref.textContent,
      footerListItems = _ref.footerListItems,
      footerListVariants = _ref.footerListVariants,
      loginTitle = _ref.loginTitle,
      loginSubtitle = _ref.loginSubtitle,
      signUpForAccountMessage = _ref.signUpForAccountMessage,
      forgotCredentials = _ref.forgotCredentials,
      socialMediaLoginContent = _ref.socialMediaLoginContent,
      props = _objectWithoutProperties(_ref, ["className", "children", "brandImgSrc", "brandImgAlt", "backgroundImgSrc", "backgroundImgAlt", "textContent", "footerListItems", "footerListVariants", "loginTitle", "loginSubtitle", "signUpForAccountMessage", "forgotCredentials", "socialMediaLoginContent"]);

  var HeaderBrand = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Brand.Brand, {
    src: brandImgSrc,
    alt: brandImgAlt
  }));

  var Header = _react["default"].createElement(_LoginHeader["default"], {
    headerBrand: HeaderBrand
  });

  var Footer = _react["default"].createElement(_LoginFooter["default"], null, _react["default"].createElement("p", null, textContent), _react["default"].createElement(_List.List, {
    variant: footerListVariants
  }, footerListItems));

  return _react["default"].createElement(_react["default"].Fragment, null, backgroundImgSrc && _react["default"].createElement(_BackgroundImage.BackgroundImage, {
    src: backgroundImgSrc,
    alt: backgroundImgAlt
  }), _react["default"].createElement(_Login["default"], _extends({
    header: Header,
    footer: Footer
  }, props, {
    className: (0, _reactStyles.css)(className)
  }), _react["default"].createElement(_LoginMainHeader["default"], {
    title: loginTitle,
    subtitle: loginSubtitle
  }), _react["default"].createElement(_LoginMainBody["default"], null, children), (socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && _react["default"].createElement(_LoginMainFooter["default"], {
    socialMediaLoginContent: socialMediaLoginContent,
    forgotCredentials: forgotCredentials,
    signUpForAccountMessage: signUpForAccountMessage
  })));
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
var _default = LoginPage;
exports["default"] = _default;