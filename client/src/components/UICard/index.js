import React from "react";
import "./style.css";

import IssueListButton from "../UIButtons/ListIssueButton";
import NewIssueButton from "../UIButtons/NewIssueButton";
import RefreshButton from "../UIButtons/RefreshButton";
import UserProfileButton from "../UIButtons/UserProfileButton";

let size;

//Helper function for media querie, set responsive size of UI
const checkSize = () => {
  alert("screen width = " + window.screen.width);
  if (window.matchMedia("(max-width: 420px)").matches) {
    //alert("Mobile");
    size = 0.4;
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    //alert("tablet");
    size = 0.8;
  } else if (window.matchMedia("(max-width: 1440px)").matches) {
    //alert("desktop");
    size = 0.65;
  } else {
    size = 0.75;
  }
};

//Run check size at runtime
checkSize();
//event listener for screen resize
window.addEventListener("resize", function () {
  checkSize();
});

export default function UICard({ onManualRefreshClick, onReportIssueClick }) {
  return (
    <div id="UIcontainer" className="d-flex">
      {/* Single Button on Left */}
      <div className="UIoverlay align-self-end">
        <span id="profile-button">
          <a className="ui-button">
            <UserProfileButton size={size} />
          </a>
        </span>
      </div>

      {/* List of buttons on Right */}
      <div id="right-buttons-list" className="UIoverlay align-self-end">
        <ul className="button-list ">
          <li className="button-list-item d-flex justify-content-end">
            <a className="ui-button">
              <IssueListButton size={size} />
            </a>
            <a
              className="ui-button align-self-center"
              onClick={onManualRefreshClick}
            >
              <RefreshButton size={size} />
            </a>
          </li>
          <li className="button-list-item">
            <a className="ui-button">
              <NewIssueButton size={size} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
