import styles from "../indexGarden/indexGarden.module.css";
import Draggable from "react-draggable";
import blue from "../indexGarden/assets/tulip-blue-stem-squig.png";
import pink from "../indexGarden/assets/pink-tulip-stem-squig.png";
import orange from "../indexGarden/assets/orange-stem-right.png";
import white from "../indexGarden/assets/white-tulip-stem-x.png";
import sunflower from "../indexGarden/assets/tulip-red-stem-squig.png";
import leafs from "../indexGarden/assets/leafs.png";
import river from "../indexGarden/assets/river.png";
import { useEffect, useState } from "react";
const queryString = require('query-string');



const IndexGarden = () => {
  const [GardenFlowers,setGardenFlowers] = useState(['pink 200 200', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower','pink', 'blue', 'orange', 'white', 'sunflower', ]);
  console.log(GardenFlowers[0].split(' '))
  useEffect(() => {
    try {
      const parsed = queryString.parse(window.location.search);
      console.log(parsed);
      console.log(parsed.flowers.split(','));  
      setGardenFlowers(parsed.flowers.split(','))
    } catch (error) {
      console.log('no string')
    }
    //http://localhost:3000/?flowers=pink,blue,orange,white,sunflower,leafs
    //http://localhost:3000/?flowers={pink%2010%2020},blue,orange,white,sunflower,leafs
    //http://localhost:3000/?flowers=pink%20100%2020,blue,orange,white,sunflower,leafs
  }, []);

  const GardenFlowerImages = {
    blue: blue,
    pink: pink,
    orange: orange,
    white: white,
    sunflower: sunflower,
    leafs: leafs,
  }
  return (
    <div className={styles.garden} id="garden">



{GardenFlowers.map((flwr,index)=>(
  <Draggable 
      key={index}
      bounds="parent"
      >
        <img 
        className={styles.flower} 
        draggable="false" 
        src={GardenFlowerImages[flwr]}
          />
      </Draggable>        
        ))
        }

   
    </div>
  );
};

export default IndexGarden;
