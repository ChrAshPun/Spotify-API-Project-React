import React from "react";
import styles from "./SearchResult.module.css";
import BackButton from "./back-button.svg";

const SearchResult = ({
  artistName,
  artistImg,
  artistSpotifyLink,
  setArtistName,
  setArtistImg,
  setArtistSpotifyLink,
  setInputText,
  setResult
}) => {
  const backButtonHandler = () => {
    setArtistName("");
    setArtistImg("");
    setArtistSpotifyLink("");
    setInputText("");
    setResult(false);
  };

  return (
    <div className={styles.SearchResult}>
      <div className={styles.SearchResultBg}></div>
      <img
        onClick={backButtonHandler}
        className={styles.BackButton}
        src={BackButton}
        alt="Back-Button"
      />
      <div className={styles.ArtistTag}>
        <p>Artist</p>
      </div>
      <div className={styles.ArtistName}>
        <h1>{artistName}</h1>
      </div>
      <a
        className={styles.SpotifyButton}
        href={artistSpotifyLink}
        target="_blank"
        rel="noreferrer"
      >
        Open Spotify
      </a>
      <img className={styles.ArtistImg} src={artistImg} alt="Artist-Img" />
    </div>
  );
};

export default SearchResult;
