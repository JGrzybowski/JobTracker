import React from "react";
import { Stack, TextField, Rating } from "office-ui-fabric-react";
import { SkillsSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const SkillsItem: React.FunctionComponent<{
  data: SkillsSectionSchema;
}> = ({ data }) => {
  return (
    <Stack horizontal horizontalAlign="center">
      <TextField
        label="Name"
        value={data.name}
        underlined
        styles={maxWidthStyle}
      />
      <Rating label="Skill level" value={data.level} styles={maxWidthStyle} />
    </Stack>
  );
};
