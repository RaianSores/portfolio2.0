import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <img src="https://github.com/RaianSores.png" alt="Raian Soares" />
      </div>

      <h2 className={styles.profileUserName}>Raian Soares</h2>
      <small className={styles.profileUserHandle}>
        raiansoares72@gmail.com
      </small>

      <div className={styles.profileActions}>
        <button className={styles.btnInsta}>
          <FaInstagram />
        </button>
        <button className={styles.btnGithub}>
          <FaGithub />
        </button>
        <button className={styles.btnLinkedIn}>
          <FaLinkedin />
        </button>
      </div>
    </div>
  );
};
