
import { Header } from "../../components/Heading";
import { Menu } from "../../components/Menu";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

import "./styles.css";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};
