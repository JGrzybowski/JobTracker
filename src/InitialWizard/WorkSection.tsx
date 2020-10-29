import React from "react";
import { WorkItem } from "./WorkItem";
import { WizardSection } from "./WizardSection";
import { WorkSectionItem } from "../models/ResumeDataModels";
import { Depths } from "@fluentui/theme";

export const WorkSection: React.FunctionComponent<{
  data?: WorkSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: WorkSectionItem) => {
    return (
      <div style={{ boxShadow: Depths.depth8 }}>
        <WorkItem data={element} />
      </div>
    );
  });

  return (
    <WizardSection
      title="How about your previous work experiences?"
      previousStepUri="/InitialWizard/EngineeringTemplate/Education"
      nextStepUri="/InitialWizard/EngineeringTemplate/Projects"
    >
      {items}
    </WizardSection>
  );
};
