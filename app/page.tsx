import CardList from "./components/card-list/CardList";
import CategoryList from "./components/category-list/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
