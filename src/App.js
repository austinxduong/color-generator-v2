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




}
