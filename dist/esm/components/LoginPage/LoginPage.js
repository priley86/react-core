function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import Login from './Login';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import LoginMainHeader from './LoginMainHeader';
import LoginMainBody from './LoginMainBody';
import LoginMainFooter from './LoginMainFooter';
import { BackgroundImage } from '../BackgroundImage';
import { Brand } from '../Brand';
import { List } from '../List';
var LoginListVariant = {
  grid: 'grid',
  inline: 'inline'
};
var propTypes = {
  /** Anything that can be rendered inside of the LoginPage (e.g. <LoginPageForm>) */
  children: PropTypes.node,

  /** Additional classes added to the LoginPage. */
  className: PropTypes.string,

  /** Attribute that specifies the URL of the brand image for the LoginPage */
  brandImgSrc: PropTypes.string,

  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  brandImgAlt: PropTypes.string,

  /** Attribute that specifies the URL of the background image for the LoginPage */
  backgroundImgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    xs: PropTypes.string,
    xs2x: PropTypes.string,
    sm: PropTypes.string,
    sm2x: PropTypes.string,
    lg: PropTypes.string,
    filter: PropTypes.string
  })]),

  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  backgroundImgAlt: PropTypes.string,

  /** Content rendered inside of the Text Component of the LoginPage */
  textContent: PropTypes.string,

  /** Items rendered inside of the Footer List Component of the LoginPage */
  footerListItems: PropTypes.node,

  /** Adds list variant styles for the Footer List component of the LoginPage.  Values are 'grid' or 'inline' */
  footerListVariants: PropTypes.oneOf(Object.values(LoginListVariant)),

  /** Title for the Login Main Body Header of the LoginPage */
  loginTitle: PropTypes.string.isRequired,

  /** Subtitle for the Login Main Body Header of the LoginPage */
  loginSubtitle: PropTypes.string,

  /** Content rendered inside of Login Main Footer Band to display a sign up for account message */
  signUpForAccountMessage: PropTypes.node,

  /** Content rendered inside of Login Main Footer Band do display a forgot credentials link* */
  forgotCredentials: PropTypes.node,

  /** Content rendered inside of Social Media Login footer section . */
  socialMediaLoginContent: PropTypes.node,

  /** Additional props are spread to the Login component */
  '': PropTypes.any
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

  var HeaderBrand = React.createElement(React.Fragment, null, React.createElement(Brand, {
    src: brandImgSrc,
    alt: brandImgAlt
  }));
  var Header = React.createElement(LoginHeader, {
    headerBrand: HeaderBrand
  });
  var Footer = React.createElement(LoginFooter, null, React.createElement("p", null, textContent), React.createElement(List, {
    variant: footerListVariants
  }, footerListItems));
  return React.createElement(React.Fragment, null, backgroundImgSrc && React.createElement(BackgroundImage, {
    src: backgroundImgSrc,
    alt: backgroundImgAlt
  }), React.createElement(Login, _extends({
    header: Header,
    footer: Footer
  }, props, {
    className: css(className)
  }), React.createElement(LoginMainHeader, {
    title: loginTitle,
    subtitle: loginSubtitle
  }), React.createElement(LoginMainBody, null, children), (socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && React.createElement(LoginMainFooter, {
    socialMediaLoginContent: socialMediaLoginContent,
    forgotCredentials: forgotCredentials,
    signUpForAccountMessage: signUpForAccountMessage
  })));
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
export default LoginPage;