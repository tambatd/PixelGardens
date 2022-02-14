import styles from "../indexGarden/indexGarden.module.css";
import red from "../home/assets/red.png";
import blue from "../home/assets/blue.png";

const FlowerList = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={red} />
          <p>Pixel Gardens</p>
          <img src={blue} />
        </div>
      </div>
    </div>
  );
};

export default FlowerList;
