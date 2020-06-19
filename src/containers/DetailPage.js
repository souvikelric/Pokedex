import React, { Component } from "react";
import "./DetailPage.css";

class DetailPage extends Component {
  componentDidMount() {
    console.log(this.props.history.location["state"]["url"]);
  }

  render() {
    return (
      <div className="Detail">
        <img alt="poke" src={this.props.history.location["state"]["url"]} />
        <div className="pokeCard">
          <h1 style={{ marginBottom: "30px", fontSize: "40px" }}>
            {this.props.history.location["state"]["name"]}
          </h1>
          <h3 style={{ marginBottom: "30px", fontSize: "30px" }}>
            #{this.props.history.location["state"]["id"]}
          </h3>
          <h3 style={{ marginBottom: "30px", fontSize: "30px" }}>
            Height : {this.props.history.location["state"]["height"]} ft
          </h3>
          <h3 style={{ marginBottom: "30px", fontSize: "30px" }}>
            Weight : {this.props.history.location["state"]["weight"]} lbs
          </h3>
          <h3>
            Types :
            {this.props.history.location["state"]["type"].map((m) => {
              return tab(m["type"]["name"]);
            })}
          </h3>
        </div>
      </div>
    );
  }
}

export default DetailPage;

const tab = (String) => {
  return <span className="Tab">{String}</span>;
};
