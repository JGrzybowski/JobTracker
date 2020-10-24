import React from "react";
import { WorkItem } from "./WorkItem";
import { WizardSection } from "./WizardSection";
import { WorkSectionSchema } from "../models/ResumeSchema";

export const WorkSection: React.FunctionComponent<{
  data?: WorkSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: WorkSectionSchema) => {
        return <WorkItem data={element} />;
      })
    : null;

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
