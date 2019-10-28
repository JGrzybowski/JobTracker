import React from 'react';
import { Stack, TextField, DatePicker } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const WorkItem: React.FunctionComponent = () => {
    return (
        <Stack horizontalAlign="center">
            <TextField label="Company" underlined styles={maxWidthStyle}/>
            <TextField label="Position" underlined styles={maxWidthStyle}/>
            <TextField label="Description" underlined multiline styles={maxWidthStyle}/>
            <Stack horizontal>
                <DatePicker label="From" underlined/>
                <DatePicker label="To" underlined/>
            </Stack>
        </Stack>
    );
}