const { StyleSheet } = require('@patternfly/react-styles');
require('./skip-to-content.css');

module.exports = StyleSheet.parse(`.pf-c-skip-to-content{--pf-c-skip-to-content--Top:var(--pf-global--spacer--md);--pf-c-skip-to-content--ZIndex:var(--pf-global--ZIndex--2xl);--pf-c-skip-to-content--focus--Left:var(--pf-global--spacer--md);position:absolute;top:var(--pf-c-skip-to-content--Top);left:-300%;z-index:var(--pf-c-skip-to-content--ZIndex);}.pf-c-skip-to-content.pf-m-focus,.pf-c-skip-to-content:focus{left:var(--pf-c-skip-to-content--focus--Left);}`);
