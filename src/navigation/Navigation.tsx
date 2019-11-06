import React from "react";
import { useHistory } from "react-router-dom";
import "office-ui-fabric-react/dist/css/fabric.css";
import { Nav, INavLink } from "office-ui-fabric-react/lib/Nav";

export const Navigation: React.FunctionComponent = () => {
  let groups = [
    {
      links: [
        {
          name: "Home",
          url: "/",
          expandAriaLabel: "Expand Home section",
          collapseAriaLabel: "Collapse Home section"
        },
        {
          name: "Wizard",
          url: "/InitialWizard",
          key: "wizard"
        },
        {
          name: "CV Data",
          url: "/CV",
          key: "cv",
          disabled: true
        },
        {
          name: "Job Search",
          url: "/JobSearch",
          key: "jobsearch",
          disabled: true
        }
      ]
    }
  ];

  let history = useHistory();
  const navLinkClick = (
    event?: React.MouseEvent<HTMLElement, MouseEvent>,
    element?: INavLink
  ) => {
    event!.preventDefault();
    history.push(element!.url);
  };

  return (
    <div className="ms-depth-4" style={{ height: "100vh" }}>
      <Nav groups={groups} onLinkClick={navLinkClick} />
    </div>
  );
};
