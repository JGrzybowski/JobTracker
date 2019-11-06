import React from 'react';
import { HobbiesItem } from './HobbiesItem';
import { WizardSection } from './WizardSection';

export const HobbiesSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "What are your hobbies?"
                previousStepUri = "/initialWizard/engineeringTemplate/Languages" 
                nextStepUri = "/initialWizard/engineeringTemplate/Links">
                <HobbiesItem/>
            </WizardSection>
        </>
    );
}