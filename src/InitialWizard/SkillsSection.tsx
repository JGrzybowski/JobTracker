import React from 'react';
import { SkillsItem } from './SkillsItem';
import { WizardSection } from './WizardSection';

export const SkillsSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "What are your skills? How do you rate them?"
                previousStepUri = "/initialWizard/engineeringTemplate/Projects" 
                nextStepUri = "/initialWizard/engineeringTemplate/Languages">
                <SkillsItem/>
            </WizardSection>
        </>
    );
}