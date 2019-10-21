import React from 'react';
import { Stack, FontWeights } from 'office-ui-fabric-react';
import { PersonalDataForm } from './PersonalDataForm';
import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const InitialWizard: React.FunctionComponent = () => {
  return (
    <Stack
    horizontalAlign="center"
    verticalAlign="center"
    verticalFill
    styles={{
        root: {
            width: '960px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#605e5c'
        }
    }}
    gap={15}>
        <Text variant="xxLarge" styles={boldStyle}>
          Let's start with some basic information about you
        </Text>
        <PersonalDataForm />
    </Stack>
  );
};

