import React from "react";
import { SkillsSectionItem } from "../models/ResumeDataModels";
import { SkillsItem } from "./SkillsItem";
import { WizardSection } from "./WizardSection";

export const SkillsSection: React.FunctionComponent<{
  data?: SkillsSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: SkillsSectionItem) => {
    return <SkillsItem data={element} />;
  });

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
