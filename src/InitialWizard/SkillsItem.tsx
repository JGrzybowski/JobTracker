import React from 'react';
import { Stack, TextField, Rating } from 'office-ui-fabric-react';

const maxWidthStyle = { root:{width: '100%'} }

export const SkillsItem: React.FunctionComponent = () => {
    return (
        <Stack horizontal horizontalAlign="center">
            <TextField label="Name" underlined styles={maxWidthStyle}/>
            <Rating label="Skill level" styles={maxWidthStyle}/>
        </Stack>
    );
}