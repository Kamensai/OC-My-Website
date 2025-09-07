import saisanaImg from '../../assets/images/saisana_b_w.webp';
function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="title-container">
        <h1>Bienvenue chez moi</h1>
        <h2>Je suis développeur web</h2>
        <div className="btn">
          <a className="btn__link" href="#contact">
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="img-container">
        <img src={saisanaImg} alt="Une photo de Saisana Khamvongsa" />
      </div>
    </section>
  );
}

export default WelcomeBanner;
