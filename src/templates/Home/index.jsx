import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <Navigation />
        <Banner />
      </div>
    </>
  );
};
