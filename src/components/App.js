import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCities: this.cityList.filter((city) => city.country === "India"),
    };
    this.cityList = [
      { key: "location1", name: "Goa", country: "India" },
      { key: "location2", name: "Amsterdam", country: "Netherlands" },
      { key: "location3", name: "New York", country: "USA" },
      { key: "location4", name: "Darjeeling", country: "India" },
      { key: "location5", name: "Tokyo", country: "Japan" },
      { key: "location6", name: "Lonavala", country: "India" },
      { key: "location7", name: "Brandenburg Gate", country: "Germany" },
      { key: "location8", name: "Reichstag Building", country: "Germany" },
      { key: "location9", name: "Museum Island", country: "Germany" },
      { key: "location10", name: "Munnar", country: "India" },
      { key: "location11", name: "Leh Ladakh", country: "India" },
      { key: "location12", name: "Goa", country: "India" },
      { key: "location13", name: "Agra", country: "India" },
      { key: "location14", name: "Dalhousie", country: "India" },
      { key: "location15", name: "Coorg", country: "India" },
      { key: "location16", name: "Rome", country: "Italy" },
      { key: "location17", name: "Milan", country: "Italy" },
      { key: "location18", name: "Venice", country: "Italy" },
      { key: "location19", name: "Varanasai", country: "India" },
      { key: "location20", name: "Jaipur", country: "India" },
      { key: "location21", name: "The Hofburg", country: "Austria" },
      { key: "location22", name: "Belvedere Palace", country: "Austria" },
      { key: "location23", name: "St. Stephen Cathedral", country: "Austria" },
      { key: "location24", name: "Kahna National Park", country: "India" },
      { key: "location25", name: "Amritsar", country: "India" },
      { key: "location26", name: "Mussoorie", country: "India" },
      { key: "location27", name: "Mount Abu", country: "India" },
      { key: "location28", name: "Tirupati", country: "India" },
    ];
  }

  render() {
    return (
      <div id="main">
        <h3>Domestic Tourist Cities</h3>
        <ol key="locationList">
          {this.state.filteredCities.map((city) => (
            <li key={city.key}>{city.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
