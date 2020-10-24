import React from "react";
import { Stack, FontWeights } from "office-ui-fabric-react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router";
import { Text } from "office-ui-fabric-react/lib/Text";
import { EducationSection } from "./EducationSection";
import { WorkSection } from "./WorkSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { LanguagesSection } from "./LanguagesSection";
import { HobbiesSection } from "./HobbiesSection";
import { LinksSection } from "./LinksSection";
import { EngineeringTemplateSummary } from "./EngineeringTemplateSummary";
import { ResumeSchema } from "../models/ResumeSchema";

const boldStyle = { root: { fontWeight: FontWeights.semibold, width: "60%" } };

export const EngineeringTemplate: React.FunctionComponent<{
  profile?: ResumeSchema;
}> = ({ profile }) => {
  const match = useRouteMatch();

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c",
        },
      }}
      gap={5}
    >
      <Text variant="xxLarge" block={true} styles={boldStyle}>
        Engineering CV
      </Text>
      <Switch>
        <Route path={`${match?.path}/Education`}>
          <EducationSection data={profile?.education} />
        </Route>
        <Route path={`${match?.path}/Work`}>
          <WorkSection data={profile?.work} />
        </Route>
        <Route path={`${match?.path}/Projects`}>
          <ProjectsSection data={profile?.projects} />
        </Route>
        <Route path={`${match?.path}/Skills`}>
          <SkillsSection data={profile?.skills} />
        </Route>
        <Route path={`${match?.path}/Languages`}>
          <LanguagesSection data={profile?.languages} />
        </Route>
        <Route path={`${match?.path}/Hobbies`}>
          <HobbiesSection data={profile?.interests} />
        </Route>
        <Route path={`${match?.path}/Links`}>
          <LinksSection data={profile?.basics?.profiles} />
        </Route>
        <Route path={`${match?.path}/Summary`}>
          <EngineeringTemplateSummary data={profile} />
        </Route>
        <Route path={`/InitialWizard/EngineeringTemplate`}>
          <Redirect to={`${match?.path}/Education`} />
        </Route>
      </Switch>
    </Stack>
  );
};
