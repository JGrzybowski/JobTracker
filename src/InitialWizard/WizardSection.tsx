import React, { ReactNode } from "react";
import { useHistory } from "react-router";
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontWeights } from "@uifabric/styling";
import {
  IconButton,
  Stack,
  PrimaryButton,
  BaseButton,
  Button,
  IStackTokens,
} from "office-ui-fabric-react";

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export type IconClickHandler = (
  event: React.MouseEvent<
    | HTMLAnchorElement
    | HTMLButtonElement
    | HTMLDivElement
    | BaseButton
    | Button
    | HTMLSpanElement,
    MouseEvent
  >
) => void;

interface WizardSectionProps {
  children: ReactNode;
  title: string;
  previousStepUri: string;
  nextStepUri?: string;
  onAddClick?: IconClickHandler;
}

const styles: IStackTokens = { childrenGap: 35 };

export const WizardSection: React.FunctionComponent<WizardSectionProps> = (
  props: WizardSectionProps
) => {
  const history = useHistory();

  function _moveToPreviousStep(): void {
    if (props.previousStepUri) history.push(props.previousStepUri);
  }

  function _moveToNextStep(): void {
    if (props.nextStepUri) history.push(props.nextStepUri);
  }

  return (
    <>
      <Text variant="xxLarge" block={true} styles={boldStyle}>
        {props.title}
      </Text>

      <Stack tokens={styles}>{props.children}</Stack>

      <IconButton iconProps={{ iconName: "Add" }} onClick={props.onAddClick} />

      <Stack horizontal gap={3}>
        <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
        <PrimaryButton text="Next" onClick={_moveToNextStep} />
      </Stack>
    </>
  );
};
