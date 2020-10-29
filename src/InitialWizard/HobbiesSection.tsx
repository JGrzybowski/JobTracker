import React from "react";
import { InterestsSectionItem } from "../models/ResumeDataModels";
import { HobbiesItem } from "./HobbiesItem";
import { WizardSection } from "./WizardSection";

export const HobbiesSection: React.FunctionComponent<{
  data?: InterestsSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: InterestsSectionItem) => {
    return <HobbiesItem data={element} key={element.id} />;
  });

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
