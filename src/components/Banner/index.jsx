import { Bio } from "../Bio";
import styles from "./styles.module.scss";

export const Banner = () => {
  return (
    
    <div className={styles.containerWrapper}>
      <div className={styles.imgWrapper}>
        <img src="/bg.jpg" alt="" />

      </div>
      <div className={styles.bioText}>
          <Bio />
        </div>
    </div>
  );
};
