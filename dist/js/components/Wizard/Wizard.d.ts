import * as React from 'react';
export interface WizardStep {
    /** Optional identifier */
    id?: string | number;
    /** The name of the step */
    name: string;
    /** The component to render in the main body */
    component?: any;
    /** Setting to true hides the side nav and footer */
    isFinishedStep?: boolean;
    /** Enables or disables the step in the navigation. Enabled by default. */
    canJumpTo?: boolean;
    /** Sub steps */
    steps?: WizardStep[];
    /** (Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it. */
    nextButtonText?: string;
    /** (Unused if footer is controlled) The condition needed to enable the Next button */
    enableNext?: boolean;
    /** (Unused if footer is controlled) True to hide the Cancel button */
    hideCancelButton?: boolean;
    /** (Unused if footer is controlled) True to hide the Back button */
    hideBackButton?: boolean;
}
export declare type WizardStepFunctionType = (newStep: {
    id?: string | number;
    name: string;
}, prevStep: {
    prevId?: string | number;
    prevName: string;
}) => void;
export interface WizardProps {
    /** True to show the wizard */
    isOpen?: boolean;
    /** If true makes the navigation more compact */
    isCompactNav?: boolean;
    /** True to set full height wizard */
    isFullHeight?: boolean;
    /** True to set full width wizard */
    isFullWidth?: boolean;
    /** Custom width of the wizard */
    width?: number | string;
    /** Custom height of the wizard */
    height?: number | string;
    /** The wizard title */
    title: string;
    /** The wizard description */
    description?: string;
    /** Callback function to close the wizard */
    onClose?(): void;
    /** Callback function when a step in the nav is clicked */
    onGoToStep?: WizardStepFunctionType;
    /** Additional classes spread to the Wizard */
    className?: string;
    /** The wizard steps configuration object */
    steps: WizardStep[];
    /** The current step the wizard is on (1 or higher)*/
    startAtStep?: number;
    /** aria-label for the Nav */
    ariaLabelNav?: string;
    /** Can remove the default padding around the main body content by setting this to false */
    hasBodyPadding?: boolean;
    /** (Use to control the footer) Passing in a footer component lets you control the buttons yourself */
    footer?: React.ReactNode;
    /** (Unused if footer is controlled) Callback function to save at the end of the wizard, if not specified uses onClose */
    onSave?(): void;
    /** (Unused if footer is controlled) Callback function after Next button is clicked */
    onNext?: WizardStepFunctionType;
    /** (Unused if footer is controlled) Callback function after Back button is clicked */
    onBack?: WizardStepFunctionType;
    /** (Unused if footer is controlled) The Next button text */
    nextButtonText?: string;
    /** (Unused if footer is controlled) The Back button text */
    backButtonText?: string;
    /** (Unused if footer is controlled) The Cancel button text */
    cancelButtonText?: string;
    /** (Unused if footer is controlled) aria-label for the close button */
    ariaLabelCloseButton?: string;
}
export declare class Wizard extends React.Component<WizardProps> {
    static currentId: number;
    static defaultProps: {
        isOpen: boolean;
        isCompactNav: boolean;
        isFullHeight: boolean;
        isFullWidth: boolean;
        width: null;
        height: null;
        description: string;
        onBack: null;
        onNext: null;
        onGoToStep: null;
        className: string;
        startAtStep: number;
        nextButtonText: string;
        backButtonText: string;
        cancelButtonText: string;
        ariaLabelCloseButton: string;
        ariaLabelNav: string;
        hasBodyPadding: boolean;
        footer: null;
    };
    container?: HTMLDivElement;
    titleId: string;
    descriptionId: string;
    constructor(props: WizardProps);
    state: {
        currentStep: number;
        isNavOpen: boolean;
    };
    handleKeyClicks: (event: KeyboardEvent) => void;
    toggleSiblingsFromScreenReaders: (hide: boolean) => void;
    onNext: () => void;
    onBack: () => void;
    goToStep: (step: number) => void;
    goToStepById: (stepId: React.ReactText) => void;
    goToStepByName: (stepName: string) => void;
    getFlattenedSteps: () => WizardStep[];
    getFlattenedStepsIndex: (flattenedSteps: WizardStep[], stepName: string) => number;
    initSteps: (steps: WizardStep[]) => WizardStep[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): false | React.ReactPortal | null | undefined;
}
