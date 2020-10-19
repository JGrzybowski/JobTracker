import React from "react";
import { TextField, DatePicker, DayOfWeek, PrimaryButton, FontWeights } from "office-ui-fabric-react";
import { useHistory } from "react-router";
import { Text } from "office-ui-fabric-react/lib/Text";
import { BasicsSection } from "../models/ResumeSchema";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const PersonalDataForm: React.FunctionComponent<{ data?: BasicsSection }> = ({ data }) => {
  let history = useHistory();

  function _moveNextStep(): void {
    history.push("/initialWizard/chooseTemplate");
  }

  if (!data) data = {};

  return (
    <>
      <Text variant="xxLarge" styles={boldStyle}>
        Let's start with some basic information about you
      </Text>
      <TextField label="Full Name" value={data.name} />
      {/* <DatePicker label="Date of Birth" ariaLabel="Date of Birth" firstDayOfWeek={DayOfWeek.Monday} /> */}
      <TextField label="Email" value={data.email} />
      <TextField label="Phone" value={data.phone} />
      <PrimaryButton text="Next" onClick={_moveNextStep} />
    </>
  );
};
