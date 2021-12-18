import styles from "../player/player.module.css";
import { useState } from "react";

const Player = () => {
  let [isAudio, setIsAudio] = useState(false);

  const playOST = () => {
    if (!isAudio) {
      isAudio = true;
      //var audio = new Audio(sound);
      //audio.play();
      console.log("Music Playing");
    }
  };

  return (
    <div className={styles.player} onClick={playOST}>
      <p>Play</p>
    </div>
  );
};

export default Player;
