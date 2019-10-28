import React from 'react';
import { Stack, TextField, DatePicker } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const EducationItem: React.FunctionComponent = () => {
    return (
        <Stack horizontalAlign="center">
            <TextField label="University" underlined styles={maxWidthStyle}/>
            <TextField label="Description" underlined multiline styles={maxWidthStyle}/>
            <Stack horizontal>
                <DatePicker label="From" underlined/>
                <DatePicker label="To" underlined/>
            </Stack>
        </Stack>
    );
}