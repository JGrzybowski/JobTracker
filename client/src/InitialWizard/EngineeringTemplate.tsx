import React from 'react';
import { Stack, FontWeights } from 'office-ui-fabric-react';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { EducationSection } from './EducationSection';
import { WorkSection } from './WorkSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { LanguagesSection } from './LanguagesSection';
import { HobbiesSection } from './HobbiesSection';
import { LinksSection } from './LinksSection';

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const EngineeringTemplate: React.FunctionComponent = () => {
    let match = useRouteMatch();

    return (
        <Stack
            horizontalAlign="center"
            verticalAlign="center"
            verticalFill
            styles={{
                root: {
                    width: '960px',
                    margin: '0 auto',
                    textAlign: 'center',
                    color: '#605e5c'
                }
            }}
            gap={5}            
        >
            <Text variant="xxLarge" block={true} styles={boldStyle}>
                Engineering CV
            </Text>
            <Switch>
                <Route path={`${match!.path}/Education`}>
                    <EducationSection />
                </Route>
                <Route path={`${match!.path}/Work`}>
                    <WorkSection />
                </Route>
                <Route path={`${match!.path}/Projects`}>
                    <ProjectsSection />
                </Route>
                <Route path={`${match!.path}/Skills`}>
                    <SkillsSection />
                </Route>
                <Route path={`${match!.path}/Languages`}>
                    <LanguagesSection />
                </Route>
                <Route path={`${match!.path}/Hobbies`}>
                    <HobbiesSection />
                </Route>
                <Route path={`${match!.path}/Links`}>
                    <LinksSection />
                </Route>
                <Route path={`${match!.path}/Summary`}>
                    <EngineeringTemplateSummary />
                </Route>
                <Route path={`/InitialWizard/EngineeringTemplate`}>
                    <Redirect to={`${match!.path}/Education`} />              
                </Route>
            </Switch>        
            
        </Stack>
    );
}