import React from "react";
import { EducationSectionItem } from "../models/ResumeDataModels";
import { EducationItem } from "./EducationItem";
import { WizardSection } from "./WizardSection";

export const EducationSection: React.FunctionComponent<{
  data?: EducationSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: EducationSectionItem) => {
    return <EducationItem data={element} key={element.id} />;
  });

  return (
    <>
      <WizardSection
        title="Let's start with your education."
        previousStepUri="/initialWizard/chooseTemplate"
        nextStepUri="/initialWizard/engineeringTemplate/Work"
      >
        {items}
      </WizardSection>
    </>
  );
};
