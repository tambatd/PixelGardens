import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import styles from "../garden/garden.module.css";
const Garden = () => {
  const [flowers, setFlowers] = useState("");
  useEffect(() => {}, []);
  return (
    <div className={styles.garden}>
      <div>{flowers}</div>
    </div>
  );
};

export default Garden;
