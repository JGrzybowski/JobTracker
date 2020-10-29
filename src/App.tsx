import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Welcome } from "./Welcome";
import { InitialWizard } from "./InitialWizard/InitialWizard";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";
import { Navigation } from "./navigation/Navigation";
import { Stack } from "office-ui-fabric-react";
import { SampleResume } from "./models/SampleResume";
import { Resume } from "./models/ResumeDataModels";

initializeIcons(/* optional base url */);

export const App: React.FunctionComponent = () => {
  const profile: Resume = SampleResume();

  return (
    <Stack horizontal gap={150}>
      <Stack.Item align="stretch">
        <Navigation />
      </Stack.Item>
      <Stack.Item align="stretch">
        <div className="ms-depth-16" style={{ height: "100vh" }}>
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/initialWizard">
              <InitialWizard profile={profile} />
            </Route>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
          </Switch>
        </div>
      </Stack.Item>
    </Stack>
  );
};
