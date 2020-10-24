import React from "react";
import { Stack, TextField, DatePicker } from "office-ui-fabric-react";
import { EducationSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const EducationItem: React.FunctionComponent<{
  data: EducationSectionSchema;
}> = ({ data }) => {
  return (
    <Stack horizontalAlign="center">
      <TextField
        label="University"
        value={data.institution}
        underlined
        styles={maxWidthStyle}
      />
      <TextField
        label="Description"
        value={`${data.studyType} ${data.area}`}
        underlined
        multiline
        styles={maxWidthStyle}
      />
      <Stack horizontal>
        <DatePicker
          label="From"
          underlined
          value={new Date(data.startDate ?? "")}
        />
        <DatePicker
          label="To"
          underlined
          value={new Date(data.endDate ?? "")}
        />
      </Stack>
    </Stack>
  );
};
