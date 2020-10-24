import React from "react";
import { Stack, TextField, DatePicker } from "office-ui-fabric-react";
import { ProjectsSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const ProjectsItem: React.FunctionComponent<{
  data: ProjectsSectionSchema;
}> = ({ data }) => {
  return (
    <Stack horizontalAlign="center">
      <TextField
        label="Name"
        value={data.name}
        underlined
        styles={maxWidthStyle}
      />
      <TextField
        label="Description"
        value={data.description}
        underlined
        multiline
        styles={maxWidthStyle}
      />
      <Stack horizontal>
        <DatePicker
          label="From"
          value={new Date(data.startDate ?? "")}
          underlined
        />
        <DatePicker
          label="To"
          value={new Date(data.endDate ?? "")}
          underlined
        />
      </Stack>
      <TextField
        label="Link"
        value={data.url}
        underlined
        styles={maxWidthStyle}
      />
    </Stack>
  );
};
