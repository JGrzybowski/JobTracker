import React from "react";
import { Stack, TextField, DatePicker } from "office-ui-fabric-react";
import { WorkSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const WorkItem: React.FunctionComponent<{ data: WorkSectionSchema }> = ({
  data,
}) => {
  return (
    <Stack horizontalAlign="center">
      <TextField
        label="Company"
        value={data.name}
        underlined
        styles={maxWidthStyle}
      />
      <TextField
        label="Position"
        value={data.position}
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
    </Stack>
  );
};
