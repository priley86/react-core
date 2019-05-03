"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardContextConsumer = exports.WizardContextProvider = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var WizardContext = React.createContext({});
var WizardContextProvider = WizardContext.Provider;
exports.WizardContextProvider = WizardContextProvider;
var WizardContextConsumer = WizardContext.Consumer;
exports.WizardContextConsumer = WizardContextConsumer;