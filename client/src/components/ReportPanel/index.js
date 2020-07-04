import React, { useState, Component } from "react";
import { OverlayView } from "@react-google-maps/api";
import IssuesPanel from "../IssuePanel";
import ConfirmPanel from "../ConfirmPanel";
import "./style.css";

export default class ReportPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueSelected: null,
    };
  }

  render() {
    const {
      currentLocation,
      onReportIssueClick,
      submitIssueReport,
    } = this.props;
    return (
      <OverlayView
        position={currentLocation}
        mapPaneName={OverlayView.FLOAT_PANE}
      >
        <>
          <IssuesPanel
            onReportIssueClick={onReportIssueClick}
            submitIssueReport={submitIssueReport}
          />
          <ConfirmPanel submitIssueReport={submitIssueReport} />
        </>
      </OverlayView>
    );
  }
}

// {this.state.showingReportPanel && (
//             <OverlayView
//               position={currentLocation}
//               mapPaneName={OverlayView.FLOAT_PANE}
//             >
//               {/* Use a function to return element from switch */}
//               <IssuesPanel
//                 onReportIssueClick={onReportIssueClick}
//                 // Testing
//                 submitIssueReport={submitIssueReport}
//               />
//             </OverlayView>
//           )}
//           {/* Enable reporting additional details/confirm panel, need to add type as prop*/}
//           {this.state.showingReportPanel && this.state.showingConfirmPanel && (
//             <OverlayView
//               position={currentLocation}
//               mapPaneName={OverlayView.FLOAT_PANE}
//             >
//               <ConfirmPanel submitIssueReport={submitIssueReport} />
//             </OverlayView>
//           )}
