import React from "react";
import "./style.css";

import IssueListButton from "../UIButtons/ListIssueButton";
import NewIssueButton from "../UIButtons/NewIssueButton";
import RefreshButton from "../UIButtons/RefreshButton";
import UserProfileButton from "../UIButtons/UserProfileButton";

export default function UICard(props) {
  const size = "15vw";
  return (
    <div id="UIcontainer" class="d-flex">
      {/* Single Button on Left */}
      <div class="UIoverlay align-self-end">
        <span id="profile-button">
          <a>
            <UserProfileButton size={size} />
          </a>
        </span>
      </div>

      {/* List of buttons on Right */}
      <div id="right-buttons-list" class="UIoverlay align-self-end">
        <ul class="button-list ">
          <li class="button-list-item d-flex justify-content-end">
            <a class="button-anchor">
              <IssueListButton size={"9vh"} />
            </a>
            <a class="button-anchor">
              <RefreshButton size={"8vw"} />
            </a>
          </li>
          <li class="button-list-item">
            <a class="button-anchor">
              <NewIssueButton size={"40vw"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
