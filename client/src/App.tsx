import React from 'react';
import { Stack, FontWeights } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
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
      gap={15}
    >
      <img width="250 px" src="./easternwaves.svg" alt="logo" />
      <Text variant="mega" styles={boldStyle}>
        Welcome to Job Tracker
      </Text>

      
    </Stack>
  );
};
