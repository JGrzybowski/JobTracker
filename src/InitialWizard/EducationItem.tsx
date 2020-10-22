import React from "react";
import { Stack, TextField, DatePicker } from "office-ui-fabric-react";
import { EducationSectionSchema } from "../models/ResumeSchema";

const maxWidthStyle = { root: { width: "100%" } };

export const EducationItem: React.FunctionComponent<{ data: EducationSectionSchema }> = ({ data }) => {
  return (
    <Stack horizontalAlign="center">
      <TextField label="University" underlined styles={maxWidthStyle} value={data.institution} />
      <TextField
        label="Description"
        underlined
        multiline
        styles={maxWidthStyle}
        value={`${data.studyType} ${data.area}`}
      />
      <Stack horizontal>
        <DatePicker label="From" underlined value={data.startDate ? new Date(data.startDate) : new Date("")} />
        <DatePicker label="To" underlined value={data.endDate ? new Date(data.endDate) : new Date("")} />
      </Stack>
    </Stack>
  );
};
