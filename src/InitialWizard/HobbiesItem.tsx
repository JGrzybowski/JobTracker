import React from 'react';
import { TextField, Stack } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const HobbiesItem: React.FunctionComponent = () => {
    return (
        <Stack horizontalAlign="center">
            <TextField label="Name" underlined styles={maxWidthStyle}/>
        </Stack>
    );
}