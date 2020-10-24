import React from "react";
import { InterestsSectionSchema } from "../models/ResumeSchema";
import { HobbiesItem } from "./HobbiesItem";
import { WizardSection } from "./WizardSection";

export const HobbiesSection: React.FunctionComponent<{
  data?: InterestsSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: InterestsSectionSchema) => {
        return <HobbiesItem data={element} />;
      })
    : null;
  return (
    <>
      <WizardSection
        title="What are your hobbies?"
        previousStepUri="/initialWizard/engineeringTemplate/Languages"
        nextStepUri="/initialWizard/engineeringTemplate/Links"
      >
        {items}
      </WizardSection>
    </>
  );
};
