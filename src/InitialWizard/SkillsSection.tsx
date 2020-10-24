import React from "react";
import { SkillsSectionSchema } from "../models/ResumeSchema";
import { SkillsItem } from "./SkillsItem";
import { WizardSection } from "./WizardSection";

export const SkillsSection: React.FunctionComponent<{
  data?: SkillsSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: SkillsSectionSchema) => {
        return <SkillsItem data={element} />;
      })
    : null;
  return (
    <>
      <WizardSection
        title="What are your skills? How do you rate them?"
        previousStepUri="/initialWizard/engineeringTemplate/Projects"
        nextStepUri="/initialWizard/engineeringTemplate/Languages"
      >
        {items}
      </WizardSection>
    </>
  );
};
