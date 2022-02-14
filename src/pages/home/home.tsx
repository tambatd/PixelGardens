import { Link } from "react-router-dom";
import styles from "../home/home.module.css";
import red from "../home/assets/red.png";
import blue from "../home/assets/blue.png";
import tulip1 from "../home/assets/tulip1.png";
import sunflower1 from "../home/assets/sunflower1.png";
import blue1 from "../home/assets/blue1.png";
import IndexGarden from "../indexGarden/indexGarden";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";


const Home = () => {
  const [isReady, setIsReady] = useState(false);
 const [flowerData, setFlowerData] = useState(null);

  const playAudioFile = () => {
    setIsReady(true);
    var audio = new Audio("./ChristmasGarden.mp3");
    audio.play();
    console.log("Music Playing");
  };

  
  
  return (
    <div>
   
        <div className={styles.home}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={red} />
              <p>Pixel Gardens</p>
              <img src={blue} />
            </div> 
          </div>
          <div className={styles.mainContent}>
          <input type="text" placeholder="Title your garden here!">
          </input>  
            <div>
              <IndexGarden />
            </div>
            <div className={styles.gardenTextBox}>
              <p className={styles.gardenText}>
              </p>
              <div className={styles.gardenTextButtonDiv}>
                <p>
<textarea  placeholder="Write a description here!">
</textarea>                </p>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <a href="https://twitter.com/iotambat/media">Made by @iotambat</a>
          </div>
        </div>
      
    </div>
  );
};

export default Home;

/*{/**<div className={styles.mainContent}>
        <div className={styles.gardenImgBox}>
          <img
            className={styles.gardenImg}
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F90ab424d-c2d1-4dc8-98e4-206778428f47%2Fsc.png?table=block&id=000fa663-c4a4-4f3d-b5c9-58de8e73c2ec&spaceId=0c7330a8-448f-47c9-9c25-9a15bb409205&width=2000&userId=3c3541ce-f932-4970-88f8-be2e801e1704&cache=v2"
          ></img>
        </div>

        <div className={styles.gardenTextBox}>
          <p className={styles.gardenText}>
            Thousands of flowers. Thousands of gardens.
          </p>
        </div>
      </div>
      <div className={styles.flowerSet}>
        <div className={styles.flowerBG}>
          <img className={styles.flower} src={tulip1} />
        </div>
        <div className={styles.flowerBG}>
          <img className={styles.flower} src={sunflower1} />
        </div>
        <div className={styles.flowerBG}>
          <img className={styles.flower} src={blue1} />
        </div>
      </div>
      <div className={styles.flowerRowButton}>
        <div className={styles.button}>View the Flowers</div>
      </div> */
