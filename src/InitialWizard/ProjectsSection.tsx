import React from "react";
import { ProjectsSectionSchema } from "../models/ResumeSchema";
import { ProjectsItem } from "./ProjectsItem";
import { WizardSection } from "./WizardSection";

export const ProjectsSection: React.FunctionComponent<{
  data?: ProjectsSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: ProjectsSectionSchema) => {
        return <ProjectsItem data={element} />;
      })
    : null;
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
