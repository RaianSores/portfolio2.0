import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";
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
        <Banner />
        <Menu />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
