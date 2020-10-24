import React from "react";
import { ProfilesSectionSchema } from "../models/ResumeSchema";
import { LinksItem } from "./LinksItem";
import { WizardSection } from "./WizardSection";

export const LinksSection: React.FunctionComponent<{
  data?: ProfilesSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: ProfilesSectionSchema) => {
        return <LinksItem data={element} />;
      })
    : null;
  return (
    <>
      <WizardSection
        title="Any special links you would want to show your future employer?"
        previousStepUri="/initialWizard/engineeringTemplate/Hobbies"
        nextStepUri="/initialWizard/engineeringTemplate/Summary"
      >
        {items}
      </WizardSection>
    </>
  );
};
