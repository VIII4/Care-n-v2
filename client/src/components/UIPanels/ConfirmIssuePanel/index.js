import React, { useState } from "react";
import ReportForm from "../../ReportForm";
import "./style.css";

export default function ConfirmIssuePanel(props) {
  return (
    <div className="confirm-panel container ">
      <div className="row h-100  justify-content-center align-content-center">
        {/* pass typeSelected */}
        <ReportForm typeSelected={props.typeSelected}  toggleIssuePanel={props.toggleIssuePanel}/>
      </div>
    </div>
  );
}
