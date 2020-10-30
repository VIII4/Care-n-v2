import React from "react";
import "./style.css";
import IssueImageGallery from "../IssueImageGallery";

export default function IssuesPopUp({
  selectedIssue,
  onVoteClick,
  onResolveClick,
}) {
  const CloseCardInnards = () => {
    // collect html collection --> convert to array
    var cardInnardsList = Array.prototype.slice.call(
      document.getElementsByClassName("cardInnards")
    );

    // hide all card innards with common className
    cardInnardsList.forEach((element) => {
      element.style.display = "none";
    });
  };
  const OpenCard = (event, type) => {
    // first close any open cards
    CloseCardInnards();

    // show card parent
    document.getElementById("cardContainer").style.visibility = "visible";

    if (document.getElementById("issueCardContent")) {
      // using type input render the appropriate card innards
      document.getElementById("issueCardContent").style.display = "block";
    }

    // close sidebar after cards render
    //this.CloseSidebar();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="mx-auto">
            <strong>{selectedIssue.category}</strong>
          </h3>
        </div>
        <div className="row">
          <p className="mx-auto">{selectedIssue.descr}</p>
        </div>
        
        {selectedIssue.images.length > 0 && (
            <IssueImageGallery
              images={selectedIssue.images}
              issueDesc={selectedIssue.descr}
            />
        )}

        <div className="row justify-content-between my-1 p-2">
          <button style={{borderRadius:"10px"}} className="btn blue-gradient btn-sm btn-rounded z-depth-1" type="button" onClick={onVoteClick}>
              Vote
          </button>
          <button
          style={{borderRadius:"10px"}}
            className="btn blue-gradient btn-sm btn-rounded z-depth-1"
            type="button"
            onClick={onResolveClick}
          >
            Resolve
          </button>
        </div>
        

        <div className="row py-2">
          <a
            onClick={(event) => {
              OpenCard(event);
            }}
          >
            Details
          </a>
        </div>
        
      </div>
    </>
  );
}
