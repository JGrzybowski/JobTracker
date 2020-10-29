import React from "react";
import { ProjectsSectionItem } from "../models/ResumeDataModels";
import { ProjectsItem } from "./ProjectsItem";
import { WizardSection } from "./WizardSection";

export const ProjectsSection: React.FunctionComponent<{
  data?: ProjectsSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: ProjectsSectionItem) => {
    return <ProjectsItem data={element} key={element.id} />;
  });

  return (
    <>
      <WizardSection
        title="Have you worked on some cool projects?"
        previousStepUri="/initialWizard/engineeringTemplate/Work"
        nextStepUri="/initialWizard/engineeringTemplate/Skills"
      >
        {items}
      </WizardSection>
    </>
  );
};
