import { StyleSheet } from '@patternfly/react-styles';
import './radio.css';

export default StyleSheet.parse(`.pf-c-radio{--pf-c-radio--GridGap:var(--pf-global--spacer--sm);--pf-c-radio__label--disabled--Color:var(--pf-global--disabled-color--100);--pf-c-radio__label--Color:var(--pf-global--Color--100);--pf-c-radio__label--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-radio__label--FontSize:var(--pf-global--FontSize--md);--pf-c-radio__label--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-radio__input--MarginTop:-0.1875rem;display:grid;grid-template-columns:auto 1fr;grid-gap:var(--pf-c-radio--GridGap);align-items:center;justify-items:start;}.pf-c-radio__label{font-size:var(--pf-c-radio__label--FontSize);font-weight:var(--pf-c-radio__label--FontWeight);line-height:var(--pf-c-radio__label--LineHeight);color:var(--pf-c-radio__label--Color);}.pf-c-radio__input{margin-top:var(--pf-c-radio__input--MarginTop);}label.pf-c-radio,.pf-c-radio__label,.pf-c-radio__input{cursor:pointer;}.pf-c-radio__label:disabled,.pf-c-radio__label.pf-m-disabled,.pf-c-radio__input:disabled,.pf-c-radio__input.pf-m-disabled{--pf-c-radio__label--Color:var(--pf-c-radio__label--disabled--Color);cursor:not-allowed;}`);
