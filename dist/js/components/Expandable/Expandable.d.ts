import * as React from 'react';
export interface ExpandableProps {
    /** Content rendered inside the Expandable Component */
    children: any;
    /** Additional classes added to the Expandable Component */
    className?: string;
    /** Flag to indicate if the content is expanded */
    isExpanded?: boolean;
    /** Text that appears in the  toggle */
    toggleText?: string;
    /** Callback function to toggle the expandable content */
    onToggle?(): void;
    /** Forces focus state */
    isFocused?: boolean;
    /** Forces hover state */
    isHovered?: boolean;
    /** Forces active state */
    isActive?: boolean;
}
export declare const Expandable: React.SFC<ExpandableProps>;
export default Expandable;
