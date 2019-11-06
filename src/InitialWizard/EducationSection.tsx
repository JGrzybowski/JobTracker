import React from 'react';
import { EducationItem } from './EducationItem';
import { WizardSection } from './WizardSection';

export const EducationSection: React.FunctionComponent = () => {    
    return (
        <>
            <WizardSection
                title = "Let's start with your education."
                previousStepUri = "/initialWizard/chooseTemplate" 
                nextStepUri = "/initialWizard/engineeringTemplate/Work">
                <EducationItem/>
            </WizardSection>
        </>
    );
}