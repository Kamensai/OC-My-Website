import { Routes, Route } from 'react-router';
import RouterLayout from '../../layouts/RouteLayout/index.jsx';
import Home from '../../pages/Home';
import MyAdventure from '../../pages/MyAdventure/index.jsx';

// Composant AppRouter : définit toutes les routes de l'application avec leur layout principal

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="/my-adventure" element={<MyAdventure />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
