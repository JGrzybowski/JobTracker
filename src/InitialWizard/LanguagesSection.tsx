import React from 'react';
import { LanguagesItem } from './LanguagesItem';
import { WizardSection } from './WizardSection';

export const LanguagesSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "What languages do you speak?"
                previousStepUri = "/initialWizard/engineeringTemplate/Skills" 
                nextStepUri = "/initialWizard/engineeringTemplate/Hobbies">
                <LanguagesItem/>
            </WizardSection>
        </>
    );
}