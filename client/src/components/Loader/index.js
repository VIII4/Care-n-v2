import React, { useState } from "react";
import "./style.css";

export default function Loader() {

  
  const {loading, isLoading} = useState(false)

  return (
    // <div className="loader-container">
    //   <div className="loader"></div>
    // </div>
    <div></div>
  );
}
