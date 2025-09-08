import { Phone, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="line" />

      <div className="contact__container">
        <a
          className="contact__item"
          href="tel:+33611621865"
          aria-label="Appeler +33 6 11 62 18 65"
        >
          <Phone className="contact__icon" aria-hidden="true" />
          <span className="contact__text">+33 6 11 62 18 65</span>
        </a>
        <a
          className="contact__item"
          href="mailto:khamvongsa.v@hotmail.fr"
          aria-label="Envoyer un e-mail à khamvongsa.v@hotmail.fr"
        >
          <Mail className="contact__icon" aria-hidden="true" />
          <span className="contact__text">khamvongsa.v@hotmail.fr</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
