"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationVariant = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paginationCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Pagination/pagination.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _Dropdown = require("../Dropdown");

var _ToggleTemplate = _interopRequireDefault(require("./ToggleTemplate"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

var _PaginationOptionsMenu = _interopRequireDefault(require("./PaginationOptionsMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var PaginationVariant = {
  top: 'top',
  bottom: 'bottom'
};
exports.PaginationVariant = PaginationVariant;
var propTypes = {
  /** Position where pagination is rendered. */
  variant: _propTypes["default"].oneOf(Object.values(PaginationVariant)),

  /** Number of items per page. */
  perPage: _propTypes["default"].number,

  /** Select from options to number of items per page. */
  perPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].node,
    value: _propTypes["default"].number
  })),

  /** Total number of items. */
  itemCount: _propTypes["default"].number.isRequired,

  /** Current page number. */
  page: _propTypes["default"].number,

  /** First index of items on current page. */
  itemsStart: _propTypes["default"].number,

  /** Last index of items on current page. */
  itemsEnd: _propTypes["default"].number,

  /** Number of pages. */
  amountOfPages: _propTypes["default"].number,

  /** ID to ideintify widget on page. */
  widgetId: _propTypes["default"].string,

  /** Direction of dropdown context menu. */
  dropDirection: _propTypes["default"].oneOf(Object.values(_Dropdown.DropdownDirection)),

  /** Object with titles to display in pagination. */
  titles: _propTypes["default"].shape({
    page: _propTypes["default"].string,
    items: _propTypes["default"].string,
    itemsPerPage: _propTypes["default"].string,
    perPageSuffix: _propTypes["default"].string,
    toFirstPage: _propTypes["default"].string,
    toPreviousPage: _propTypes["default"].string,
    toLastPage: _propTypes["default"].string,
    toNextPage: _propTypes["default"].string,
    optionsToggle: _propTypes["default"].string,
    currPage: _propTypes["default"].string,
    paginationTitle: _propTypes["default"].string
  }),

  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),

  /** Function called when user sets page. */
  onSetPage: _propTypes["default"].func,

  /** Function called when user clicks on navigate to first page. */
  onFirstClick: _propTypes["default"].func,

  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick: _propTypes["default"].func,

  /** Function called when user clicks on navigate to next page. */
  onNextClick: _propTypes["default"].func,

  /** Function called when user clicks on navigate to last page. */
  onLastClick: _propTypes["default"].func,

  /** Function called when user inputs page number. */
  onPageInput: _propTypes["default"].func,

  /** Function called when user selects number of items per page. */
  onPerPageSelect: _propTypes["default"].func
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
  dropDirection: _Dropdown.DropdownDirection.down,
  widgetId: 'pagination-options-menu',
  toggleTemplate: _ToggleTemplate["default"],
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
  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_paginationCss["default"].pagination, variant === PaginationVariant.bottom && _paginationCss["default"].modifiers.footer, className)
  }, props), variant === PaginationVariant.top && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_paginationCss["default"].paginationTotalItems)
  }, "".concat(itemCount, " ").concat(titles.items)), _react["default"].createElement(_PaginationOptionsMenu["default"], {
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
  }), _react["default"].createElement(_Navigation["default"], {
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
var _default = Pagination;
exports["default"] = _default;