import React from 'react';
import { Stack, TextField, DatePicker, IconButton, FontWeights, PrimaryButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };
const maxWidthStyle = { root:{width: '100%'} }

export const EducationSection: React.FunctionComponent = () => {
    let history = useHistory();

    function _moveToPreviousStep(): void {
        history.push('/initialWizard/chooseTemplate')
    }

    function _moveToNextStep(): void {
        //history.push('/initialWizard/WorkSection')
    }
    
    return (
        <>
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                Let's start with your education.
            </Text>
            <Stack horizontalAlign="center">
                <TextField label="University" underlined styles={maxWidthStyle}/>
                <TextField label="Description" underlined multiline styles={maxWidthStyle}/>
                <Stack horizontal>
                    <DatePicker label="From" underlined/>
                    <DatePicker label="To" underlined/>
                </Stack>
                <IconButton iconProps={{iconName: 'Add'}}/>
            </Stack>
            <Stack horizontal gap={3}>
                <PrimaryButton text="Back" onClick={_moveToPreviousStep} />
                <PrimaryButton text="Next" onClick={_moveToNextStep}/>
            </Stack>
        </>
    );
}