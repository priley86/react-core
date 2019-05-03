const { StyleSheet } = require('@patternfly/react-styles');
require('./gallery.css');

module.exports = StyleSheet.parse(`.pf-l-gallery{--pf-l-gallery--m-gutter--GridGap:var(--pf-global--gutter);--pf-l-gallery--GridTemplateColumns:repeat(auto-fill, minmax(250px, 1fr));--pf-l-gallery--GridTemplateRows:auto;display:grid;grid-template-columns:var(--pf-l-gallery--GridTemplateColumns);grid-template-rows:var(--pf-l-gallery--GridTemplateRows);}.pf-l-gallery.pf-m-gutter{grid-gap:var(--pf-l-gallery--m-gutter--GridGap);}`);
