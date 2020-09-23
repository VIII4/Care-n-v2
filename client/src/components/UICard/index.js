import React, { useState } from "react";
import "./style.css";

import IssueListButton from "../UIButtons/ListIssueButton";
import NewIssueButton from "../UIButtons/NewIssueButton";
import RefreshButton from "../UIButtons/RefreshButton";
import UserProfileButton from "../UIButtons/UserProfileButton";

//#region Responsive Helpers
//Helper function for media querie, set responsive size of UI
let size;
const checkSize = () => {
  if (window.matchMedia("(max-width: 380px)").matches) {
    //alert("Mobile");
    size = 0.4;
  } else if (window.matchMedia("(max-width: 420px)").matches) {
    //alert("Mobile");
    size = 0.45;
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    //alert("tablet");
    size = 0.8;
  } else if (window.matchMedia("(max-width: 1440px)").matches) {
    //alert("desktop");
    size = 0.6;
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
//#endregion

//#region UI Menu Helpers
const CloseCardInnards = () => {
  // collect html collection --> convert to array
  const cardInnardsList = Array.prototype.slice.call(
    document.getElementsByClassName("cardInnards")
  );

  // hide all card innards with common className
  cardInnardsList.forEach((element) => {
    element.style.display = "none";
  });
};

const CloseCard = () => {
  // hide card containter
  document.getElementById("cardContainer").style.visibility = "hidden";
  CloseCardInnards();
};

const OpenCard = (event, type) => {
  // first close any open cards
  CloseCardInnards();

  // open card container
  document.getElementById("cardContainer").style.visibility = "visible";

  // insert voting card innards
  document.getElementById("voteCardContent").style.display = "block";
};

CloseCardInnards();
//#endregion

export default function UICard({ onManualRefreshClick, onReportIssueClick }) {
  //State for toggle
  const [bool, setBool] = useState(false);

  const OpenToggle = () => {
    // toggle boolean value to either close or open card

    if (!bool) {
      OpenCard();
      setBool(false);
    } else {
      CloseCard();
      setBool(true);
    }
  };

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
            <a className="ui-button" onClick={OpenToggle}>
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
