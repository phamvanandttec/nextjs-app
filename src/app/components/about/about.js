import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>Để có được đồ ăn ngon cần :</h2>
      <p> Qua nhiều yếu tố như hương vị, mùi, màu sắc, kết cấu, nguyên liệu tươi mới, và sự sáng tạo.
         Tuy nhiên, yếu tố chủ quan từ người ăn và sự gắn kết cảm xúc với món ăn cũng đóng vai trò quan trọng không kém. 
         Những yếu tố này kết hợp lại giúp một món ăn không chỉ ngon về mặt ẩm thực mà còn tạo ra một trải nghiệm ăn uống trọn vẹn.</p>
    </section>
  );
}

