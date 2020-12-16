import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./StateDetail.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { statesList } from "../../data/statesList.json";

const StateDetail = ({
  dataState: { positive, recovered, death, dateChecked },
  state,
}) => {
  if (!positive) {
    positive = 0;
  }
  if (!recovered) {
    recovered = 0;
  }
  if (!death) {
    death = 0;
  }
  if (state !== "") {
    const name = statesList.find((st) => st.state === state);
    state = name.name;
  } 
  const active = positive - recovered - death;
  let carddetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: positive,
      bottomText: "Number of infect cases of COVID-19",
    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: recovered,
      bottomText: "Number of recoveries from COVID-19",
    },
    {
      style: styles.death,
      text: "Deaths",
      value: death,
      bottomText: "Number of deaths caused by COVID-19",
    },
    {
      style: styles.active,
      text: "Active",
      value: active,
      bottomText: "Number of active cases of COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 23.675px", padding: "20px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(dateChecked).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(dateChecked).toLocaleTimeString()}
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
              <Typography color="textPrimary"> {state} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StateDetail;
