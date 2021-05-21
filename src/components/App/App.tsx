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
  const [inputText, setInputText] = useState("");
  
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
    }).catch(() => {
      return
    })
  }, [CLIENT_ID, SECRET_KEY]);

  // conditional (ternary) operator
  return viewResult ? (
    // if viewResult is true, show SearchResult component
    <div className={styles.App}>
      <SearchResult
        artistName={artistName}
        artistImg={artistImg}
        artistSpotifyLink={artistSpotifyLink}
        setArtistName={setArtistName}
        setArtistImg={setArtistImg}
        setArtistSpotifyLink={setArtistSpotifyLink}
        setInputText={setInputText}
        setResult={setResult}
      />
      <Footer />
    </div>
  ) : (
    // if viewResult is false, show Searchbar component
    <div className={styles.App}>
      <FindAnArtist>
        <Searchbar
          token={token}
          inputText={inputText}
          setInputText={setInputText}
          setArtistName={setArtistName}
          setArtistImg={setArtistImg}
          setArtistSpotifyLink={setArtistSpotifyLink}
          setResult={setResult}
        />
      </FindAnArtist>
      <Footer />
    </div>
  );
}

export default App;
