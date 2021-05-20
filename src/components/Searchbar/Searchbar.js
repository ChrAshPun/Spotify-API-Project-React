import React from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "./search.svg";

const Searchbar = (props) => {
    return (
      <div className={styles.SearchbarContainer}>
        <input
          onKeyDown={props.keyDownHandler}
          id="SearchbarInput"
          className={styles.SearchbarInput}
          type="text"
        ></input>
        <img
          onClick={props.inputHandler}
          className={styles.SearchIcon}
          src={SearchIcon}
          alt="Search-SVG"
        />
      </div>
    );
  }

export default Searchbar;