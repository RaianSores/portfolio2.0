import React from "react";
import "./styles.css";

export const Contact = () => {
  return (
    <div>
      <sectiom className="sessao-contato" id="contatos">
        <div className="contato-wrapper">
          <div className="contato-left">
            <img src="contato.jpg" alt="" />
          </div>
          <div className="contato-rigth">
            <h1>Contato</h1>
            <form>
              <div className="input-group">
                <input type="text" className="field" id="nome" />
                <label for="nome" className="field-label">
                  Nome
                </label>
              </div>
              <div className="input-group">
                <input type="text" className="field" id="email" />
                <label for="email" className="field-label">
                  E-mail
                </label>
              </div>
              <div className="input-group">
                <textarea className="field" id="mensagem"></textarea>
                <label for="mensagem" className="field-label">
                  Mensagem
                </label>
              </div>
              <button type="submit" className="btn-submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </sectiom>
    </div>
  );
};
