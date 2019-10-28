import React from 'react';
import { Stack, TextField, Rating } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const LanguagesItem: React.FunctionComponent = () => {
    return (
        <Stack horizontal>
            <TextField label="Name" underlined styles={maxWidthStyle}/>
            <Rating label="Skill level" styles={maxWidthStyle}/>
        </Stack>
    );
}