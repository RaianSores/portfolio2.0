import React from "react";
import "./styles.css";

export const Skills = () => {
  return (
    <>
      <section className="sessao-conhecimentos" id="conhecimentos">
        <div className="sessao-header">
          <h1>Conhecimentos</h1>
        </div>
        <div className="conhecimentos">
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-html5"></i>
              <h3>HTML</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                HTML5 (Hypertext Markup Language ou Linguagem de Marcação de
                Hipertexto) é o bloco de construção mais básico da web e possui
                fundamental importância para o seu funcionamento.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-css3-alt"></i>
              <h3>CSS</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                CSS3 (Cascading Style Sheets) é o responsável pela estilização
                do HTML5, portanto das páginas web.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa fa-database"></i>
              <h3>MySQL</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                O MySQL é um sistema de gerenciamento de banco de dados, que
                utiliza a linguagem SQL como interface.
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-js"></i>
              <h3>Javascript</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                JavaScript é, sem dúvidas, uma das linguagens mais utilizadas do
                mundo. Hoje em dia JavaScript é forte no frontend (Páginas da
                web) como no backend (Node.js).
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-bootstrap"></i>
              <h3>Bootstrap</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                Bootstrap é um framework para desenvolvimento de componentes de
                interface e frontend para sites e aplicações web usando HTML,
                CSS e JavaScript.{" "}
              </p>
            </div>
          </div>
          <div className="conhecimento">
            <div className="conhecimento-header">
              <i className="fab fa-github"></i>
              <h3>Git e Github</h3>
            </div>
            <div className="conhecimento-text">
              <p>
                O Git é um sistema open-source de controle de versão utilizado
                pela grande maioria dos desenvolvedores atualmente.
              </p>
            </div>
          </div>
          <div className="conhecimentos-img-wrapper">
            <img src="conhecimentos.png" alt="iamgem conhecimento" />
          </div>
        </div>
      </section>
    </>
  );
};
