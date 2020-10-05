import React, { useState } from "react";
import $ from "jquery";
import {
  FaBuilding,
  FaTrashAlt,
  FaRoad,
  FaPaintRoller,
  FaTree,
  FaPlug,
} from "react-icons/fa";

import "./style.css";

export default function CreateIssuePanel({ handleIssueSelect }) {
  return (
    <div className="ui-panel container issue-panel ">
      <div className="issue-strip row p-2 justify-content-between">
        <div className="col-3  p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Trash");
            }}
          >
            <FaTrashAlt className="btn-icon" />
            Trash
          </button>
        </div>
        <div className="col-3 p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Structural");
            }}
          >
            <FaBuilding className="btn-icon" />
            Struct
          </button>
        </div>
        <div className="col-3 p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Vandalism");
            }}
          >
            <FaPaintRoller className="btn-icon" />
            Vandal
          </button>
        </div>
      </div>
      <div className="row  h-25"></div>
      <div className="issue-strip row p-2 justify-content-between">
        <div className="col-3  p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Nature");
            }}
          >
            <FaTree className="btn-icon" />
            Nature
          </button>
        </div>
        <div className="col-3 p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Utility");
            }}
          >
            <FaPlug className="btn-icon" />
            Utility
          </button>
        </div>
        <div className="col-3 p-0">
          <button
            type="button"
            class="btn-issue btn btn-elegant"
            onClick={() => {
              handleIssueSelect("Roads");
            }}
          >
            <FaRoad className="btn-icon" />
            Roads
          </button>
        </div>
      </div>
    </div>
  );
}