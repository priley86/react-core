"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../Form", "../TextInput", "../Button", "../Checkbox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../Form"), require("../TextInput"), require("../Button"), require("../Checkbox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Form, global.TextInput, global.Button, global.Checkbox);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _Form, _TextInput, _Button, _Checkbox) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var propTypes = {
    /** Additional classes added to the Login Main Body's Form */
    className: _propTypes2["default"].string,

    /** Flag indicating the Helper Text is visible * */
    showHelperText: _propTypes2["default"].bool,

    /** Content displayed in the Helper Text component * */
    helperText: _propTypes2["default"].node,

    /** Label for the Username Input Field */
    usernameLabel: _propTypes2["default"].string,

    /** Value for the Username */
    usernameValue: _propTypes2["default"].string,

    /** Function that handles the onChange event for the Username */
    onChangeUsername: _propTypes2["default"].func,

    /** Flag indicating if the Username is valid */
    isValidUsername: _propTypes2["default"].bool,

    /** Label for the Password Input Field */
    passwordLabel: _propTypes2["default"].string,

    /** Value for the Password */
    passwordValue: _propTypes2["default"].string,

    /** Function that handles the onChange event for the Password */
    onChangePassword: _propTypes2["default"].func,

    /** Flag indicating if the Password is valid */
    isValidPassword: _propTypes2["default"].bool,

    /** Label for the Log in Button Input */
    loginButtonLabel: _propTypes2["default"].string,

    /** Flag indicating if the Login Button is disabled */
    isLoginButtonDisabled: _propTypes2["default"].bool,

    /** Function that is called when the Login button is clicked */
    onLoginButtonClick: _propTypes2["default"].func,

    /** Label for the Remember Me Checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
    rememberMeLabel: _propTypes2["default"].string,

    /** Flag indicating if the remember me Checkbox is checked. */
    isRememberMeChecked: _propTypes2["default"].bool,

    /** Function that handles the onChange event for the Remember Me Checkbox */
    onChangeRememberMe: _propTypes2["default"].func,

    /** Aria Label for the Remember me checkbox */
    rememberMeAriaLabel: function rememberMeAriaLabel(props) {
      if (props.rememberMeLabel && !props.rememberMeAriaLabel) {
        return new Error('rememberMeAriaLabel is required with the Remember me checkbox');
      }

      return null;
    },

    /** Additional props are spread to the Form component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    showHelperText: false,
    helperText: null,
    usernameLabel: 'Username',
    usernameValue: '',
    onChangeUsername: function onChangeUsername() {
      return undefined;
    },
    isValidUsername: true,
    passwordLabel: 'Password',
    passwordValue: '',
    onChangePassword: function onChangePassword() {
      return undefined;
    },
    isValidPassword: true,
    loginButtonLabel: 'Log In',
    isLoginButtonDisabled: false,
    onLoginButtonClick: function onLoginButtonClick() {
      return undefined;
    },
    rememberMeLabel: '',
    isRememberMeChecked: false,
    onChangeRememberMe: function onChangeRememberMe() {
      return undefined;
    },
    rememberMeAriaLabel: ''
  };

  var LoginForm = function LoginForm(_ref) {
    var className = _ref.className,
        showHelperText = _ref.showHelperText,
        helperText = _ref.helperText,
        usernameLabel = _ref.usernameLabel,
        usernameValue = _ref.usernameValue,
        onChangeUsername = _ref.onChangeUsername,
        isValidUsername = _ref.isValidUsername,
        passwordLabel = _ref.passwordLabel,
        passwordValue = _ref.passwordValue,
        onChangePassword = _ref.onChangePassword,
        isValidPassword = _ref.isValidPassword,
        loginButtonLabel = _ref.loginButtonLabel,
        isLoginButtonDisabled = _ref.isLoginButtonDisabled,
        onLoginButtonClick = _ref.onLoginButtonClick,
        rememberMeLabel = _ref.rememberMeLabel,
        isRememberMeChecked = _ref.isRememberMeChecked,
        onChangeRememberMe = _ref.onChangeRememberMe,
        rememberMeAriaLabel = _ref.rememberMeAriaLabel,
        props = _objectWithoutProperties(_ref, ["className", "showHelperText", "helperText", "usernameLabel", "usernameValue", "onChangeUsername", "isValidUsername", "passwordLabel", "passwordValue", "onChangePassword", "isValidPassword", "loginButtonLabel", "isLoginButtonDisabled", "onLoginButtonClick", "rememberMeLabel", "isRememberMeChecked", "onChangeRememberMe", "rememberMeAriaLabel"]);

    return _react2["default"].createElement(_Form.Form, _extends({
      className: className
    }, props), _react2["default"].createElement(_Form.FormHelperText, {
      isError: !isValidUsername || !isValidPassword,
      isHidden: !showHelperText
    }, helperText), _react2["default"].createElement(_Form.FormGroup, {
      label: usernameLabel,
      isRequired: true,
      isValid: isValidUsername,
      fieldId: "pf-login-username-id"
    }, _react2["default"].createElement(_TextInput.TextInput, {
      id: "pf-login-username-id",
      isRequired: true,
      isValid: isValidUsername,
      type: "text",
      name: "pf-login-username-id",
      value: usernameValue,
      onChange: onChangeUsername
    })), _react2["default"].createElement(_Form.FormGroup, {
      label: passwordLabel,
      isRequired: true,
      isValid: isValidPassword,
      fieldId: "pf-login-password-id"
    }, _react2["default"].createElement(_TextInput.TextInput, {
      isRequired: true,
      type: "password",
      id: "pf-login-password-id",
      name: "pf-login-password-id",
      isValid: isValidPassword,
      value: passwordValue,
      onChange: onChangePassword
    })), rememberMeLabel.length > 0 && _react2["default"].createElement(_Form.FormGroup, {
      fieldId: "pf-login-remember-me-id"
    }, _react2["default"].createElement(_Checkbox.Checkbox, {
      id: "pf-login-remember-me-id",
      label: rememberMeLabel,
      checked: isRememberMeChecked,
      onChange: onChangeRememberMe,
      "aria-label": rememberMeAriaLabel
    })), _react2["default"].createElement(_Form.ActionGroup, null, _react2["default"].createElement(_Button.Button, {
      variant: "primary",
      type: "submit",
      onClick: onLoginButtonClick,
      isBlock: true,
      isDisabled: isLoginButtonDisabled
    }, loginButtonLabel)));
  };

  LoginForm.propTypes = propTypes;
  LoginForm.defaultProps = defaultProps;
  exports["default"] = LoginForm;
});