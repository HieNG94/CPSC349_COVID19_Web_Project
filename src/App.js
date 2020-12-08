import React from "react";
import { Cards, Chart, Map, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
// import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
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
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
