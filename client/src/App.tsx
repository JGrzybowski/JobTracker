import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Welcome } from './Welcome';
import { InitialWizard } from './InitialWizard/InitialWizard';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);
export const App: React.FunctionComponent = () => {
  return (
    <Router>
        <Switch>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/initialWizard">
                <InitialWizard />
            </Route>
            <Route exact path="/">
                <Redirect to="/welcome" />
            </Route>       
        </Switch>
    </Router>
  );
};
