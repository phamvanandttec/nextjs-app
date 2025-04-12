import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.mainContent}>
      <Banner />
      <Menu />
      <About />
      <Contact />
    </main>
  );
}
