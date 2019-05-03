import { StyleSheet } from '@patternfly/react-styles';
import './options-menu.css';

export default StyleSheet.parse(`.pf-c-options-menu{--pf-c-options-menu__toggle--Background:transparent;--pf-c-options-menu__toggle--PaddingTop:var(--pf-global--spacer--form-element);--pf-c-options-menu__toggle--PaddingRight:var(--pf-global--spacer--sm);--pf-c-options-menu__toggle--PaddingBottom:var(--pf-global--spacer--form-element);--pf-c-options-menu__toggle--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-options-menu__toggle--MinWidth:var(--pf-global--target-size--MinWidth);--pf-c-options-menu__toggle--LineHeight:var(--pf-global--LineHeight--md);--pf-c-options-menu__toggle--BorderWidth:var(--pf-global--BorderWidth--sm);--pf-c-options-menu__toggle--BorderTopColor:var(--pf-global--BorderColor--300);--pf-c-options-menu__toggle--BorderRightColor:var(--pf-global--BorderColor--300);--pf-c-options-menu__toggle--BorderBottomColor:var(--pf-global--BorderColor--200);--pf-c-options-menu__toggle--BorderLeftColor:var(--pf-global--BorderColor--300);--pf-c-options-menu__toggle--Color:var(--pf-global--Color--100);--pf-c-options-menu__toggle--hover--BorderBottomColor:var(--pf-global--active-color--100);--pf-c-options-menu__toggle--active--BorderBottomWidth:var(--pf-global--BorderWidth--md);--pf-c-options-menu__toggle--active--BorderBottomColor:var(--pf-global--active-color--100);--pf-c-options-menu__toggle--focus--BorderBottomWidth:var(--pf-global--BorderWidth--md);--pf-c-options-menu__toggle--focus--BorderBottomColor:var(--pf-global--active-color--100);--pf-c-options-menu__toggle--expanded--BorderBottomWidth:var(--pf-global--BorderWidth--md);--pf-c-options-menu__toggle--expanded--BorderBottomColor:var(--pf-global--active-color--100);--pf-c-options-menu__toggle--m-plain--Color:var(--pf-global--Color--200);--pf-c-options-menu__toggle--m-plain--hover--Color:var(--pf-global--Color--100);--pf-c-options-menu__toggle-icon--MarginRight:var(--pf-global--spacer--sm);--pf-c-options-menu__toggle-icon--MarginLeft:var(--pf-global--spacer--md);--pf-c-options-menu__toggle-button--Background:transparent;--pf-c-options-menu__toggle-button--PaddingTop:var(--pf-global--spacer--form-element);--pf-c-options-menu__toggle-button--PaddingRight:var(--pf-global--spacer--sm);--pf-c-options-menu__toggle-button--PaddingBottom:var(--pf-global--spacer--form-element);--pf-c-options-menu__toggle-button--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-options-menu__menu--BackgroundColor:var(--pf-global--BackgroundColor--light-100);--pf-c-options-menu__menu--BorderWidth:var(--pf-global--BorderWidth--sm);--pf-c-options-menu__menu--BoxShadow:var(--pf-global--BoxShadow--md);--pf-c-options-menu__menu--PaddingTop:var(--pf-global--spacer--sm);--pf-c-options-menu__menu--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-options-menu__menu--Top:calc(100% + var(--pf-global--spacer--xs));--pf-c-options-menu__menu--ZIndex:var(--pf-global--ZIndex--xs);--pf-c-options-menu--m-top__menu--Top:0;--pf-c-options-menu--m-top__menu--Transform:translateY(calc(-100% - var(--pf-global--spacer--xs)));--pf-c-options-menu__menu-item--Background:transparent;--pf-c-options-menu__menu-item--FontSize:var(--pf-global--FontSize--md);--pf-c-options-menu__menu-item--PaddingTop:var(--pf-global--spacer--sm);--pf-c-options-menu__menu-item--PaddingRight:var(--pf-global--spacer--md);--pf-c-options-menu__menu-item--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-options-menu__menu-item--PaddingLeft:var(--pf-global--spacer--md);--pf-c-options-menu__menu-item--disabled--Color:var(--pf-global--Color--dark-200);--pf-c-options-menu__menu-item--hover--BackgroundColor:var(--pf-global--BackgroundColor--light-300);--pf-c-options-menu__menu-item--disabled--BackgroundColor:transparent;--pf-c-options-menu__menu-item-icon--Color:var(--pf-global--active-color--100);--pf-c-options-menu__menu-item-icon--FontSize:var(--pf-global--icon--FontSize--sm);--pf-c-options-menu__menu-item-icon--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-options-menu__separator--Height:var(--pf-global--BorderWidth--sm);--pf-c-options-menu__separator--BackgroundColor:var(--pf-global--BackgroundColor--light-300);--pf-c-options-menu__separator--MarginTop:var(--pf-global--spacer--sm);--pf-c-options-menu__separator--MarginBottom:var(--pf-global--spacer--sm);position:relative;display:inline-block;max-width:100%;}.pf-c-options-menu__toggle:not(.pf-m-plain)::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button::before{position:absolute;top:0;right:0;bottom:0;left:0;content:"";border:var(--pf-c-options-menu__toggle--BorderWidth) solid;border-color:var(--pf-c-options-menu__toggle--BorderTopColor) var(--pf-c-options-menu__toggle--BorderRightColor) var(--pf-c-options-menu__toggle--BorderBottomColor) var(--pf-c-options-menu__toggle--BorderLeftColor);}.pf-c-options-menu__toggle:not(.pf-m-plain):hover::before,.pf-c-options-menu__toggle:not(.pf-m-plain).pf-m-hover::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button:hover::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button.pf-m-hover::before{--pf-c-options-menu__toggle--BorderBottomColor:var(--pf-c-options-menu__toggle--hover--BorderBottomColor);}.pf-c-options-menu__toggle:not(.pf-m-plain):active::before,.pf-c-options-menu__toggle:not(.pf-m-plain).pf-m-active::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button:active::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button.pf-m-active::before{--pf-c-options-menu__toggle--BorderBottomColor:var(--pf-c-options-menu__toggle--active--BorderBottomColor);border-bottom-width:var(--pf-c-options-menu__toggle--active--BorderBottomWidth);}.pf-c-options-menu__toggle:not(.pf-m-plain):focus::before,.pf-c-options-menu__toggle:not(.pf-m-plain).pf-m-focus::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button:focus::before,.pf-c-options-menu.pf-m-text:not(.pf-m-plain) .pf-c-options-menu__toggle-button.pf-m-focus::before{--pf-c-options-menu__toggle--BorderBottomColor:var(--pf-c-options-menu__toggle--focus--BorderBottomColor);border-bottom-width:var(--pf-c-options-menu__toggle--focus--BorderBottomWidth);}.pf-c-options-menu__toggle{position:relative;display:flex;align-items:center;justify-content:center;min-width:var(--pf-c-options-menu__toggle--MinWidth);max-width:100%;padding-left:var(--pf-c-options-menu__toggle--PaddingLeft);line-height:var(--pf-c-options-menu__toggle--LineHeight);color:var(--pf-c-options-menu__toggle--Color);background:var(--pf-c-options-menu__toggle--Background);border:none;}.pf-c-options-menu__toggle > *{position:relative;}.pf-c-options-menu__toggle:not(.pf-m-text){padding-top:var(--pf-c-options-menu__toggle--PaddingTop);padding-right:var(--pf-c-options-menu__toggle--PaddingRight);padding-bottom:var(--pf-c-options-menu__toggle--PaddingBottom);}.pf-c-options-menu.pf-m-expanded > .pf-c-options-menu__toggle::before{--pf-c-options-menu__toggle--BorderBottomColor:var(--pf-c-options-menu__toggle--expanded--BorderBottomColor);border-bottom-width:var(--pf-c-options-menu__toggle--expanded--BorderBottomWidth);}.pf-c-options-menu__toggle.pf-m-plain:not(.pf-m-text){color:var(--pf-c-options-menu__toggle--m-plain--Color);}.pf-c-options-menu__toggle.pf-m-plain > *{line-height:var(--pf-c-options-menu__toggle--LineHeight);}.pf-c-options-menu__toggle.pf-m-plain:hover,.pf-c-options-menu__toggle.pf-m-plain.pf-m-hover,.pf-c-options-menu__toggle.pf-m-plain:active,.pf-c-options-menu__toggle.pf-m-plain.pf-m-active,.pf-c-options-menu__toggle.pf-m-plain.pf-m-focus,.pf-c-options-menu__toggle.pf-m-plain:focus,.pf-c-options-menu.pf-m-expanded > .pf-c-options-menu__toggle.pf-m-plain{--pf-c-options-menu__toggle--m-plain--Color:var(--pf-c-options-menu__toggle--m-plain--hover--Color);}.pf-c-options-menu__toggle-button{padding:var(--pf-c-options-menu__toggle-button--PaddingTop) var(--pf-c-options-menu__toggle-button--PaddingRight) var(--pf-c-options-menu__toggle-button--PaddingBottom) var(--pf-c-options-menu__toggle-button--PaddingLeft);background:var(--pf-c-options-menu__toggle-button--Background);border:0;}.pf-c-options-menu__toggle-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.pf-c-options-menu__toggle-icon{margin-right:var(--pf-c-options-menu__toggle-icon--MarginRight);margin-left:var(--pf-c-options-menu__toggle-icon--MarginLeft);}.pf-c-options-menu.pf-m-top.pf-m-expanded .pf-c-options-menu__toggle-icon{transform:rotate(-180deg);}.pf-c-options-menu__menu{position:absolute;top:var(--pf-c-options-menu__menu--Top);z-index:var(--pf-c-options-menu__menu--ZIndex);min-width:100%;padding-top:var(--pf-c-options-menu__menu--PaddingTop);padding-bottom:var(--pf-c-options-menu__menu--PaddingBottom);background-color:var(--pf-c-options-menu__menu--BackgroundColor);background-clip:padding-box;border:var(--pf-c-options-menu__menu--BorderWidth) solid transparent;box-shadow:var(--pf-c-options-menu__menu--BoxShadow);}.pf-c-options-menu__menu.pf-m-align-right{right:0;}.pf-c-options-menu.pf-m-top .pf-c-options-menu__menu{--pf-c-options-menu__menu--Top:var(--pf-c-options-menu--m-top__menu--Top);transform:var(--pf-c-options-menu--m-top__menu--Transform);}.pf-c-options-menu__menu-item{display:flex;align-items:baseline;width:100%;padding:var(--pf-c-options-menu__menu-item--PaddingTop) var(--pf-c-options-menu__menu-item--PaddingRight) var(--pf-c-options-menu__menu-item--PaddingBottom) var(--pf-c-options-menu__menu-item--PaddingLeft);font-size:var(--pf-c-options-menu__menu-item--FontSize);white-space:nowrap;background:var(--pf-c-options-menu__menu-item--Background);border:none;}.pf-c-options-menu__menu-item:hover,.pf-c-options-menu__menu-item.pf-m-hover,.pf-c-options-menu__menu-item:focus,.pf-c-options-menu__menu-item.pf-m-focus{text-decoration:none;background-color:var(--pf-c-options-menu__menu-item--hover--BackgroundColor);}.pf-c-options-menu__menu-item:disabled,.pf-c-options-menu__menu-item.pf-m-disabled{color:var(--pf-c-options-menu__menu-item--disabled--Color);pointer-events:none;background-color:var(--pf-c-options-menu__menu-item--disabled--BackgroundColor);}.pf-c-options-menu__menu-item-icon{align-self:center;padding-left:var(--pf-c-options-menu__menu-item-icon--PaddingLeft);margin-left:auto;font-size:var(--pf-c-options-menu__menu-item-icon--FontSize);color:var(--pf-c-options-menu__menu-item-icon--Color);}.pf-c-options-menu__separator{height:var(--pf-c-options-menu__separator--Height);margin-top:var(--pf-c-options-menu__separator--MarginTop);margin-bottom:var(--pf-c-options-menu__separator--MarginBottom);background-color:var(--pf-c-options-menu__separator--BackgroundColor);}`);
