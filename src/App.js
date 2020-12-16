import React from "react";
import {
  Cards,
  StateDetail,
  Chart,
  ChartState,
  Map,
  CountryPicker,
  StatePicker,
  Footer,
} from "./Components";
import styles from "./App.module.css";
import { fetchData, fetchStateData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    dataState: {},
    state: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedStateData = await fetchStateData("AL");
    this.setState({
      data: fetchedData,
      dataState: fetchedStateData,
      state: "AL",
    });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  handleStateChange = async (state) => {
    const fetchedStateData = await fetchStateData(state);
    this.setState({ dataState: fetchedStateData, state: state });
  };
  render() {
    const { data, country, dataState, state } = this.state;
    return (
      <div>
        <div className={styles.header}>
          <img className={styles.image} src={coronaImage} alt="COVID-19" />
        </div>
        <div className={styles.container}>
          <Map />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} country={country} />
          <br />
          <Chart data={data} country={country} />
          <br />
          <h1><u>United States COVID-19 Cases and Deaths by State</u></h1>
          <StatePicker handleStateChange={this.handleStateChange} />
          <StateDetail dataState={dataState} state={state} />
          <br />
          <ChartState dataState={dataState} state={state} />
          <small>
            *In the section of the U.S states, some states have no record in
            some fields indicate as 0.
          </small>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
