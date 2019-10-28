import React from 'react';
import { Stack, FontWeights, PrimaryButton, IconButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { LinksItem } from './LinksItem';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const LinksSection: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void { history.push('/initialWizard/engineeringTemplate/Hobbies') }
    function _moveToNextStep(): void { history.push('/initialWizard/engineeringTemplate/Summary') }
    
    return (
        <>
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                Any special links you would want to show your future employer?
            </Text>
            
            <LinksItem />
            <IconButton iconProps={{iconName: 'Add'}}/>

            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                <PrimaryButton text="Next" onClick={_moveToNextStep}/>
            </Stack>
        </>
    );
}