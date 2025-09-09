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
          src={`${import.meta.env.BASE_URL}images/saisana_b_w_50.webp`}
          alt="Une photo de Saisana Khamvongsa"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default WelcomeBanner;
