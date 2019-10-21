import React from 'react'
import { FontWeights, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { useHistory } from "react-router-dom";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const Welcome: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPersonalData(): void {
        history.push('/initialWizard')
    }

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

            <PrimaryButton text="Let's get started!" onClick={_moveToPersonalData} />
        </Stack>
    );
};
