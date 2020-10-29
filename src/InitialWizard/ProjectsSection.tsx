import React from "react";
import { ProjectsSectionItem } from "../models/ResumeDataModels";
import { ProjectsItem } from "./ProjectsItem";
import { WizardSection } from "./WizardSection";
import { Depths } from "@fluentui/theme";

export const ProjectsSection: React.FunctionComponent<{
  data?: ProjectsSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: ProjectsSectionItem) => {
    return (
      <div style={{ boxShadow: Depths.depth8 }}>
        <ProjectsItem data={element} key={element.id} />
      </div>
    );
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
