import styles from "../indexGarden/indexGarden.module.css";
import Draggable from "react-draggable";
import blue from "../indexGarden/assets/tulip-blue-stem-squig.png";
import pink from "../indexGarden/assets/pink-tulip-stem-squig.png";
import orange from "../indexGarden/assets/orange-stem-right.png";
import white from "../indexGarden/assets/white-tulip-stem-x.png";
import sunflower from "../indexGarden/assets/tulip-red-stem-squig.png";
import leafs from "../indexGarden/assets/leafs.png";
import river from "../indexGarden/assets/river.png";

const IndexGarden = () => {
  return (
    <div className={styles.garden} id="garden">
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={river} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={river} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={river} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={pink} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={pink} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={pink} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={pink} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={orange} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={orange} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={orange} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={orange} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={orange} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={leafs} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={white} />
      </Draggable>
      <Draggable bounds="parent">
        <img className={styles.flower} draggable="false" src={sunflower} />
      </Draggable>
    </div>
  );
};

export default IndexGarden;
