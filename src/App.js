import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "right",
      hovering: false,
    };
  }
  //handleClick function which handle the position
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  //handleMouseEnter function which handle the hovering condintion

  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  //handleMouseLeave function which handle the hovering condintion

  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    return (
      <div className="App">

        {
          //buttons
        }{" "}
        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position} />}
        </div>
      </div>
    );
  }
}

export default App;
