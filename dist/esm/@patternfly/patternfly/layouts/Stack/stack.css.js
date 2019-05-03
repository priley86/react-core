import { StyleSheet } from '@patternfly/react-styles';
import './stack.css';

export default StyleSheet.parse(`.pf-l-stack{--pf-l-stack--m-gutter--MarginBottom:var(--pf-global--gutter);display:flex;flex-direction:column;height:100%;}.pf-l-stack__item.pf-m-fill{flex-grow:1;}.pf-l-stack.pf-m-gutter > *:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom);}`);
