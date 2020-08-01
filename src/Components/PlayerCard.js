import React, { Component } from "react";
import playerImage from "./Images";

class PlayerCard extends Component {
  constructor() {
    super();
    this.state = {
      images: playerImage,
      customImage: "http://clipartmag.com/images/football-outline-vector-38.jpg"
    };
  }

  render() {
    const imageCard = this.state.images.map((image) => {
      if (this.props.player.name === image.name) {
        return image.url;
      } else {
        return null;
      }
    });
    let img = imageCard.toString().replace(/,/g, "")
    return (
      <div
        className="card mb-3 cardPlayer"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              style={{ height: "100%" }}
              src={img}
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.player.name}</h5>
              <p className="card-text">
                Number of Goals: {this.props.numberOfGoals}
              </p>
              <p className="card-text">Team: {this.props.team.name}</p>
              <p className="card-text">
                Position: {this.props.player.position}
              </p>
              <p className="card-text">
                Country: {this.props.player.nationality}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated {this.props.player.lastUpdated}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
