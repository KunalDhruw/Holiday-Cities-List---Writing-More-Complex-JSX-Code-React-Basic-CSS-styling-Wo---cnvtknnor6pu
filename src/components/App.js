import React, { Component, useState } from "react";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },

      { name: "Amsterdam", country: "Netherlands" },

      { name: "New York", country: "USA" },

      { name: "Darjeeling", country: "India" },

      { name: "Tokyo", country: "Japan" },

      { name: "Lonavala", country: "India" },
    ];

    this.citiesInIndia = this.filterCities();

    this.cityListModified = this.addKey();
  }

  filterCities() {
    let filteredArr = this.cityList.filter((obj) => {
      return obj.country == "India";
    });

    return filteredArr;
  }

  addKey() {
    let count = 0;

    let city;

    const listArr = this.citiesInIndia.map((obj) => {
      city = obj.name;

      ++count;

      let keyValue = `location${count}`;

      return <li key={keyValue}>{city}</li>;
    });

    return listArr;
  }

  render() {
    return (
      <div id="main">
        <ol>{this.cityListModified}</ol>
      </div>
    );
  }
}

export default App;
