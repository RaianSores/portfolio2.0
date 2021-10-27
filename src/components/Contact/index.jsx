import React from "react";
import "./styles.css";

export const Contact = () => {
  return (
    <>
      <div className="sessaoContato" id="contatos">
        <div className="contatoWrapper">
          <div className="contatoLeft">
            <img src="contato.jpg" alt="" />
          </div>
          <div className="contatoRigth">
            <h1>Contato</h1>
            <form>
              <div className="inputGroup">
                <input type="text" className="field" id="nome" />
                <label htmlFor="nome" className="fieldLabel">
                  Nome
                </label>
              </div>
              <div className="inputGroup">
                <input type="text" className="field" id="email" />
                <label htmlFor="email" className="fieldLabel">
                  E-mail
                </label>
              </div>
              <div className="inputGroup">
                <textarea className="field" id="mensagem"></textarea>
                <label htmlFor="mensagem" className="fieldLabel">
                  Mensagem
                </label>
              </div>
              <button type="submit" className="btnSubmit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
