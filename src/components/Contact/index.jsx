function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="line" />;
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
