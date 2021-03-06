"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./DropdownItem", "../../helpers/componentShape", "./dropdownConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./DropdownItem"), require("../../helpers/componentShape"), require("./dropdownConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.DropdownItem, global.componentShape, global.dropdownConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _DropdownItem, _componentShape, _dropdownConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

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

  var Item = function Item(_ref) {
    var className = _ref.className,
        props = _objectWithoutProperties(_ref, ["className"]);

    return _react2["default"].createElement(_dropdownConstants.DropdownArrowContext.Consumer, null, function (context) {
      return _react2["default"].createElement(_DropdownItem2["default"], _extends({}, props, {
        context: context,
        role: "menuitem",
        tabIndex: -1
      }));
    });
  };

  Item.propTypes = {
    /** Anything which can be rendered as dropdown item */
    children: _propTypes2["default"].node,

    /** Classess applied to root element of dropdown item */
    className: _propTypes2["default"].string,

    /** Indicates which component will be used as dropdown item */
    component: _componentShape.componentShape,

    /** Render dropdown item as disabled option */
    isDisabled: _propTypes2["default"].bool,

    /** Forces display of the hover state of the element */
    isHovered: _propTypes2["default"].bool,

    /** Default hyperlink location */
    href: _propTypes2["default"].string,

    /** Additional props are passed to the DropdownItem */
    '': _propTypes2["default"].any
  };
  Item.defaultProps = {
    children: null,
    className: '',
    isHovered: false,
    component: 'a',
    isDisabled: false,
    href: '#'
  };
  exports["default"] = Item;
});