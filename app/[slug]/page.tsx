import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/menu/Menu";
import Image from "next/image";
import Comments from "../components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src="/cl3.jpg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01 . 01 . 2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/cl3.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              a possimus quis exercitationem tenetur expedita quidem sed maiores
              autem, magnam rem corporis quisquam est at suscipit rerum error
              iusto alias aspernatur.
            </p>
            <h2 className={styles.descriptionTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              a possimus quis exercitationem tenetur expedita quidem sed maiores
              autem, magnam rem corporis quisquam est at suscipit rerum error
              iusto alias aspernatur.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              a possimus quis exercitationem tenetur expedita quidem sed maiores
              autem, magnam rem corporis quisquam est at suscipit rerum error
              iusto alias aspernatur.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              a possimus quis exercitationem tenetur expedita quidem sed maiores
              autem, magnam rem corporis quisquam est at suscipit rerum error
              iusto alias aspernatur.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
