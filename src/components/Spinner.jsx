import React, { Component } from "react";
import Loading from "./ZZ5H.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="loder" width="26rem"></img>;
      </div>
    );
  }
}

export default Spinner;
