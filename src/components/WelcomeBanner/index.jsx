import saisanaImg from '../../assets/images/saisana_b_w.webp';
function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="title-container">
        <div className="title">Bienvenue chez moi</div>
        <div className="subtitle">Je suis développeur web</div>
        <div className="btn">
          <a className="btn__link" href="#contact">
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="img-container">
        <img
          src={saisanaImg}
          alt="Une photo de Saisana Khamvongsa"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default WelcomeBanner;
