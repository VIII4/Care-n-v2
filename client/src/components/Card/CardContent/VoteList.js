import React from "react";
import "../Card.css";
import { IoIosClose  } from "react-icons/io";

class VoteList extends React.Component {
  // card methods
  CloseCardInnards = () => {
    // collect html collection --> convert to array
    var cardInnardsList = Array.prototype.slice.call(
      document.getElementsByClassName("cardInnards")
    );

    // hide all card innards with common className
    cardInnardsList.forEach((element) => {
      element.style.display = "none";
    });
  };
  CloseCard = () => {
    // hide card containter
    document.getElementById("cardContainer").style.visibility = "hidden";
    this.CloseCardInnards();
  };
  OpenCard = (event, type) => {
    // first close any open cards
    this.CloseCardInnards();

    // show card parent
    document.getElementById("cardContainer").style.visibility = "visible";

    if (document.getElementById("issueCardContent")) {
      // using type input render the appropriate card innards
      document.getElementById("issueCardContent").style.display = "block";
    }

    // close sidebar after cards render
    //this.CloseSidebar();
  };

  render() {
    return (
      // this.props is coming from App.js --> Main.js --> Card.js
      <div id="voteCardContent" className="textBlock cardInnards h-100">
        <div className="headerContainer">
          <h3 className="bold">{this.props.header}</h3>
        </div>
        <div className="container my-1 h-100">
        {this.props.localIssues.map((issue) => {
            return (
              <div key={issue._id} className="row  justify-content-between">
                <a
                className="align-self-center"
                  onClick={(event) => {
                    this.props.setSelectedIssue(issue);
                    this.OpenCard(event);
                  }}
                >
                  {issue.category}{" "}
                </a>
                <button style={{borderRadius:"10px"}} className="btn blue-gradient btn-sm btn-rounded z-depth-1" onClick={this.props.onVoteClick}>Vote</button>
              </div>
              
            );
          })}
          <div className="row d-flex align-self-end">
          <button type="button" class="btn blue-gradient btn-rounded waves-effect px-2 py-1" onClick={this.props.toggleIssuePanel}><IoIosClose style={{fontSize: "1.5rem"}}/></button>
          </div>
        </div>
      </div>
    );
  }


  // return (
  //   // this.props is coming from App.js --> Main.js --> Card.js
  //   <div id="voteCardContent" className="textBlock cardInnards">
  //     <div className="headerContainer">
  //       <h3 className="bold">{this.props.header}</h3>
  //     </div>
  //     <ul>
  //       {this.props.localIssues.map((issue) => {
  //         return (
  //           <li key={issue._id} className="labelContainer">
  //             <a
  //               onClick={(event) => {
  //                 this.props.setSelectedIssue(issue);
  //                 this.OpenCard(event);
  //               }}
  //             >
  //               {issue.category}{" "}
  //             </a>
  //             <button style={{borderRadius:"10px"}} className="btn blue-gradient btn-sm btn-rounded z-depth-1" onClick={this.props.onVoteClick}>Vote</button>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
  // }
}

export default VoteList;
