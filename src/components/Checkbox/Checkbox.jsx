import React, { Component } from "react";
import { CheckboxContainer } from "./style";

export default class CardSelect extends Component {
  render() {
    return <CheckboxContainer {...this.props} />;
  }
}
