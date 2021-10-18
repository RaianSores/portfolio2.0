import "./styles.css";

export const Header = () => {

  return (
    <div className="container">
      <header id="home">
        <div className="img-wrapper">
          <img src="/bg.jpg" alt="" />
        </div>
        <div className="banner">
          <h1>Full Stack Developer</h1>

          <h2>
            Sou apaixonado por tecnologia e gosto da praticidade que ela trás a
            nossa vida, que para alguns é complicado, mas é uma questão de ponto
            de vista.<span>|</span>
          </h2>
        </div>
      </header>
    </div>
  );
};
