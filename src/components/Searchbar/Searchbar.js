import styles from "./Searchbar.module.css";
import SearchIcon from "./search.svg";
import axios from "axios"

const Searchbar = ({
  token,
  inputText,
  setInputText,
  setArtistName,
  setArtistImg,
  setArtistSpotifyLink,
  setResult
}) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const keyPressHandler = e => {
    if (e.code === "Enter") {
      e.preventDefault();
      submitHandler();
    }
  };

  // GET request - search for artist after setInput
  const submitHandler = () => {
    console.log("GETTING RESULT...");
    axios("https://api.spotify.com/v1/search?q=" + inputText + "&type=artist", {
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
      .catch(() => {
        return;
      });
  };
  return (
    <div className={styles.SearchbarContainer}>
      <form>
        <input
          onChange={inputTextHandler}
          onKeyPress={keyPressHandler}
          id="SearchbarInput"
          className={styles.SearchbarInput}
          type="text"
        ></input>
        <button type="submit" onClick={inputTextHandler}>
          <img
            className={styles.SearchIcon}
            src={SearchIcon}
            alt="Search-SVG"
          />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
