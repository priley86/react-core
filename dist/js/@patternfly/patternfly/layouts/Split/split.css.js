const { StyleSheet } = require('@patternfly/react-styles');
require('./split.css');

module.exports = StyleSheet.parse(`.pf-l-split{--pf-l-split--m-gutter--MarginRight:var(--pf-global--gutter);display:flex;flex-wrap:nowrap;padding:0;margin:0;}.pf-l-split__item.pf-m-fill{flex-grow:1;}.pf-l-split.pf-m-gutter > *:not(:last-child){margin-right:var(--pf-l-split--m-gutter--MarginRight);}`);
