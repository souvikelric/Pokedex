import React from "react";
import "./Card.css";
import { withRouter } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const Card = (props) => {
  const clickHandler = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        props.history.push({
          pathname: "/DetailPage",
          state: {
            url: `https://pokeres.bastionbot.org/images/pokemon/${props.url.substring(
              props.url.indexOf("pokemon/") + 8,
              props.url.length - 1
            )}.png`,
            name: data["name"],
            id: data["id"],
            height: data["height"],
            weight: data["weight"],
            moves: data["moves"],
            type: data["types"],
          },
        });
      });
  };
  const { name, url } = props;
  return (
    <div className="Card" onClick={clickHandler}>
      <img
        className="img"
        alt="poke"
        src={`https://pokeres.bastionbot.org/images/pokemon/${url.substring(
          url.indexOf("pokemon/") + 8,
          url.length - 1
        )}.png`}
      ></img>
      <h1 className="name">{name}</h1>
    </div>
  );
};

export default withRouter(Card);
