import * as React from 'react';
import { WizardStep } from './Wizard';
export interface WizardFooterProps {
    /** Buttons in the footer */
    children: any;
}
export declare const WizardFooter: React.SFC<WizardFooterProps>;
export interface WizardFooterInternalProps {
    onNext: any;
    onBack: any;
    onClose: any;
    isValid: boolean;
    firstStep: boolean;
    activeStep: WizardStep;
    nextButtonText: string;
    backButtonText: string;
    cancelButtonText: string;
}
export declare const WizardFooterInternal: React.SFC<WizardFooterInternalProps>;
