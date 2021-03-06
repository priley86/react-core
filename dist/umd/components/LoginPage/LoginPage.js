"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "./Login", "./LoginHeader", "./LoginFooter", "./LoginMainHeader", "./LoginMainBody", "./LoginMainFooter", "../BackgroundImage", "../Brand", "../List"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("./Login"), require("./LoginHeader"), require("./LoginFooter"), require("./LoginMainHeader"), require("./LoginMainBody"), require("./LoginMainFooter"), require("../BackgroundImage"), require("../Brand"), require("../List"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.Login, global.LoginHeader, global.LoginFooter, global.LoginMainHeader, global.LoginMainBody, global.LoginMainFooter, global.BackgroundImage, global.Brand, global.List);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _Login, _LoginHeader, _LoginFooter, _LoginMainHeader, _LoginMainBody, _LoginMainFooter, _BackgroundImage, _Brand, _List) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Login2 = _interopRequireDefault(_Login);

  var _LoginHeader2 = _interopRequireDefault(_LoginHeader);

  var _LoginFooter2 = _interopRequireDefault(_LoginFooter);

  var _LoginMainHeader2 = _interopRequireDefault(_LoginMainHeader);

  var _LoginMainBody2 = _interopRequireDefault(_LoginMainBody);

  var _LoginMainFooter2 = _interopRequireDefault(_LoginMainFooter);

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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var LoginListVariant = {
    grid: 'grid',
    inline: 'inline'
  };
  var propTypes = {
    /** Anything that can be rendered inside of the LoginPage (e.g. <LoginPageForm>) */
    children: _propTypes2["default"].node,

    /** Additional classes added to the LoginPage. */
    className: _propTypes2["default"].string,

    /** Attribute that specifies the URL of the brand image for the LoginPage */
    brandImgSrc: _propTypes2["default"].string,

    /** Attribute that specifies the alt text of the brand image for the LoginPage. */
    brandImgAlt: _propTypes2["default"].string,

    /** Attribute that specifies the URL of the background image for the LoginPage */
    backgroundImgSrc: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
      xs: _propTypes2["default"].string,
      xs2x: _propTypes2["default"].string,
      sm: _propTypes2["default"].string,
      sm2x: _propTypes2["default"].string,
      lg: _propTypes2["default"].string,
      filter: _propTypes2["default"].string
    })]),

    /** Attribute that specifies the alt text of the background image for the LoginPage. */
    backgroundImgAlt: _propTypes2["default"].string,

    /** Content rendered inside of the Text Component of the LoginPage */
    textContent: _propTypes2["default"].string,

    /** Items rendered inside of the Footer List Component of the LoginPage */
    footerListItems: _propTypes2["default"].node,

    /** Adds list variant styles for the Footer List component of the LoginPage.  Values are 'grid' or 'inline' */
    footerListVariants: _propTypes2["default"].oneOf(Object.values(LoginListVariant)),

    /** Title for the Login Main Body Header of the LoginPage */
    loginTitle: _propTypes2["default"].string.isRequired,

    /** Subtitle for the Login Main Body Header of the LoginPage */
    loginSubtitle: _propTypes2["default"].string,

    /** Content rendered inside of Login Main Footer Band to display a sign up for account message */
    signUpForAccountMessage: _propTypes2["default"].node,

    /** Content rendered inside of Login Main Footer Band do display a forgot credentials link* */
    forgotCredentials: _propTypes2["default"].node,

    /** Content rendered inside of Social Media Login footer section . */
    socialMediaLoginContent: _propTypes2["default"].node,

    /** Additional props are spread to the Login component */
    '': _propTypes2["default"].any
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

    var HeaderBrand = _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Brand.Brand, {
      src: brandImgSrc,
      alt: brandImgAlt
    }));

    var Header = _react2["default"].createElement(_LoginHeader2["default"], {
      headerBrand: HeaderBrand
    });

    var Footer = _react2["default"].createElement(_LoginFooter2["default"], null, _react2["default"].createElement("p", null, textContent), _react2["default"].createElement(_List.List, {
      variant: footerListVariants
    }, footerListItems));

    return _react2["default"].createElement(_react2["default"].Fragment, null, backgroundImgSrc && _react2["default"].createElement(_BackgroundImage.BackgroundImage, {
      src: backgroundImgSrc,
      alt: backgroundImgAlt
    }), _react2["default"].createElement(_Login2["default"], _extends({
      header: Header,
      footer: Footer
    }, props, {
      className: (0, _reactStyles.css)(className)
    }), _react2["default"].createElement(_LoginMainHeader2["default"], {
      title: loginTitle,
      subtitle: loginSubtitle
    }), _react2["default"].createElement(_LoginMainBody2["default"], null, children), (socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && _react2["default"].createElement(_LoginMainFooter2["default"], {
      socialMediaLoginContent: socialMediaLoginContent,
      forgotCredentials: forgotCredentials,
      signUpForAccountMessage: signUpForAccountMessage
    })));
  };

  LoginPage.propTypes = propTypes;
  LoginPage.defaultProps = defaultProps;
  exports["default"] = LoginPage;
});