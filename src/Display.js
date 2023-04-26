import React, { Component } from "react";

export default class display extends Component {
  render() {
    return (
      <div>
        <h2>
          i'm {this.props.namep} and age {this.props.agep}
        </h2>
      </div>
    );
  }
}
