function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Pagination/pagination.css.js";
import { css } from '@patternfly/react-styles';
import { DropdownDirection } from '../Dropdown';
import ToggleTemplate from './ToggleTemplate';
import Navigation from './Navigation';
import PaginationOptionsMenu from './PaginationOptionsMenu';
var perPageOptions = [{
  title: '10',
  value: 10
}, {
  title: '20',
  value: 20
}, {
  title: '50',
  value: 50
}, {
  title: '100',
  value: 100
}];
export var PaginationVariant = {
  top: 'top',
  bottom: 'bottom'
};
var propTypes = {
  /** Position where pagination is rendered. */
  variant: PropTypes.oneOf(Object.values(PaginationVariant)),

  /** Number of items per page. */
  perPage: PropTypes.number,

  /** Select from options to number of items per page. */
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),

  /** Total number of items. */
  itemCount: PropTypes.number.isRequired,

  /** Current page number. */
  page: PropTypes.number,

  /** First index of items on current page. */
  itemsStart: PropTypes.number,

  /** Last index of items on current page. */
  itemsEnd: PropTypes.number,

  /** Number of pages. */
  amountOfPages: PropTypes.number,

  /** ID to ideintify widget on page. */
  widgetId: PropTypes.string,

  /** Direction of dropdown context menu. */
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),

  /** Object with titles to display in pagination. */
  titles: PropTypes.shape({
    page: PropTypes.string,
    items: PropTypes.string,
    itemsPerPage: PropTypes.string,
    perPageSuffix: PropTypes.string,
    toFirstPage: PropTypes.string,
    toPreviousPage: PropTypes.string,
    toLastPage: PropTypes.string,
    toNextPage: PropTypes.string,
    optionsToggle: PropTypes.string,
    currPage: PropTypes.string,
    paginationTitle: PropTypes.string
  }),

  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Function called when user sets page. */
  onSetPage: PropTypes.func,

  /** Function called when user clicks on navigate to first page. */
  onFirstClick: PropTypes.func,

  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick: PropTypes.func,

  /** Function called when user clicks on navigate to next page. */
  onNextClick: PropTypes.func,

  /** Function called when user clicks on navigate to last page. */
  onLastClick: PropTypes.func,

  /** Function called when user inputs page number. */
  onPageInput: PropTypes.func,

  /** Function called when user selects number of items per page. */
  onPerPageSelect: PropTypes.func
};
var defaultProps = {
  variant: PaginationVariant.top,
  perPage: perPageOptions[0].value,
  titles: {
    items: 'items',
    pages: 'pages',
    itemsPerPage: 'Items per page',
    perPageSuffix: 'per page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    optionsToggle: 'Select',
    currPage: 'Current page',
    paginationTitle: 'Pagination'
  },
  page: 1,
  perPageOptions: perPageOptions,
  dropDirection: DropdownDirection.down,
  widgetId: 'pagination-options-menu',
  toggleTemplate: ToggleTemplate,
  onSetPage: function onSetPage() {
    return undefined;
  },
  onPerPageSelect: function onPerPageSelect() {
    return undefined;
  },
  onFirstClick: function onFirstClick() {
    return undefined;
  },
  onPreviousClick: function onPreviousClick() {
    return undefined;
  },
  onNextClick: function onNextClick() {
    return undefined;
  },
  onPageInput: function onPageInput() {
    return undefined;
  },
  onLastClick: function onLastClick() {
    return undefined;
  }
};

var Pagination = function Pagination(_ref) {
  var perPage = _ref.perPage,
      page = _ref.page,
      className = _ref.className,
      children = _ref.children,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      variant = _ref.variant,
      titles = _ref.titles,
      itemCount = _ref.itemCount,
      dropDirection = _ref.dropDirection,
      perPageOptions = _ref.perPageOptions,
      onPerPageSelect = _ref.onPerPageSelect,
      onSetPage = _ref.onSetPage,
      onFirstClick = _ref.onFirstClick,
      onPreviousClick = _ref.onPreviousClick,
      onPageInput = _ref.onPageInput,
      onNextClick = _ref.onNextClick,
      onLastClick = _ref.onLastClick,
      toggleTemplate = _ref.toggleTemplate,
      widgetId = _ref.widgetId,
      props = _objectWithoutProperties(_ref, ["perPage", "page", "className", "children", "itemsStart", "itemsEnd", "variant", "titles", "itemCount", "dropDirection", "perPageOptions", "onPerPageSelect", "onSetPage", "onFirstClick", "onPreviousClick", "onPageInput", "onNextClick", "onLastClick", "toggleTemplate", "widgetId"]);

  var lastPage = Math.ceil(itemCount / perPage);
  var firstIndex = itemCount === 0 ? 0 : (page - 1) * perPage + 1;
  var lastIndex = itemCount === 0 ? 0 : page === lastPage ? itemCount : page * perPage;
  return React.createElement("div", _extends({
    className: css(styles.pagination, variant === PaginationVariant.bottom && styles.modifiers.footer, className)
  }, props), variant === PaginationVariant.top && React.createElement("div", {
    className: css(styles.paginationTotalItems)
  }, "".concat(itemCount, " ").concat(titles.items)), React.createElement(PaginationOptionsMenu, {
    itemsPerPageTitle: titles.itemsPerPage,
    perPageSuffix: titles.perPageSuffix,
    itemsTitle: titles.items,
    optionsToggle: titles.optionsToggle,
    perPageOptions: perPageOptions,
    firstIndex: itemsStart !== undefined ? itemsStart : firstIndex,
    lastIndex: itemsEnd !== undefined ? itemsEnd : lastIndex,
    itemCount: itemCount,
    perPage: perPage,
    onPerPageSelect: onPerPageSelect,
    dropDirection: dropDirection,
    widgetId: widgetId,
    toggleTemplate: toggleTemplate
  }), React.createElement(Navigation, {
    pagesTitle: titles.pages,
    toLastPage: titles.toLastPage,
    toPreviousPage: titles.toPreviousPage,
    toNextPage: titles.toNextPage,
    toFirstPage: titles.toFirstPage,
    currPage: titles.currPage,
    paginationTitle: titles.paginationTitle,
    page: page,
    lastPage: lastPage,
    onSetPage: onSetPage,
    onFirstClick: onFirstClick,
    onPreviousClick: onPreviousClick,
    onNextClick: onNextClick,
    onLastClick: onLastClick,
    onPageInput: onPageInput
  }), children);
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;