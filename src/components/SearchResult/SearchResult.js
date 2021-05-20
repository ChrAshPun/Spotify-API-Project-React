import React from "react";
import styles from "./SearchResult.module.css";
import BackButton from "./back-button.svg";

const SearchResult = (props) => {
  return (
    <div className={styles.SearchResult}>
      <div className={styles.SearchResultBg}></div>
      <img onClick={props.onClickHandler} className={styles.BackButton} src={BackButton} alt="Back-Button" />
      <div className={styles.ArtistTag}>
        <p>Artist</p>
      </div>
      <div className={styles.ArtistName}>
        <h1>{props.artistName}</h1>
      </div>
      <a className={styles.SpotifyButton} href={props.artistSpotifyLink} target="_blank" rel="noreferrer">
        Open Spotify
      </a>
      <img className={styles.ArtistImg} src={props.artistImg} alt="Artist-Img" />
    </div>
  );
};

export default SearchResult;