import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Sadaf Dev here!</b> A Journey Through My Lens
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={"/p1.jpg"}
            alt="cherry-blossom"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            The Magic of Cherry Blossoms: A Timeless Celebration of Spring
          </h1>
          <p className={styles.postDesc}>
            Every year, as winter recedes and the first signs of spring begin to
            stir, a breathtaking transformation sweeps across landscapes around
            the world. Trees that once stood bare and quiet suddenly burst into
            life, draped in clouds of delicate pink and white petals. These are
            cherry blossoms — nature’s most poetic announcement that spring has
            arrived.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
