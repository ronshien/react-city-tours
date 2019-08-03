import React from "react";

import "./tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../tourData";

class TourList extends React.Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.state;
    const filtered = tours.filter(tour => tour.id !== id);
    this.setState({ tours: filtered });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
