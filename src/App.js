import {useState, useEffect} from "react";
import Player from "./Player";

function App() {
  const [songs] = useState([
    {
        "title": "Sip Alcohol",
        "artist": "Joeboy",
        "imageSrc": "./images/SipAlcohol.jpg",
        "src": "./songs/SipAlcohol.mp3"
    },
    {
        "title": "Dior",
        "artist": "Ruger",
        "imageSrc": "./images/DiorRuger.jpg",
        "src": "./songs/Dior.mp3"
    },
    {
        "title": "Ameno Amapiano (Remix)",
        "artist": "Goya Menor & Nektunez",
        "imageSrc": "./images/AmenoAmapiano.jpg",
        "src": "./songs/AmenoAmapiano.mp3"
    },
    {
        "title": "Understand",
        "artist": "Omah Lay",
        "imageSrc": "./images/Understand.jpg",
        "src": "./songs/Understand.mp3"
    }
])

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

useEffect(() => {
  if (currentSongIndex + 1 > songs.length - 1) {
    return 0;
  } else {
    return currentSongIndex + 1;
  }
}, [currentSongIndex])

  return (
    <div className="App">
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
            />
    </div>
  );
}

export default App;
