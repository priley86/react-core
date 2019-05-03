import * as React from 'react';
export interface WizardNavItemProps {
    /** Can nest a WizardNav component for substeps */
    children?: React.ReactNode;
    /** The text to display in the nav item */
    text?: string;
    /** Whether the nav item is the currently active item */
    isCurrent?: boolean;
    /** Whether the nav item is disabled */
    isDisabled?: boolean;
    /** Callback for when the nav item is clicked */
    onNavItemClick?(step: number): any;
    /** The step passed into the onNavItemClick callback */
    step: number;
}
export declare const WizardNavItem: React.FunctionComponent<WizardNavItemProps>;
