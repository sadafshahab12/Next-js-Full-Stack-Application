import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/post1.jpg"} alt="recent" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.05.2025 - </span>
          <span className={styles.category}>Category</span>
        </div>
        <Link href={"/"}>
          <h1 className={styles.postTitle}>A Global Symbol of Renewal</h1>
        </Link>
        <p className={styles.desc}>
          Cherry blossoms, or sakura as they’re known in Japan, have captivated
          cultures for centuries. Originating in East Asia, they’ve become
          global icons of beauty, hope, and renewal. While Japan is undoubtedly
          the spiritual home of the cherry blossom, you can now find these trees
          blooming from Washington, D.C. to Paris, Vancouver, and Seoul.
        </p>
        <Link href={"/"} className={styles.postLink}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
