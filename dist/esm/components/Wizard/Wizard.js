import _pt from "prop-types";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
import { Backdrop } from '../Backdrop';
import { Bullseye } from '../../layouts/Bullseye';
import { WizardHeader } from './WizardHeader';
import { WizardFooterInternal } from './WizardFooter';
import { WizardToggle } from './WizardToggle';
import { WizardNav } from './WizardNav';
import { WizardNavItem } from './WizardNavItem';
import { WizardContextProvider } from './WizardContext'; // Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line

var FocusTrap = require('focus-trap-react');

export var Wizard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wizard, _React$Component);

  function Wizard(props) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "container", undefined);

    _defineProperty(_assertThisInitialized(_this), "titleId", "pf-wizard-title-0");

    _defineProperty(_assertThisInitialized(_this), "descriptionId", "pf-wizard-description-0");

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentStep: _this.props.startAtStep && Number.isInteger(_this.props.startAtStep) ? _this.props.startAtStep : 1,
      isNavOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyClicks", function (event) {
      if (event.keyCode === KEY_CODES.ESCAPE_KEY) {
        if (_this.state.isNavOpen) {
          _this.setState({
            isNavOpen: !_this.state.isNavOpen
          });
        } else if (_this.props.isOpen) {
          _this.props.onClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSiblingsFromScreenReaders", function (hide) {
      var bodyChildren = document.body.children;

      for (var _i = 0, _Array$from = Array.from(bodyChildren); _i < _Array$from.length; _i++) {
        var child = _Array$from[_i];

        if (child !== _this.container) {
          hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNext", function () {
      var _this$props = _this.props,
          onNext = _this$props.onNext,
          onClose = _this$props.onClose,
          onSave = _this$props.onSave;
      var currentStep = _this.state.currentStep;

      var flattenedSteps = _this.getFlattenedSteps();

      var maxSteps = flattenedSteps.length;

      if (currentStep >= maxSteps) {
        // Hit the save button at the end of the wizard
        if (onSave) {
          return onSave();
        }

        return onClose();
      } else {
        var _newStep = currentStep + 1;

        _this.setState({
          currentStep: _newStep
        });

        var _flattenedSteps = flattenedSteps[currentStep - 1],
            prevId = _flattenedSteps.id,
            prevName = _flattenedSteps.name;
        var _flattenedSteps2 = flattenedSteps[_newStep - 1],
            id = _flattenedSteps2.id,
            name = _flattenedSteps2.name;
        return onNext && onNext({
          id: id,
          name: name
        }, {
          prevId: prevId,
          prevName: prevName
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBack", function () {
      var onBack = _this.props.onBack;
      var currentStep = _this.state.currentStep;

      var flattenedSteps = _this.getFlattenedSteps();

      if (flattenedSteps.length < currentStep) {
        // Previous step was removed, just update the currentStep state
        var adjustedStep = flattenedSteps.length;

        _this.setState({
          currentStep: adjustedStep
        });
      } else {
        var _newStep2 = currentStep - 1 <= 0 ? 0 : currentStep - 1;

        _this.setState({
          currentStep: _newStep2
        });

        var _flattenedSteps$_newS = flattenedSteps[_newStep2],
            prevId = _flattenedSteps$_newS.id,
            prevName = _flattenedSteps$_newS.name;
        var _flattenedSteps3 = flattenedSteps[_newStep2 - 1],
            id = _flattenedSteps3.id,
            name = _flattenedSteps3.name;
        return onBack && onBack({
          id: id,
          name: name
        }, {
          prevId: prevId,
          prevName: prevName
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "goToStep", function (step) {
      var onGoToStep = _this.props.onGoToStep;
      var currentStep = _this.state.currentStep;

      var flattenedSteps = _this.getFlattenedSteps();

      var maxSteps = flattenedSteps.length;

      if (step < 1) {
        step = 1;
      } else if (step > maxSteps) {
        step = maxSteps;
      }

      _this.setState({
        currentStep: step,
        isNavOpen: false
      });

      var _flattenedSteps4 = flattenedSteps[currentStep - 1],
          prevId = _flattenedSteps4.id,
          prevName = _flattenedSteps4.name;
      var _flattenedSteps5 = flattenedSteps[step - 1],
          id = _flattenedSteps5.id,
          name = _flattenedSteps5.name;
      return onGoToStep && onGoToStep({
        id: id,
        name: name
      }, {
        prevId: prevId,
        prevName: prevName
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToStepById", function (stepId) {
      var flattenedSteps = _this.getFlattenedSteps();

      var step;

      for (var i = 0; i < flattenedSteps.length; i++) {
        if (flattenedSteps[i].id === stepId) {
          step = i + 1;
          break;
        }
      }

      step && _this.setState({
        currentStep: step
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToStepByName", function (stepName) {
      var flattenedSteps = _this.getFlattenedSteps();

      var step;

      for (var i = 0; i < flattenedSteps.length; i++) {
        if (flattenedSteps[i].name === stepName) {
          step = i + 1;
          break;
        }
      }

      step && _this.setState({
        currentStep: step
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFlattenedSteps", function () {
      var steps = _this.props.steps;
      var flattenedSteps = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var step = _step.value;

          if (step.steps) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = step.steps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var childStep = _step2.value;
                flattenedSteps.push(childStep);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            flattenedSteps.push(step);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return flattenedSteps;
    });

    _defineProperty(_assertThisInitialized(_this), "getFlattenedStepsIndex", function (flattenedSteps, stepName) {
      for (var i = 0; i < flattenedSteps.length; i++) {
        if (flattenedSteps[i].name === stepName) {
          return i + 1;
        }
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "initSteps", function (steps) {
      // Set default Step values
      for (var i = 0; i < steps.length; i++) {
        if (steps[i].steps) {
          for (var j = 0; j < steps[i].steps.length; j++) {
            steps[i].steps[j] = Object.assign({
              canJumpTo: true
            }, steps[i].steps[j]);
          }
        }

        steps[i] = Object.assign({
          canJumpTo: true
        }, steps[i]);
      }

      return steps;
    });

    var newId = Wizard.currentId++;
    _this.titleId = "pf-wizard-title-".concat(newId);
    _this.descriptionId = "pf-wizard-description-".concat(newId);
    return _this;
  }

  _createClass(Wizard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.container) {
        document.body.appendChild(this.container);
      }

      this.toggleSiblingsFromScreenReaders(true);
      document.addEventListener('keydown', this.handleKeyClicks, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.container) {
        document.body.removeChild(this.container);
      }

      this.toggleSiblingsFromScreenReaders(false);
      document.removeEventListener('keydown', this.handleKeyClicks, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!canUseDOM) {
        return null;
      }

      if (!this.container) {
        this.container = document.createElement('div');
      }

      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          isFullHeight = _this$props2.isFullHeight,
          isFullWidth = _this$props2.isFullWidth,
          width = _this$props2.width,
          height = _this$props2.height,
          title = _this$props2.title,
          description = _this$props2.description,
          onClose = _this$props2.onClose,
          onSave = _this$props2.onSave,
          onBack = _this$props2.onBack,
          onNext = _this$props2.onNext,
          onGoToStep = _this$props2.onGoToStep,
          className = _this$props2.className,
          steps = _this$props2.steps,
          startAtStep = _this$props2.startAtStep,
          _this$props2$nextButt = _this$props2.nextButtonText,
          nextButtonText = _this$props2$nextButt === void 0 ? 'Next' : _this$props2$nextButt,
          _this$props2$backButt = _this$props2.backButtonText,
          backButtonText = _this$props2$backButt === void 0 ? 'Back' : _this$props2$backButt,
          _this$props2$cancelBu = _this$props2.cancelButtonText,
          cancelButtonText = _this$props2$cancelBu === void 0 ? 'Cancel' : _this$props2$cancelBu,
          _this$props2$ariaLabe = _this$props2.ariaLabelCloseButton,
          ariaLabelCloseButton = _this$props2$ariaLabe === void 0 ? 'Close' : _this$props2$ariaLabe,
          ariaLabelNav = _this$props2.ariaLabelNav,
          hasBodyPadding = _this$props2.hasBodyPadding,
          footer = _this$props2.footer,
          isCompactNav = _this$props2.isCompactNav,
          rest = _objectWithoutProperties(_this$props2, ["isOpen", "isFullHeight", "isFullWidth", "width", "height", "title", "description", "onClose", "onSave", "onBack", "onNext", "onGoToStep", "className", "steps", "startAtStep", "nextButtonText", "backButtonText", "cancelButtonText", "ariaLabelCloseButton", "ariaLabelNav", "hasBodyPadding", "footer", "isCompactNav"]);

      var _this$state = this.state,
          currentStep = _this$state.currentStep,
          isNavOpen = _this$state.isNavOpen;
      var flattenedSteps = this.getFlattenedSteps();
      var adjustedStep = flattenedSteps.length < currentStep ? flattenedSteps.length : currentStep;
      var activeStep = flattenedSteps[adjustedStep - 1];
      var computedSteps = this.initSteps(steps);
      var firstStep = activeStep === flattenedSteps[0];
      var isValid = activeStep.enableNext !== undefined ? activeStep.enableNext : true;
      var setFullWidth = isFullWidth || width;
      var setFullHeight = isFullHeight || height;

      var nav = function nav(isWizardNavOpen) {
        return React.createElement(WizardNav, {
          isOpen: isWizardNavOpen,
          ariaLabel: ariaLabelNav
        }, computedSteps.map(function (step, index) {
          if (step.isFinishedStep) {
            // Don't show finished step in the side nav
            return;
          }

          var enabled;
          var navItemStep;

          if (step.steps) {
            var hasActiveChild = false;
            var canJumpToParent = false;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = step.steps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var subStep = _step3.value;

                if (activeStep.name === subStep.name) {
                  // one of the children matches
                  hasActiveChild = true;
                }

                if (subStep.canJumpTo) {
                  canJumpToParent = true;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            navItemStep = _this2.getFlattenedStepsIndex(flattenedSteps, step.steps[0].name);
            return React.createElement(WizardNavItem, {
              key: index,
              text: step.name,
              isCurrent: hasActiveChild,
              isDisabled: !canJumpToParent,
              step: navItemStep,
              onNavItemClick: _this2.goToStep
            }, React.createElement(WizardNav, {
              returnList: true
            }, step.steps.map(function (childStep, indexChild) {
              if (childStep.isFinishedStep) {
                // Don't show finished step in the side nav
                return;
              }

              navItemStep = _this2.getFlattenedStepsIndex(flattenedSteps, childStep.name);
              enabled = childStep.canJumpTo;
              return React.createElement(WizardNavItem, {
                key: "child_".concat(indexChild),
                text: childStep.name,
                isCurrent: activeStep.name === childStep.name,
                isDisabled: !enabled,
                step: navItemStep,
                onNavItemClick: _this2.goToStep
              });
            })));
          }

          navItemStep = _this2.getFlattenedStepsIndex(flattenedSteps, step.name);
          enabled = step.canJumpTo;
          return React.createElement(WizardNavItem, {
            key: index,
            text: step.name,
            isCurrent: activeStep.name === step.name,
            isDisabled: !enabled,
            step: navItemStep,
            onNavItemClick: _this2.goToStep
          });
        }));
      };

      var context = {
        goToStepById: this.goToStepById,
        goToStepByName: this.goToStepByName,
        onNext: this.onNext,
        onBack: this.onBack,
        onClose: onClose,
        activeStep: activeStep
      };
      return isOpen && ReactDOM.createPortal(React.createElement(FocusTrap, {
        focusTrapOptions: {
          clickOutsideDeactivates: true
        }
      }, React.createElement(Backdrop, null, React.createElement(Bullseye, null, React.createElement(WizardContextProvider, {
        value: context
      }, React.createElement("div", _extends({}, rest, {
        className: css(styles.wizard, isCompactNav && 'pf-m-compact-nav', activeStep.isFinishedStep && 'pf-m-finished', setFullWidth && styles.modifiers.fullWidth, setFullHeight && styles.modifiers.fullHeight, className),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": this.titleId,
        "aria-describedby": description ? this.descriptionId : undefined
      }), React.createElement(WizardHeader, {
        titleId: this.titleId,
        descriptionId: this.descriptionId,
        onClose: onClose,
        title: title,
        description: description,
        ariaLabelCloseButton: ariaLabelCloseButton
      }), React.createElement(WizardToggle, {
        isNavOpen: isNavOpen,
        onNavToggle: function onNavToggle(isNavOpen) {
          return _this2.setState({
            isNavOpen: isNavOpen
          });
        },
        nav: nav,
        steps: steps,
        activeStep: activeStep,
        hasBodyPadding: hasBodyPadding
      }, footer || React.createElement(WizardFooterInternal, {
        onNext: this.onNext,
        onBack: this.onBack,
        onClose: onClose,
        isValid: isValid,
        firstStep: firstStep,
        activeStep: activeStep,
        nextButtonText: activeStep.nextButtonText || nextButtonText,
        backButtonText: backButtonText,
        cancelButtonText: cancelButtonText
      }))))))), this.container);
    }
  }]);

  return Wizard;
}(React.Component);

_defineProperty(Wizard, "propTypes", {
  isOpen: _pt.bool,
  isCompactNav: _pt.bool,
  isFullHeight: _pt.bool,
  isFullWidth: _pt.bool,
  width: _pt.oneOfType([_pt.number, _pt.string]),
  height: _pt.oneOfType([_pt.number, _pt.string]),
  title: _pt.string.isRequired,
  description: _pt.string,
  onGoToStep: _pt.func,
  className: _pt.string,
  steps: _pt.arrayOf(_pt.shape({
    id: _pt.oneOfType([_pt.string, _pt.number]),
    name: _pt.string.isRequired,
    component: _pt.any,
    isFinishedStep: _pt.bool,
    canJumpTo: _pt.bool,
    steps: _pt.arrayOf(_pt.shape({
      id: _pt.oneOfType([_pt.string, _pt.number]),
      name: _pt.string.isRequired,
      component: _pt.any,
      isFinishedStep: _pt.bool,
      canJumpTo: _pt.bool,
      steps: _pt.arrayOf(_pt.shape({
        id: _pt.oneOfType([_pt.string, _pt.number]),
        name: _pt.string.isRequired,
        component: _pt.any,
        isFinishedStep: _pt.bool,
        canJumpTo: _pt.bool,
        steps: _pt.arrayOf(_pt.object),
        nextButtonText: _pt.string,
        enableNext: _pt.bool,
        hideCancelButton: _pt.bool,
        hideBackButton: _pt.bool
      })),
      nextButtonText: _pt.string,
      enableNext: _pt.bool,
      hideCancelButton: _pt.bool,
      hideBackButton: _pt.bool
    })),
    nextButtonText: _pt.string,
    enableNext: _pt.bool,
    hideCancelButton: _pt.bool,
    hideBackButton: _pt.bool
  })).isRequired,
  startAtStep: _pt.number,
  ariaLabelNav: _pt.string,
  hasBodyPadding: _pt.bool,
  footer: _pt.node,
  onNext: _pt.func,
  onBack: _pt.func,
  nextButtonText: _pt.string,
  backButtonText: _pt.string,
  cancelButtonText: _pt.string,
  ariaLabelCloseButton: _pt.string
});

_defineProperty(Wizard, "currentId", 0);

_defineProperty(Wizard, "defaultProps", {
  isOpen: false,
  isCompactNav: false,
  isFullHeight: false,
  isFullWidth: false,
  width: null,
  height: null,
  description: '',
  onBack: null,
  onNext: null,
  onGoToStep: null,
  className: '',
  startAtStep: 1,
  nextButtonText: 'Next',
  backButtonText: 'Back',
  cancelButtonText: 'Cancel',
  ariaLabelCloseButton: 'Close',
  ariaLabelNav: 'Steps',
  hasBodyPadding: true,
  footer: null
});