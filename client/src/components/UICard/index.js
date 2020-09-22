import React from "react";
import "./style.css";

import IssueListButton from "../UIButtons/ListIssueButton";
import NewIssueButton from "../UIButtons/NewIssueButton";
import RefreshButton from "../UIButtons/RefreshButton";
import UserProfileButton from "../UIButtons/UserProfileButton";

export default function UICard({ onManualRefreshClick, onReportIssueClick }) {
  const size = "15vw";

  function buttonAlert() {
    alert("button Pressed");
  }

  return (
    <div id="UIcontainer" className="d-flex">
      {/* Single Button on Left */}
      <div className="UIoverlay align-self-end">
        <span id="profile-button">
          <a onClick={buttonAlert}>
            <UserProfileButton size={size} />
          </a>
        </span>
      </div>

      {/* List of buttons on Right */}
      <div id="right-buttons-list" className="UIoverlay align-self-end">
        <ul className="button-list ">
          <li className="button-list-item d-flex justify-content-end">
            <a onClick={buttonAlert}>
              <IssueListButton size={"10vh"} />
            </a>
            <a onClick={buttonAlert}>
              <RefreshButton size={"8vw"} />
            </a>
          </li>
          <li className="button-list-item">
            <a onClick={buttonAlert}>
              <NewIssueButton size={"40vw"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
