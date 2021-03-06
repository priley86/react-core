"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js", "../../@patternfly/patternfly/components/Title/title.css.js", "../../@patternfly/patternfly/components/Content/content.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js"), require("../../@patternfly/patternfly/components/Title/title.css.js"), require("../../@patternfly/patternfly/components/Content/content.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.aboutModalBoxCss, global.titleCss, global.contentCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _aboutModalBoxCss, _titleCss, _contentCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _aboutModalBoxCss2 = _interopRequireDefault(_aboutModalBoxCss);

  var _titleCss2 = _interopRequireDefault(_titleCss);

  var _contentCss2 = _interopRequireDefault(_contentCss);

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
    /** content rendered inside the AboutModalBoxContent */
    children: _propTypes2["default"].node.isRequired,

    /** additional classes added to the AboutModalBoxContent */
    className: _propTypes2["default"].string,

    /** id to use for About Modal Box aria described by */
    id: _propTypes2["default"].string.isRequired,

    /** The Trademark info for the product */
    trademark: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: ''
  };

  var AboutModalBoxContent = function AboutModalBoxContent(_ref) {
    var children = _ref.children,
        className = _ref.className,
        trademark = _ref.trademark,
        id = _ref.id,
        noAboutModalBoxContentContainer = _ref.noAboutModalBoxContentContainer,
        props = _objectWithoutProperties(_ref, ["children", "className", "trademark", "id", "noAboutModalBoxContentContainer"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_aboutModalBoxCss2["default"].aboutModalBoxContent, className),
      id: id
    }), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)('pf-c-about-modal-box__body')
    }, noAboutModalBoxContentContainer ? children : _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_contentCss2["default"].content)
    }, children)), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_aboutModalBoxCss2["default"].aboutModalBoxStrapline)
    }, _react2["default"].createElement("p", {
      className: (0, _reactStyles.css)(_titleCss2["default"].title, _titleCss2["default"].modifiers.md)
    }, trademark)));
  };

  AboutModalBoxContent.propTypes = propTypes;
  AboutModalBoxContent.defaultProps = defaultProps;
  exports["default"] = AboutModalBoxContent;
});