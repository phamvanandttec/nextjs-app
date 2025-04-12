import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#menu">Thực đơn</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Image src="/anh/logo.png" alt="Logo" width={150} height={100} />
      </div>
    </header>
  );
}