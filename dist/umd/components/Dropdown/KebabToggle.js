"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-icons", "./Toggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-icons"), require("./Toggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactIcons, global.Toggle);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactIcons, _Toggle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Toggle2 = _interopRequireDefault(_Toggle);

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

  var defaultAriaLabel = 'Actions';

  var Kebab = function Kebab(_ref) {
    var props = _extends({}, _ref);

    return _react2["default"].createElement(_Toggle2["default"], props, _react2["default"].createElement(_reactIcons.EllipsisVIcon, null));
  };

  Kebab.propTypes = {
    /** HTML ID of dropdown toggle */
    id: _propTypes2["default"].string,

    /** Anything which can be rendered as dropdown toggle */
    children: _propTypes2["default"].node,

    /** Classess applied to root element of dropdown toggle */
    className: _propTypes2["default"].string,

    /** Flag to indicate if menu is opened */
    isOpen: _propTypes2["default"].bool,

    /** Label Toggle button */
    'aria-label': _propTypes2["default"].string,

    /** Callback called when toggle is clicked */
    onToggle: _propTypes2["default"].func,

    /** Element which wraps toggle */
    parentRef: _propTypes2["default"].any,

    /** Forces focus state */
    isFocused: _propTypes2["default"].bool,

    /** Forces hover state */
    isHovered: _propTypes2["default"].bool,

    /** Forces active state */
    isActive: _propTypes2["default"].bool,

    /** Disables the dropdown toggle */
    isDisabled: _propTypes2["default"].bool,

    /** Display the toggle with no border or background */
    isPlain: _propTypes2["default"].bool,

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  Kebab.defaultProps = {
    id: '',
    children: null,
    className: '',
    isOpen: false,
    'aria-label': defaultAriaLabel,
    parentRef: null,
    isFocused: false,
    isHovered: false,
    isActive: false,
    isPlain: false,
    isDisabled: false,
    onToggle: Function.prototype
  };
  exports["default"] = Kebab;
});