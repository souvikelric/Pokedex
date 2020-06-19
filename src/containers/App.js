import React, { Component } from "react";
import CardList from "../components/CardList";
import Fixed from "../components/Fixed";
import "./App.css";
import SearchField from "./SearchField";
import GenChooser from "./GenChooser";

class App extends Component {
  state = {
    cardinfo: [],
    search: "",
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          cardinfo: data["results"],
          filterPoke: data["results"],
        })
      );
  }

  onSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.props);
  };

  onChoose = (e) => {
    if (e.target.innerText === "2") {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100")
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            cardinfo: data["results"],
            filterPoke: data["results"],
          })
        );
    }
    if (e.target.innerText === "1") {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            cardinfo: data["results"],
            filterPoke: data["results"],
          })
        );
    }
    if (e.target.innerText === "3") {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135")
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            cardinfo: data["results"],
            filterPoke: data["results"],
          })
        );
    }
  };

  render() {
    const filterPoke = this.state.cardinfo.filter((card) => {
      return card["name"]
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="h1">My Pokedex App</h1>
        <SearchField search={this.onSearch} />
        <GenChooser change={this.onChoose} />
        <Fixed>
          <CardList cardinfo={filterPoke} />
        </Fixed>
      </div>
    );
  }
}

export default App;
