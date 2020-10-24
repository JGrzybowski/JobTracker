import React from "react";
import { EducationSectionSchema } from "../models/ResumeSchema";
import { EducationItem } from "./EducationItem";
import { WizardSection } from "./WizardSection";

export const EducationSection: React.FunctionComponent<{ data?: EducationSectionSchema[] }> = ({ data }) => {
  let items = data
    ? data.map((element: EducationSectionSchema) => {
        return <EducationItem data={element} />;
      })
    : null;

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
