import React, { Component, component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsite: CAMPSITES,
    };
  }

  render() {
    return <Directory campsites={this.state.campsies} />;
  }
}
export default Main;
