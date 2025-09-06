import { Routes, Route } from 'react-router';
import RouterLayout from '../../layouts/RouteLayout/index.jsx';
import Home from '../../pages/Home';
import MyAdventure from '../../pages/MyAdventure/index.jsx';
import Error from '../../pages/Error';

// Composant AppRouter : définit toutes les routes de l'application avec leur layout principal

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="/my-adventure" element={<MyAdventure />} />

        {/* Page d'erreur pour toute route non trouvée */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
