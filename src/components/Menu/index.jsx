import "./styles.css";

export const Menu = () => {
  const handleMenu = () => {
    const hamburguer = document.querySelector(".hamburguer");

    hamburguer.addEventListener("click", function () {
      document.querySelector(".container").classList.toggle("show-menu");
    });
  };
  return (
    <div className="container">
      <div className="hamburguer" onClick={handleMenu}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
        <span>fechar</span>
      </div>
      <aside className="sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#conhecimentos" className="menu-link">
                Conhecimento
              </a>
            </li>
            <li className="menu-item">
              <a href="#projetos" className="menu-link">
                Projetos
              </a>
            </li>
            <li className="menu-item">
              <a href="#contatos" className="menu-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/raian-soares-pinheiro-375427139" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/RaianSores" target="_blank">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </aside>
    </div>
  );
};
