import React from "react";
import { EducationSectionItem } from "../models/ResumeDataModels";
import { EducationItem } from "./EducationItem";
import { WizardSection } from "./WizardSection";
import { Depths } from "@fluentui/theme";

export const EducationSection: React.FunctionComponent<{
  data?: EducationSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: EducationSectionItem) => {
    return (
      <div style={{ boxShadow: Depths.depth8 }}>
        <EducationItem data={element} key={element.id} />
      </div>
    );
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
