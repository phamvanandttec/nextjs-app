
'use client'

import SimpleSlider from "../components/slider/SimpleSlider";
import styles from "./chitietsanpham.module.css";

export default function ChiTietSanPham() {
    return (
        <div className={styles.chitietsanpham}>
        <div className={styles.mainContent}>
             <div className={styles.gioithieu}>
                <div  className={styles.hinhanh}>
                    <SimpleSlider />
                </div>
                <div  className={styles.gia}></div>
             </div>
             <div className={styles.mota}></div>
        </div>
     </div>

    );
}