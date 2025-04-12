import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import styles from "./page.module.css";

export default async function Home() {
  // Example: Sending data to /api/users from a form
const res = await fetch('http://localhost:3000/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
});
  console.log("RRR res", res);
  
  return (
     <main className={styles.mainContent}>
        <Banner />
        <Menu />
        <About />
        <Contact />
      </main>
  );
}
