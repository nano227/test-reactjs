import react from "react";
import styles from "./index.module.css";
import user from "./user.svg"

export default function Navbar() {
  return (
    <div className={styles.flexRow}>
      <h1>ระบบพยาบาล</h1>
      <div className={styles.right}>
        <p>Menu</p>
        <p>พย. สาวสวย ส้มตำอร่อย</p>
        <img src={user}/>
      </div>
    </div>
  );
}
