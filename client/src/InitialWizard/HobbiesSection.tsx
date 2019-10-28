import React from 'react';
import { Stack, FontWeights, PrimaryButton, IconButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { HobbiesItem } from './HobbiesItem';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const HobbiesSection: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void { history.push('/initialWizard/engineeringTemplate/Languages') }
    function _moveToNextStep(): void { history.push('/initialWizard/engineeringTemplate/Links') }
    
    return (
        <>
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                What are your hobbies?
            </Text>
            
            <HobbiesItem />
            <IconButton iconProps={{iconName: 'Add'}}/>

            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                <PrimaryButton text="Next" onClick={_moveToNextStep}/>
            </Stack>
        </>
    );
}