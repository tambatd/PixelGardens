import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import styles from "../garden/garden.module.css";
const Garden = () => {
  //const [flowers, setFlowers] = useState("");
  const [flowers, setFlowers] = useState<any[]>([]);

  useEffect(() => {
    //s setFlowers(flower_obj);
  }, []);
  return (
    <div className={styles.garden}>
      {flowers.map((flower) => (
        <div>
          <img className="flower" src={flower.metadata.image} />
        </div>
      ))}
    </div>
  );
};

export default Garden;
