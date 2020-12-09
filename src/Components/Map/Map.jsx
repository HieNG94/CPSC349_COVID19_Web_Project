import { useRef, useEffect } from "react";
import styles from "./Map.module.css";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { countriesList } from "../../data/countriesList.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGllbm5ndXllbjUxMyIsImEiOiJja2k5bHZzcW8waDBtMzJzMzQ1ZDJtejR4In0.WtppD7BgqI-wYjukdJChDw";

const Map = () => {
  const mapContainerRef = useRef(null);

  async function getData(country) {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`https://covid19.mathdro.id/api/countries/` + country);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  }

  function getColor(active) {
    if (active >= 1000000) return "red";
    else if (active >= 500000) return "#DF3A01";
    else if (active >= 100000) return "orange";
    else if (active >= 50000) return "#FA5858";
    else if (active >= 100) return "#F5A9A9";
    else return "green";
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [5, 34],
      zoom: 2,
    });
    countriesList.forEach((country) => {
      var data = getData(country.name);
      data.then((a) => {
        var popup = new mapboxgl.Popup({
          className: styles.detail,
          closeButton: false,
        }).setHTML(
          `
            <h2><u>` +
            country.name +
            `</u></h2>
                    <p style="color:blue">Infected: ` +
            a.confirmed.value +
            `</p><p style="color:green">Recovered: ` +
            a.recovered.value +
            `</p><p style="color:red">Deaths: ` +
            a.deaths.value +
            `</p><p style="color:orange">Active: ` +
            (a.confirmed.value - a.recovered.value - a.deaths.value) +
            `</p>`
        );

        new mapboxgl.Marker({
          color: getColor(
            a.confirmed.value - a.recovered.value - a.deaths.value
          ),
        })
          .setLngLat([country.longitude, country.latitude])
          .setPopup(popup)
          .addTo(map);
      });
    });
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    return () => map.remove();
  }, []);
  return <div className={styles.mapContainer} ref={mapContainerRef} />;
};
export default Map;
