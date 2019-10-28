import React from 'react';
import { Stack, FontWeights, PrimaryButton, IconButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { LanguagesItem } from './LanguagesItem';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const LanguagesSection: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void { history.push('/initialWizard/engineeringTemplate/Skills') }
    function _moveToNextStep(): void { history.push('/initialWizard/engineeringTemplate/Hobbies') }
    
    return (
        <>
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                What languages do you speak?
            </Text>
            
            <LanguagesItem />
            <IconButton iconProps={{iconName: 'Add'}}/>

            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                <PrimaryButton text="Next" onClick={_moveToNextStep}/>
            </Stack>
        </>
    );
}