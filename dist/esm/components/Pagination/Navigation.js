function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Pagination/pagination.css.js";
import { css } from '@patternfly/react-styles';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';
var propTypes = {
  lastPage: PropTypes.number,
  pagesTitle: PropTypes.string,
  toLastPage: PropTypes.string,
  toPreviousPage: PropTypes.string,
  toNextPage: PropTypes.string,
  toFirstPage: PropTypes.string,
  currPage: PropTypes.string,
  paginationTitle: PropTypes.string,
  page: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onFirstClick: PropTypes.func,
  onLastClick: PropTypes.func,
  onPageInput: PropTypes.func
};
var defaultProps = {
  pagesTitle: '',
  toLastPage: 'Go to last page',
  toNextPage: 'Go to next page',
  toFirstPage: 'Go to first page',
  toPreviousPage: 'Go to previous page',
  currPage: 'Current page',
  paginationTitle: 'Pagination',
  onSetPage: function onSetPage() {
    return undefined;
  },
  onNextClick: function onNextClick() {
    return undefined;
  },
  onPreviousClick: function onPreviousClick() {
    return undefined;
  },
  onFirstClick: function onFirstClick() {
    return undefined;
  },
  onLastClick: function onLastClick() {
    return undefined;
  },
  onPageInput: function onPageInput() {
    return undefined;
  }
};

var Navigation = function Navigation(_ref) {
  var page = _ref.page,
      lastPage = _ref.lastPage,
      pagesTitle = _ref.pagesTitle,
      toLastPage = _ref.toLastPage,
      toNextPage = _ref.toNextPage,
      toFirstPage = _ref.toFirstPage,
      toPreviousPage = _ref.toPreviousPage,
      currPage = _ref.currPage,
      paginationTitle = _ref.paginationTitle,
      onSetPage = _ref.onSetPage,
      onNextClick = _ref.onNextClick,
      onPreviousClick = _ref.onPreviousClick,
      onFirstClick = _ref.onFirstClick,
      onLastClick = _ref.onLastClick,
      onPageInput = _ref.onPageInput,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["page", "lastPage", "pagesTitle", "toLastPage", "toNextPage", "toFirstPage", "toPreviousPage", "currPage", "paginationTitle", "onSetPage", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className"]);

  return React.createElement("nav", _extends({
    className: css(styles.paginationNav, className),
    "aria-label": paginationTitle
  }, props), React.createElement(Button, {
    variant: ButtonVariant.plain,
    isDisabled: page === 1,
    "aria-label": toFirstPage,
    "data-action": "first",
    onClick: function onClick(event) {
      onFirstClick(event, 1);
      onSetPage(event, 1);
    }
  }, React.createElement(AngleDoubleLeftIcon, null)), React.createElement(Button, {
    variant: ButtonVariant.plain,
    isDisabled: page === 1,
    "data-action": "previous",
    onClick: function onClick(event) {
      var newPage = page - 1 >= 1 ? page - 1 : 1;
      onPreviousClick(event, newPage);
      onSetPage(event, newPage);
    },
    "aria-label": toPreviousPage
  }, React.createElement(AngleLeftIcon, null)), React.createElement("div", {
    className: css(styles.paginationNavPageSelect)
  }, React.createElement("input", {
    className: css(styles.formControl),
    "aria-label": currPage,
    type: "number",
    min: "1",
    max: lastPage,
    value: page,
    onChange: function onChange(event) {
      var inputPage = Number.parseInt(event.target.value);
      inputPage = isNaN(inputPage) ? page : inputPage;
      inputPage = inputPage > lastPage ? lastPage : inputPage;
      inputPage = inputPage < 1 ? 1 : inputPage;
      onSetPage(event, isNaN(inputPage) ? page : inputPage);
      onPageInput(event, isNaN(inputPage) ? page : inputPage);
    }
  }), React.createElement("span", {
    "aria-hidden": "true"
  }, "of ", lastPage, " ", pagesTitle)), React.createElement(Button, {
    variant: ButtonVariant.plain,
    isDisabled: page === lastPage,
    "aria-label": toNextPage,
    "data-action": "next",
    onClick: function onClick(event) {
      var newPage = page + 1 <= lastPage ? page + 1 : lastPage;
      onNextClick(event, newPage);
      onSetPage(event, newPage);
    }
  }, React.createElement(AngleRightIcon, null)), React.createElement(Button, {
    variant: ButtonVariant.plain,
    isDisabled: page === lastPage,
    "aria-label": toLastPage,
    "data-action": "last",
    onClick: function onClick(event) {
      onLastClick(event, lastPage);
      onSetPage(event, lastPage);
    }
  }, React.createElement(AngleDoubleRightIcon, null)));
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;