import React from 'react';
import { WorkItem } from './WorkItem';
import { WizardSection } from './WizardSection';

export const WorkSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "How about your previous work experiences?"
                previousStepUri = "/InitialWizard/EngineeringTemplate/Education" 
                nextStepUri = "/InitialWizard/EngineeringTemplate/Projects">
                <WorkItem/>
            </WizardSection>
        </>
    );
}