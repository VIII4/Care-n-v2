import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import ContextBtn from "./components/ContextBtn";

// Force full screen at launch
//window.scrollTo(0, 1);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  loading = (toggle) => {
    this.setState({ isLoading: toggle });
  };

  render() {
    return (
      <Router>
        <div>
          {this.state.isLoading && <Loader />}
          <Sidebar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Main {...props} loading={this.loading} />}
            />
          </Switch>

          {/* <ContextBtn /> */}
        </div>
      </Router>
    );
  }
}

export default App;
