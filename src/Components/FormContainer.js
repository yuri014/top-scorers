import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import FormComponent from "./FormComponent"

class Form extends Component {
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
          "X-Auth-Token": "fb6ca21fe4f54a2d8e2c6e30123f2ec1",
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
        <FormComponent key={this.state.id} id={this.state.id} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {playersCards}
      </div>
    );
  }
}

export default Form;
