"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/components/Pagination/pagination.css.js", "@patternfly/react-styles", "@patternfly/react-icons", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/components/Pagination/pagination.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.paginationCss, global.reactStyles, global.reactIcons, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _paginationCss, _reactStyles, _reactIcons, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _paginationCss2 = _interopRequireDefault(_paginationCss);

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
    lastPage: _propTypes2["default"].number,
    pagesTitle: _propTypes2["default"].string,
    toLastPage: _propTypes2["default"].string,
    toPreviousPage: _propTypes2["default"].string,
    toNextPage: _propTypes2["default"].string,
    toFirstPage: _propTypes2["default"].string,
    currPage: _propTypes2["default"].string,
    paginationTitle: _propTypes2["default"].string,
    page: _propTypes2["default"].number.isRequired,
    onSetPage: _propTypes2["default"].func.isRequired,
    onNextClick: _propTypes2["default"].func,
    onPreviousClick: _propTypes2["default"].func,
    onFirstClick: _propTypes2["default"].func,
    onLastClick: _propTypes2["default"].func,
    onPageInput: _propTypes2["default"].func
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

    return _react2["default"].createElement("nav", _extends({
      className: (0, _reactStyles.css)(_paginationCss2["default"].paginationNav, className),
      "aria-label": paginationTitle
    }, props), _react2["default"].createElement(_Button.Button, {
      variant: _Button.ButtonVariant.plain,
      isDisabled: page === 1,
      "aria-label": toFirstPage,
      "data-action": "first",
      onClick: function onClick(event) {
        onFirstClick(event, 1);
        onSetPage(event, 1);
      }
    }, _react2["default"].createElement(_reactIcons.AngleDoubleLeftIcon, null)), _react2["default"].createElement(_Button.Button, {
      variant: _Button.ButtonVariant.plain,
      isDisabled: page === 1,
      "data-action": "previous",
      onClick: function onClick(event) {
        var newPage = page - 1 >= 1 ? page - 1 : 1;
        onPreviousClick(event, newPage);
        onSetPage(event, newPage);
      },
      "aria-label": toPreviousPage
    }, _react2["default"].createElement(_reactIcons.AngleLeftIcon, null)), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_paginationCss2["default"].paginationNavPageSelect)
    }, _react2["default"].createElement("input", {
      className: (0, _reactStyles.css)(_paginationCss2["default"].formControl),
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
    }), _react2["default"].createElement("span", {
      "aria-hidden": "true"
    }, "of ", lastPage, " ", pagesTitle)), _react2["default"].createElement(_Button.Button, {
      variant: _Button.ButtonVariant.plain,
      isDisabled: page === lastPage,
      "aria-label": toNextPage,
      "data-action": "next",
      onClick: function onClick(event) {
        var newPage = page + 1 <= lastPage ? page + 1 : lastPage;
        onNextClick(event, newPage);
        onSetPage(event, newPage);
      }
    }, _react2["default"].createElement(_reactIcons.AngleRightIcon, null)), _react2["default"].createElement(_Button.Button, {
      variant: _Button.ButtonVariant.plain,
      isDisabled: page === lastPage,
      "aria-label": toLastPage,
      "data-action": "last",
      onClick: function onClick(event) {
        onLastClick(event, lastPage);
        onSetPage(event, lastPage);
      }
    }, _react2["default"].createElement(_reactIcons.AngleDoubleRightIcon, null)));
  };

  Navigation.propTypes = propTypes;
  Navigation.defaultProps = defaultProps;
  exports["default"] = Navigation;
});