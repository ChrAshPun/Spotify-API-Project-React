import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import FindAnArtist from "../FindAnArtist/FindAnArtist";
import SearchResult from "../SearchResult/SearchResult";
import Footer from "../Footer/Footer";
import Searchbar from "../Searchbar/Searchbar";
import axios from "axios";

function App() {
  const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
  const SECRET_KEY = `${process.env.REACT_APP_SECRET_KEY}`;

  const [token, setToken] = useState("");
  const [input, setInput] = useState("");
  
  const [artistName, setArtistName] = useState("");
  const [artistImg, setArtistImg] = useState("");
  const [artistSpotifyLink, setArtistSpotifyLink] = useState("");
  const [viewResult, setResult] = useState(false);

  // POST request - get access token on mount
  useEffect(() => {
    console.log("GETTING ACCESS TOKEN");
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + SECRET_KEY)
      },
      data: "grant_type=client_credentials"
    }).then(responseToken => {
      setToken(responseToken.data.access_token);
    });
  }, [CLIENT_ID, SECRET_KEY]);

  // GET request - search for artist after setInput
  useEffect(() => {
    if (input) {
      console.log("GETTING RESULT...");
      axios("https://api.spotify.com/v1/search?q=" + input + "&type=artist", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(response => {
          setArtistName(response.data.artists.items[0].name);
          setArtistImg(response.data.artists.items[0].images[1].url);
          setArtistSpotifyLink(
            response.data.artists.items[0].external_urls.spotify
          );
          setResult(true);
        })
    }
  }, [token, input]);

  // search handler onClick
  function _searchButtonHandler() {
    const inputValue = (document.getElementById(
      "SearchbarInput"
    ) as HTMLInputElement).value;
    if (inputValue.trim().length >= 1) {
      setInput(encodeURI(inputValue.trim()));
    }
  }

  // search handler onKeyDown - Enter Key
  function _enterKeyHandler(event: any) {
    const inputValue = (document.getElementById(
      "SearchbarInput"
    ) as HTMLInputElement).value;
    if (event.keyCode === 13 && inputValue.trim().length >= 1) {
      setInput(encodeURI(inputValue.trim()));
    }
  }

  function _backButtonHandler() {
    setArtistName("");
    setArtistImg("");
    setArtistSpotifyLink("");
    setInput("");
    setResult(false);
  }

  // conditional (ternary) operator
  return viewResult ? (
    // if viewResult is true, show SearchResult component
    <div className={styles.App}>
      <SearchResult
        onClickHandler={_backButtonHandler}
        artistName={artistName}
        artistImg={artistImg}
        artistSpotifyLink={artistSpotifyLink}
      />
      <Footer />
    </div>
  ) : (
    // if viewResult is false, show Searchbar component
    <div className={styles.App}>
      <FindAnArtist>
        <Searchbar
          inputHandler={_searchButtonHandler}
          keyDownHandler={_enterKeyHandler}
        />
      </FindAnArtist>
      <Footer />
    </div>
  );
}

export default App;
