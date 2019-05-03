"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Accordion", "./AccordionItem", "./AccordionContent", "./AccordionToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Accordion"), require("./AccordionItem"), require("./AccordionContent"), require("./AccordionToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Accordion, global.AccordionItem, global.AccordionContent, global.AccordionToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Accordion, _AccordionItem, _AccordionContent, _AccordionToggle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Accordion", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Accordion).default;
    }
  });
  Object.defineProperty(exports, "AccordionItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AccordionItem).default;
    }
  });
  Object.defineProperty(exports, "AccordionContent", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AccordionContent).default;
    }
  });
  Object.defineProperty(exports, "AccordionToggle", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AccordionToggle).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});