import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";



import styles from './styles.module.scss';

export const Navigation = () => {
  return (
    <Router>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};
