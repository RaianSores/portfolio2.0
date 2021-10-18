import React from "react";
import "./styles.css";

export const Projects = () => {
  return (
    <>
      <section className="sessao-projetos" id="projetos">
        <div className="sessao-header">
          <h1>Projetos</h1>
        </div>
        <div className="projetos">
          <div className="card">
            <div className="card-img-wrapper">
              <img src="proj2.jpg" alt="imagem do projeto maratona" />
            </div>
            <div className="card-info">
              <h2>Leader Coach</h2>
              <h3>Coordenador de Equipe Sistemas Quantum</h3>
              <p>
                Responsável pela liderança da equipe de suporte, distribuição de
                demanda, comunicação com o time e com clientes diretamente
                ligado a tomada de decisões.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="proj1.jpg" alt="imagem do projeto ToDo" />
            </div>
            <div className="card-info">
              <h2>DBA - MySQL</h2>
              <h3>Sistemas Quantum</h3>
              <p>
                Responsável pela completa administração de uma base de dados ou
                sistemas de banco de dados. Isto inclui gerenciamento,
                instalação, configuração, atualização, otimização e
                monitoramento.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="proj3.jpg" alt="imagem do projeto Casa Bela" />
            </div>
            <div className="card-info">
              <h2>Web Developer</h2>
              <h3>Javascript, HTML, CSS</h3>
              <p>Desenvolvimento de soluções Web.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
