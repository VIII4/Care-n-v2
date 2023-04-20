import React, { useState } from "react";
import Main from "./pages/Main";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import ContextBtn from "./components/ContextBtn";

// Force full screen at launch
//window.scrollTo(0, 1);

function App(props) {
  const [isLoading, setLoading] = useState(false);

  const loading = (toggle) => {
    setLoading(toggle);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Sidebar />
      <Main {...props} loading={loading} />
    </>
  );
}

export default App;
