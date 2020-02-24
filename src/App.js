import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import Backdrop from "./components/Backdrop";

class App extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar toggle={this.toggleDrawer} />
        <Backdrop show={this.state.drawerOpen} />
        <main style={{ marginTop: "64px" }}>
          <p>Some text content</p>
        </main>
      </div>
    );
  }
}

export default App;
