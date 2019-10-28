import React from 'react';
import { Stack, FontWeights, PrimaryButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const EngineeringTemplateSummary: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void { history.push('/initialWizard/engineeringTemplate/Links') }
    // function _moveToNextStep(): void { history.push('/initialWizard/engineeringTemplate/Links') }

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
            gap={5}            
        >
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                Summary
            </Text>

            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                {/* <PrimaryButton text="Next" onClick={_moveToNextStep}/> */}
            </Stack>
        </Stack>
    );
}