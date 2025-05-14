import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={} />
          </div>
          <div className={styles.textContainer}>
            <h1>A Global Symbol of Renewal</h1>
            <p>
              Cherry blossoms, or sakura as they’re known in Japan, have
              captivated cultures for centuries. Originating in East Asia,
              they’ve become global icons of beauty, hope, and renewal. While
              Japan is undoubtedly the spiritual home of the cherry blossom, you
              can now find these trees blooming from Washington, D.C. to Paris,
              Vancouver, and Seoul.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
