import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/post1.jpg"} alt="recent" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>

        </div>
        <h1>A Global Symbol of Renewal</h1>
        <p>
          Cherry blossoms, or sakura as they’re known in Japan, have captivated
          cultures for centuries. Originating in East Asia, they’ve become
          global icons of beauty, hope, and renewal. While Japan is undoubtedly
          the spiritual home of the cherry blossom, you can now find these trees
          blooming from Washington, D.C. to Paris, Vancouver, and Seoul.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
