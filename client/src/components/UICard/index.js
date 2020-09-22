import React from "react";
import "./style.css";

import IssueListButton from "../UIButtons/ListIssueButton";
import NewIssueButton from "../UIButtons/NewIssueButton";
import RefreshButton from "../UIButtons/RefreshButton";
import UserProfileButton from "../UIButtons/UserProfileButton";

export default function UICard(props) {
  const size = "15vw";
  return (
    <div id="UIcontainer">
      <a>
        <IssueListButton size={size} />
      </a>
      <a>
        <RefreshButton size={"10vw"} />
      </a>
      <a>
        <UserProfileButton size={size} />
      </a>
      <a>
        <NewIssueButton size={"25vw"} />
      </a>
    </div>
  );
}
