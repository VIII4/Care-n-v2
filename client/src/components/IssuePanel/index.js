import React from "react";
import ReportIssueButton from "../ReportIssueButton";
import "./IssuePanel.css";

export default function IssuesPanel({ onReportIssueClick, submitIssueReport }) {
  return (
    <div className="container panel-background panel-position w-100">
      {/* first row */}
      <div className="row ">
        <div className="col">
          <ReportIssueButton
            issueType="Wildlife"
            onReportIssueClick={onReportIssueClick}
          />
        </div>
        <div className="col">
          <ReportIssueButton
            issueType="Structural"
            onReportIssueClick={onReportIssueClick}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-between ">
        <div className="col-5 w-100 ">
          <ReportIssueButton
            issueType="Roads"
            onReportIssueClick={onReportIssueClick}
          />
        </div>

        <div className="col-5 w-100">
          <ReportIssueButton
            issueType="Utility"
            onReportIssueClick={onReportIssueClick}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-6">
          {" "}
          <ReportIssueButton
            issueType="Vandalism"
            onReportIssueClick={onReportIssueClick}
          />
        </div>
        <div className="col-6">
          <ReportIssueButton
            issueType="Trash"
            onReportIssueClick={onReportIssueClick}
          />
        </div>
      </div>

      {/* second row */}
      {/* <div className="buttonPanelContainer center">
        <ReportIssueButton
          issueType="Other"
          onReportIssueClick={onReportIssueClick}
        />
      </div> */}
    </div>
  );
}
