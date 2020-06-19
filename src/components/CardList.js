import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  helper(str) {}
  render() {
    return (
      <div>
        {this.props.cardinfo.map((m) => (
          <Card name={m["name"]} url={m["url"]} key={m["name"]} />
        ))}
      </div>
    );
  }
}

export default CardList;
