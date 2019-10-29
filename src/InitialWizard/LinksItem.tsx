import React from 'react';
import { Stack, TextField } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const LinksItem: React.FunctionComponent = () => {
    return (
        <Stack >
            <TextField label="Name" underlined styles={maxWidthStyle}/>
            <TextField label="Link" underlined styles={maxWidthStyle}/>
        </Stack>
    );
}