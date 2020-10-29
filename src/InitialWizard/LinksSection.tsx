import React from "react";
import { ProfilesSectionItem } from "../models/ResumeDataModels";
import { LinksItem } from "./LinksItem";
import { WizardSection } from "./WizardSection";

export const LinksSection: React.FunctionComponent<{
  data?: ProfilesSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: ProfilesSectionItem) => {
    return <LinksItem data={element} key={element.network} />;
  });

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
