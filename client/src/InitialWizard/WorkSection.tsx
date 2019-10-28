import React from 'react';
import { Stack, FontWeights, PrimaryButton, IconButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { WorkItem } from './WorkItem';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const WorkSection: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void { history.push('/InitialWizard/EngineeringTemplate/Education') }
    function _moveToNextStep(): void { history.push('/InitialWizard/EngineeringTemplate/Projects') }
    
    return (
        <>
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                How about your previous work experiences?
            </Text>
            
            <WorkItem />
            <IconButton iconProps={{iconName: 'Add'}}/>

            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                <PrimaryButton text="Next" onClick={_moveToNextStep}/>
            </Stack>
        </>
    );
}