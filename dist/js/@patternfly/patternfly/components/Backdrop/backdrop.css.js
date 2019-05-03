const { StyleSheet } = require('@patternfly/react-styles');
require('./backdrop.css');

module.exports = StyleSheet.parse(`.pf-c-backdrop{--pf-c-backdrop--ZIndex:var(--pf-global--ZIndex--2xl);--pf-c-backdrop--Color:var(--pf-global--BackgroundColor--dark-transparent-100);--pf-c-backdrop--BackdropFilter:blur(10px);position:fixed;top:0;left:0;z-index:var(--pf-c-backdrop--ZIndex);width:100%;height:100%;background-color:var(--pf-c-backdrop--Color);-webkit-backdrop-filter:var(--pf-c-backdrop--BackdropFilter);backdrop-filter:var(--pf-c-backdrop--BackdropFilter);}.pf-c-backdrop__open{overflow:hidden;}`);
