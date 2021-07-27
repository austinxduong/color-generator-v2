import React, { Component } from "react";

import randomColor from "randomcolor";

import copy from "clipboard-copy";

import "./styles.css";

export default class Color extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            bgColor: "",
            display: false
        };
    }

    clickHandler = (event) => {
      copy(this.state.bgColor);

      this.setState({ display: true });
    }

    clickHideHandler = (event) => {
      this.setState({ display: false });
    };

    MouseHover = (e) => {
      let color = randomColor();
      this.setState({
        bgColor: color
      });
    }

    render() {
      return (
        <>
          <div
            onClick={this.clickHideHandler}
            style={{
              display: this.state.display ? "" : "none",
              backgroundColor: "black",
              height: "70px",
              width: "100%"
            }}
          >
            <h5 style={{ color: "white", cursor: "pointer", margin: "auto 0px" }}>
              {" "}
              You picked this color, so we copied the hex code for you. Just paste it where you desire ;D!{" "}
            </h5>
          </div>

          <div className="divOuter">
            <div
              onClick={this.clickHandler}
              style={{
                backgroundColor: this.state.bgColor
              }}
              onMouseMove={this.MouseHover}
              className="App"
            />
          </div>
        </>
      )
    };
  }

