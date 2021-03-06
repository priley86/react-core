function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ModalBoxBody from './ModalBoxBody';
import ModalBoxHeader from './ModalBoxHeader';
import ModalBoxHCloseButton from './ModalBoxCloseButton';
import ModalBox from './ModalBox';
import ModalBoxFooter from './ModalBoxFooter';
import Backdrop from '../Backdrop/Backdrop';
import bullseyeStyle from "../../@patternfly/patternfly/layouts/Bullseye/bullseye.css.js";
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** content rendered inside the Modal. */
  children: PropTypes.node.isRequired,

  /** additional classes added to the button */
  className: PropTypes.string,

  /** Flag to show the modal */
  isOpen: PropTypes.bool,

  /** Content of the Modal Header */
  title: PropTypes.string.isRequired,

  /** Flag to show the title */
  hideTitle: PropTypes.bool,

  /** Content of the Modal Footer */
  actions: PropTypes.any,

  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,

  /** Default width of the Modal. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Creates a large version of the Modal */
  isLarge: PropTypes.bool,

  /** Creates a small version of the Modal */
  isSmall: PropTypes.bool,

  /** id to use for Modal Box description */
  ariaDescribedById: PropTypes.string,

  /** id of the ModalBoxBody */
  id: PropTypes.string.isRequired,

  /** Additional props are spread to the ModalBoxBody component */
  '': PropTypes.any
};
var defaultProps = {
  width: null,
  className: '',
  isOpen: false,
  hideTitle: false,
  actions: [],
  onClose: function onClose() {
    return undefined;
  },
  isLarge: false,
  isSmall: false,
  ariaDescribedById: ''
};

var ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      title = _ref.title,
      hideTitle = _ref.hideTitle,
      actions = _ref.actions,
      onClose = _ref.onClose,
      isLarge = _ref.isLarge,
      isSmall = _ref.isSmall,
      width = _ref.width,
      ariaDescribedById = _ref.ariaDescribedById,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["children", "className", "isOpen", "title", "hideTitle", "actions", "onClose", "isLarge", "isSmall", "width", "ariaDescribedById", "id"]);

  var modalBoxHeader = React.createElement(ModalBoxHeader, {
    hideTitle: hideTitle
  }, " ", title, " ");
  var modalBoxFooter = actions.length > 0 && React.createElement(ModalBoxFooter, null, " ", actions, " ");

  if (!isOpen) {
    return null;
  }

  return React.createElement(Backdrop, null, React.createElement(FocusTrap, {
    focusTrapOptions: {
      clickOutsideDeactivates: true
    },
    className: css(bullseyeStyle.bullseye)
  }, React.createElement(ModalBox, {
    style: {
      width: width
    },
    className: className,
    isLarge: isLarge,
    isSmall: isSmall,
    title: title,
    id: ariaDescribedById || id
  }, React.createElement(ModalBoxHCloseButton, {
    onClose: onClose
  }), modalBoxHeader, React.createElement(ModalBoxBody, _extends({}, props, {
    id: id
  }), children), modalBoxFooter)));
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;
export default ModalContent;