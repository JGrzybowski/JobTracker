import React from "react";
import { LanguagesSectionSchema } from "../models/ResumeSchema";
import { LanguagesItem } from "./LanguagesItem";
import { WizardSection } from "./WizardSection";

export const LanguagesSection: React.FunctionComponent<{
  data?: LanguagesSectionSchema[];
}> = ({ data }) => {
  const items = data
    ? data.map((element: LanguagesSectionSchema) => {
        return <LanguagesItem data={element} />;
      })
    : null;

  return (
    <>
      <WizardSection
        title="What languages do you speak?"
        previousStepUri="/initialWizard/engineeringTemplate/Skills"
        nextStepUri="/initialWizard/engineeringTemplate/Hobbies"
      >
        {items}
      </WizardSection>
    </>
  );
};
