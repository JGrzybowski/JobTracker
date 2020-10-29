import React from "react";
import { WorkItem } from "./WorkItem";
import { WizardSection } from "./WizardSection";
import { WorkSectionItem } from "../models/ResumeDataModels";

export const WorkSection: React.FunctionComponent<{
  data?: WorkSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: WorkSectionItem) => {
    return <WorkItem data={element} />;
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
