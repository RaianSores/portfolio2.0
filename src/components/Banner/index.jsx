import { Bio } from "../../components/Bio";
import styles from "./styles.module.scss";

export const Banner = () => {
  return (
    <>
      <Bio />
      <div className={styles.imgWrapper}>
        <img src="/wallpaper.jpg" alt="" />
      </div>
    </>
  );
};
