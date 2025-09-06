import { Link } from 'react-router-dom';
function Error() {
  return (
    <section className="error-wrapper">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  );
}

export default Error;
