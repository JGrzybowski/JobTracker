import React from "react";
import { Stack, TextField } from "office-ui-fabric-react";
import { ProfilesSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const LinksItem: React.FunctionComponent<{
  data: ProfilesSectionSchema;
}> = ({ data }) => {
  return (
    <Stack>
      <TextField
        label="Name"
        value={data.network}
        underlined
        styles={maxWidthStyle}
      />
      <TextField
        label="Link"
        value={data.url}
        underlined
        styles={maxWidthStyle}
      />
    </Stack>
  );
};
