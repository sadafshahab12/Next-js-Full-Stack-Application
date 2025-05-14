import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href={"/blog?cat=style"}
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={"/cl1.jpg"}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>style</p>
        </Link>
        <Link
          href={"/blog?cat=food"}
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src={"/cl2.jpg"}
            alt="food"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>Food</p>
        </Link>
        <Link
          href={"/blog?cat=travel"}
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src={"/cl3.jpg"}
            alt="travel"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>Food</p>
        </Link>
        <Link
          href={"/blog?cat=culture"}
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src={"/cl4.jpg"}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>Culture</p>
        </Link>
        <Link
          href={"/blog?cat=coding"}
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src={"/cl5.jpg"}
            alt="coding"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>Coding</p>
        </Link>
        <Link
          href={"/blog?cat=fashion"}
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src={"/cl6.jpg"}
            alt="fashion"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>Fashion</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
