import React from 'react';
import { LinksItem } from './LinksItem';
import { WizardSection } from './WizardSection';

export const LinksSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "Any special links you would want to show your future employer?"
                previousStepUri = "/initialWizard/engineeringTemplate/Hobbies" 
                nextStepUri = "/initialWizard/engineeringTemplate/Summary">
                <LinksItem/>
            </WizardSection>
        </>
    );
}