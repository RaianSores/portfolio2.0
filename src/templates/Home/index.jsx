import { Navigation } from "../../components/Navigation";
import { Bio } from "../../components/Bio";
import { Profile } from "../../components/Profile";
import { Skills } from "../../components/Skills";
import { Menu } from "../../components/Menu";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <Navigation />
        <div className={styles.left}>
          <Bio />
          <Profile />
        </div>
        <div className={styles.right}>
          <Menu />
        </div>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
