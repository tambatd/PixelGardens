import { Link } from "react-router-dom";
import styles from "../home/home.module.css";
import red from "../home/assets/red.png";
import blue from "../home/assets/blue.png";
import tulip1 from "../home/assets/tulip1.png";
import sunflower1 from "../home/assets/sunflower1.png";
import blue1 from "../home/assets/blue1.png";
import IndexGarden from "../indexGarden/indexGarden";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={red} />
          <p>NFTGardens</p>
          <img src={blue} />
        </div>
        <div className={styles.gardenButton}>Join the Garden</div>
      </div>
      <div className={styles.mainContent}>
        <div>
          <IndexGarden />
        </div>
        <div className={styles.gardenTextBox}>
          <p className={styles.gardenText}>
            Thousands of flowers. Thousands of gardens. Completely on-chain.
          </p>
          <div className={styles.gardenTextButtonDiv}>
            <p className={styles.gardenTextButton}>Learn More</p>
          </div>
        </div>
      </div>
      {/**<div className={styles.mainContent}>
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
      </div> */}

      <div className={styles.footer}>
        <a href="/">about</a>
        <a href="/">Eco-friendly statement</a>
      </div>
    </div>
  );
};

export default Home;
