import React from "react";
import { Stack, TextField, Rating } from "office-ui-fabric-react";
import { LanguagesSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const LanguagesItem: React.FunctionComponent<{
  data: LanguagesSectionSchema;
}> = ({ data }) => {
  return (
    <Stack horizontal>
      <TextField
        label="Name"
        value={data?.language}
        underlined
        styles={maxWidthStyle}
      />
      <Rating
        label="Skill level"
        value={data?.fluency}
        styles={maxWidthStyle}
      />
    </Stack>
  );
};
