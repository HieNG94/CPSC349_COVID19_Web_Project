import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./ChartState.module.css";
import { statesList } from "../../data/statesList.json";

const ChartState = ({ dataState: { positive, recovered, death }, state }) => {
  if (state !== "") {
    const name = statesList.find((st) => st.state === state);
    state = name.name;
  }
  const barChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "death", "Active"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(242, 234, 0, 0.5)",
            ],
            hoverBackgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
            data: [positive, recovered, death, positive - (recovered + death)],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${state}` },
      }}
    />
  );

  return <div className={styles.container}>{barChart}</div>;
};

export default ChartState;
