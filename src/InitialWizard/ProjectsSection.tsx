import React from 'react';
import { ProjectsItem } from './ProjectsItem';
import { WizardSection } from './WizardSection';

export const ProjectsSection: React.FunctionComponent = () => {
    return (
        <>
            <WizardSection
                title = "Have you worked on some cool projects?"
                previousStepUri = "/initialWizard/engineeringTemplate/Work" 
                nextStepUri = "/initialWizard/engineeringTemplate/Skills">
                <ProjectsItem/>
            </WizardSection>
        </>
    );
}