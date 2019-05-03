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

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js";
import { Chip } from '@patternfly/react-core';
import { fillTemplate } from '../../helpers';

var ChipGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChipGroup, _React$Component);

  function ChipGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChipGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChipGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    return _this;
  }

  _createClass(ChipGroup, [{
    key: "renderToolbarGroup",
    value: function renderToolbarGroup() {
      var isOpen = this.state.isOpen;
      return React.createElement(InnerChipGroup, _extends({}, this.props, {
        isOpen: isOpen,
        onToggleCollapse: this.toggleCollapse
      }));
    }
  }, {
    key: "renderChipGroup",
    value: function renderChipGroup() {
      var className = this.props.className;
      var isOpen = this.state.isOpen;
      return React.createElement("ul", {
        className: css(styles.chipGroup, className)
      }, React.createElement(InnerChipGroup, _extends({}, this.props, {
        isOpen: isOpen,
        onToggleCollapse: this.toggleCollapse
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          withToolbar = _this$props.withToolbar,
          children = _this$props.children;

      if (React.Children.count(children)) {
        return withToolbar ? this.renderToolbarGroup() : this.renderChipGroup();
      }

      return null;
    }
  }]);

  return ChipGroup;
}(React.Component);

var InnerChipGroup = function InnerChipGroup(props) {
  var children = props.children,
      expandedText = props.expandedText,
      isOpen = props.isOpen,
      onToggleCollapse = props.onToggleCollapse,
      collapsedText = props.collapsedText,
      withToolbar = props.withToolbar;
  var collapsedTextResult = fillTemplate(collapsedText, {
    remaining: React.Children.count(children) - 1
  });
  var mappedChildren = React.Children.map(children, function (child) {
    if (withToolbar) return React.cloneElement(child, {
      children: child.props.children.map(function (chip) {
        return React.cloneElement(chip, {
          component: 'li'
        });
      })
    });
    return React.cloneElement(child, {
      component: 'li'
    });
  });
  return React.createElement(React.Fragment, null, isOpen ? React.createElement(React.Fragment, null, mappedChildren) : React.createElement(React.Fragment, null, mappedChildren.map(function (child, i) {
    if (i === 0) return child;
  })), React.Children.count(children) > 1 && React.createElement(Chip, {
    isOverflowChip: true,
    onClick: onToggleCollapse,
    component: withToolbar ? 'div' : 'li'
  }, isOpen ? expandedText : collapsedTextResult));
};

ChipGroup.propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.node,

  /** Additional classes added to the chip item */
  className: PropTypes.string,

  /** Customizable "Show Less" text string */
  expandedText: PropTypes.string,

  /**
   * Customizeable template string. Use variable "${remaining}" for the overflow chip count.
   */
  collapsedText: PropTypes.string,

  /** Flag for grouping with a toolbar & category name */
  withToolbar: PropTypes.bool
};
ChipGroup.defaultProps = {
  children: null,
  className: '',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
  withToolbar: false
};
export default ChipGroup;