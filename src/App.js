import React, { Component } from "react";
import "./App.css";
import PlayerCard from "./Components/PlayerCard";
import Header from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      players: [],
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    fetch(
      `https://api.football-data.org/v2/competitions/${this.state.id}/scorers`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": "****************",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const arrayPLayers = data.scorers;
        console.log(data);
        this.setState({
          players: arrayPLayers,
          loading: false,
        });
        console.log(this.state.players);
      });
  }

  render() {
    let playersCards = "";
    if (this.state.loading) {
      playersCards = "";
    } else {
      playersCards = this.state.players.map((item) => (
        <PlayerCard
          key={item.player.id}
          player={item.player}
          team={item.team}
          numberOfGoals={item.numberOfGoals}
        />
      ));
    }

    return (
      <div>
        <Header />
        <form action="">
          <select
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
            className="custom-select custom-select-lg mb-3"
          >
            <option value="BL1">Bundesliga</option>
            <option value="BSA">Brasileirão Série A</option>
            <option value="PPL">Primeira Liga</option>
            <option value="PL">Premier League</option>
            <option value="CL">UEFA Champions League</option>
            <option value="FL1">Ligue 1 France</option>
            <option value="SA">Seria A Italy</option>
            <option value="PD">La Liga</option>
          </select>
          <br />
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        {playersCards}
      </div>
    );
  }
}

export default App;
