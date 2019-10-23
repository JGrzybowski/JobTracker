import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { PersonalDataForm } from './PersonalDataForm';
import { useHistory, Switch, Route, useRouteMatch, Redirect } from 'react-router';
import { TemplateChooser } from './TemplateChooser';


export const InitialWizard: React.FunctionComponent = () => {
    let history = useHistory();
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
            gap={15}
        >
            {/* TODO user match.path */}
            <Switch>
                <Route path={'/initialWizard/personalData'}>
                    <PersonalDataForm />
                </Route>
                <Route path={'/initialWizard/chooseTemplate'}>
                    <TemplateChooser />
                </Route>
                <Route path='/initialWizard'>
                    <Redirect to={'/initialWizard/personalData'} />              
                </Route>
            </Switch>           
        </Stack>
    );
};

