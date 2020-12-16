import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created by{" "}
          <a
            href="https://github.com/HieNG94/CPSC349_COVID19_Web_Project.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Hien Nguyen
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Components are created by following the
          tutorial of{" "}
          <a
            href="https://github.com/sabesansathananthan/covid-19-tracker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Sabesan Sathananthan
          </a>
          <br />
          Data provided by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
          <a
            href="https://covidtracking.com/data/api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            , The COVID tracking project
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
