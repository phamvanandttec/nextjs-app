import Image from "next/image";
import styles from "./menu.module.css";
import Link from "next/link";

const menuItems = [
  {
    src: "/anh/phobo.png",
    name: "Phở bò",
    price: "45.000đ",
    description: "Món phở bò truyền thống với nước dùng thơm ngon, thịt bò mềm, ăn kèm với rau sống và gia vị đặc trưng."
  },
  {
    src: "/anh/banhmi.png",
    name: "Bánh mì",
    price: "25.000đ",
    description: "Bánh mì Việt Nam với lớp vỏ giòn, nhân thịt nướng, chả lụa, rau thơm và nước sốt đặc trưng."
  },
  {
    src: "/anh/bundau.png",
    name: "Bún đậu mắm tôm",
    price: "150.000đ",
    description: "Bún đậu mắm tôm là sự kết hợp giữa bún tươi, đậu phụ rán giòn, thịt ba chỉ luộc, ăn kèm mắm tôm đặc trưng."
  },
  {
    src: "/anh/comtam.png",
    name: "Cơm tấm",
    price: "40.000đ",
    description: "Cơm tấm với thịt nướng thơm ngon, dưa leo, đồ chua và nước mắm pha chế đậm đà."
  },
  {
    src: "/anh/banhxeo.png",
    name: "Bánh xèo",
    price: "35.000đ",
    description: "Bánh xèo giòn rụm, nhân tôm, thịt, giá, ăn kèm với rau sống và nước mắm chua ngọt."
  },
  {
    src: "/anh/bunbo.png",
    name: "Bún bò Huế",
    price: "55.000đ",
    description: "Bún bò Huế với nước dùng cay nồng, thịt bò, giò heo và rau thơm, là món ăn đặc trưng của miền Trung."
  },
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <h1>THỰC ĐƠN</h1>
      <div className={styles.foodList}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.foodItem}>
            <Link href={`/chitietsanpham`}>
            <Image src={item.src} alt={`Món ăn ${index + 1}`} width={200} height={150} />
            <h3>{item.name}</h3>
            <p>Giá: {item.price}</p>
            <p>{item.description}</p>

            <Image src={item.src} alt={`Món ăn ${index + 1}`} width={200} height={150} />
            <h3>{item.name}</h3>
            <p>Giá: {item.price}</p>
            <p>{item.description}</p>

            <Image src={item.src} alt={`Món ăn ${index + 1}`} width={200} height={150} />
            <h3>{item.name}</h3>
            <p>Giá: {item.price}</p>
            <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

