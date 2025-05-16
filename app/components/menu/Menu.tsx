import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{`What's`} hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src={"/post1.jpg"}
              alt="itemImages"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 05.05.2025</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src={"/post1.jpg"}
              alt="itemImages"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 05.05.2025</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src={"/post1.jpg"}
              alt="itemImages"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 05.05.2025</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src={"/post1.jpg"}
              alt="itemImages"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 05.05.2025</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
