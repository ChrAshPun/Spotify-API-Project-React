import React from "react";
import styles from "./FindAnArtist.module.css";

const FindAnArtist = (props) => {
  return (
    <div className={styles.FindAnArtist}>
      <h1>Search for an Artist</h1>
      {props.children}
    </div>
  );
};

export default FindAnArtist;
