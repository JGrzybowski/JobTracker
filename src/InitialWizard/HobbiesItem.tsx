import React from "react";
import { TextField, Stack } from "office-ui-fabric-react";
import { InterestsSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const HobbiesItem: React.FunctionComponent<{
  data: InterestsSectionSchema;
}> = ({ data }) => {
  return (
    <Stack horizontalAlign="center">
      <TextField
        label="Name"
        value={data.name}
        underlined
        styles={maxWidthStyle}
      />
    </Stack>
  );
};
