import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./StatePicker.module.css";
import { statesList } from "../../data/statesList.json";

const StatePicker = ({ handleStateChange }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleStateChange(e.target.value)}
      >
        {statesList.map((key) => (
          <option key={key.state} value={key.state}>
            {key.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default StatePicker;
