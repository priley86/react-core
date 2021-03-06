"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Page/page.css.js", "@patternfly/react-styles", "prop-types", "@patternfly/react-icons", "../../components/Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Page/page.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("@patternfly/react-icons"), require("../../components/Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.pageCss, global.reactStyles, global.propTypes, global.reactIcons, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _pageCss, _reactStyles, _propTypes, _reactIcons, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _pageCss2 = _interopRequireDefault(_pageCss);

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
    /** Additional classes added to the page header */
    className: _propTypes2["default"].string,

    /** Component to render the logo/brand (e.g. <Brand />) */
    logo: _propTypes2["default"].node,

    /** Additional props passed to the logo anchor container */
    logoProps: _propTypes2["default"].object,

    /** Component to render the toolbar (e.g. <Toolbar />) */
    toolbar: _propTypes2["default"].node,

    /** Component to render the avatar (e.g. <Avatar /> */
    avatar: _propTypes2["default"].node,

    /** Component to render navigation within the header (e.g. <Nav /> */
    topNav: _propTypes2["default"].node,

    /** True to show the nav toggle button (toggles side nav) */
    showNavToggle: _propTypes2["default"].bool,

    /** Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
    onNavToggle: _propTypes2["default"].func,

    /** True if the side nav is shown  */
    isNavOpen: _propTypes2["default"].bool,

    /** Callback function to handle the side nav toggle button */
    'aria-label': _propTypes2["default"].string,

    /** Additional props are spread to the container <header> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    logo: null,
    logoProps: null,
    toolbar: null,
    avatar: null,
    topNav: null,
    showNavToggle: false,
    isNavOpen: true,
    onNavToggle: function onNavToggle() {
      return undefined;
    },
    'aria-label': 'Global navigation'
  };

  var PageHeader = function PageHeader(_ref) {
    var className = _ref.className,
        logo = _ref.logo,
        logoProps = _ref.logoProps,
        toolbar = _ref.toolbar,
        avatar = _ref.avatar,
        topNav = _ref.topNav,
        isNavOpen = _ref.isNavOpen,
        showNavToggle = _ref.showNavToggle,
        onNavToggle = _ref.onNavToggle,
        ariaLabel = _ref['aria-label'],
        props = _objectWithoutProperties(_ref, ["className", "logo", "logoProps", "toolbar", "avatar", "topNav", "isNavOpen", "showNavToggle", "onNavToggle", "aria-label"]);

    return _react2["default"].createElement("header", _extends({
      role: "banner",
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeader, className)
    }, props), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeaderBrand)
    }, showNavToggle && _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeaderBrandToggle)
    }, _react2["default"].createElement(_Button.Button, {
      id: "nav-toggle",
      onClick: onNavToggle,
      "aria-label": ariaLabel,
      "aria-controls": "page-sidebar",
      "aria-expanded": isNavOpen ? 'true' : 'false',
      variant: _Button.ButtonVariant.plain
    }, _react2["default"].createElement(_reactIcons.BarsIcon, null))), _react2["default"].createElement("a", _extends({
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeaderBrandLink)
    }, logoProps), logo)), topNav && _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeaderNav)
    }, topNav), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageHeaderTools)
    }, toolbar, avatar));
  };

  PageHeader.propTypes = propTypes;
  PageHeader.defaultProps = defaultProps;
  exports["default"] = PageHeader;
});