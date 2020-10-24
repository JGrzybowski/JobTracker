import React from "react";
import {
  Stack,
  FontWeights,
  PrimaryButton,
  ChoiceGroup,
} from "office-ui-fabric-react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { useHistory } from "react-router";

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const TemplateChooser: React.FunctionComponent = () => {
  const history = useHistory();
  function _moveToPreviousStep(): void {
    history.push("/initialWizard/personalData");
  }
  function _moveToNextStep(): void {
    history.push("/initialWizard/engineeringTemplate");
  }

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c",
        },
      }}
      gap={15}
    >
      <Text variant="xxLarge" block={true} styles={boldStyle}>
        Choose the CV template that is the most suitable for your situation:
      </Text>
      <ChoiceGroup
        label="Pick one image"
        options={[
          {
            key: "Engineering",
            iconProps: { iconName: "DeveloperTools" },
            text: "IT", // This text is long to show text wrapping.
          },
          {
            key: "FirstJob",
            iconProps: { iconName: "Education" },
            text: "First Job",
          },
        ]}
      />
      <Stack horizontal gap={3}>
        <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
        <PrimaryButton text="Next" onClick={_moveToNextStep} />
      </Stack>
    </Stack>
  );
};
