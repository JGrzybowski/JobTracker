import React from "react";
import { LanguagesSectionItem } from "../models/ResumeDataModels";
import { LanguagesItem } from "./LanguagesItem";
import { WizardSection } from "./WizardSection";
import { Depths } from "@fluentui/theme";

export const LanguagesSection: React.FunctionComponent<{
  data?: LanguagesSectionItem[];
}> = ({ data }) => {
  const items = data?.map((element: LanguagesSectionItem) => {
    return (
      <div style={{ boxShadow: Depths.depth8 }}>
        <LanguagesItem data={element} key={element.id} />
      </div>
    );
  });

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
