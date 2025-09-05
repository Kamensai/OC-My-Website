import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Layout principal du site : header, footer et zone centrale pour les pages enfants

function RouterLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        {/* Zone où s'affiche la page courante */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RouterLayout;
