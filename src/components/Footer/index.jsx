import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>
            Copyright &copy; 2020 - Mindset Sistemas - Todos os direitos
            reservados
          </p>
          <div className="social-list">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/raian-soares-pinheiro-375427139" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/RaianSores" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <a href="#home" id="link-topo">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
};
