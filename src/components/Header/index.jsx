import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function Header() {
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0); // top du drawer + overlay (= bas du header)
  const firstLinkRef = useRef(null);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => {
    setOpen(false);
    // rendre le focus au toggle
    requestAnimationFrame(() => toggleRef.current?.focus());
  };
  const toggleMenu = () => setOpen((v) => !v);

  // calcule la position du bas du header pour caler le drawer/overlay dessous
  useEffect(() => {
    const updateTop = () => {
      if (!headerRef.current) return;
      const { bottom } = headerRef.current.getBoundingClientRect();
      setPanelTop(bottom); // en px, relatif au viewport (position: fixed)
    };
    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, []);

  // accessibilité : focus, Esc, lock scroll
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => e.key === 'Escape' && closeMenu();
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`header ${open ? 'is-menu-open' : ''}`}>
      <div className="header__inner">
        <NavLink to="/" className="header__brand" onClick={closeMenu}>
          Saïsana Khamvongsa
        </NavLink>

        <div className="header__actions">
          <button
            ref={toggleRef}
            type="button"
            className={`header__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <span className="header__toggle-bar" />
            <span className="header__toggle-bar" />
            <span className="header__toggle-bar" />
          </button>
        </div>
      </div>

      {/* Overlay (ne couvre pas le header) */}
      <div
        className={`header__overlay ${open ? 'is-visible' : ''}`}
        style={{ top: panelTop }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer fixé à droite, démarrant sous le header */}
      <nav
        id="primary-nav"
        className={`header__drawer ${open ? 'is-open' : ''}`}
        style={{ top: panelTop }}
        aria-label="Menu principal"
        onClick={(e) => {
          if (e.target.closest('a')) closeMenu(); // fermer en cliquant un lien
        }}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header__drawer-link ${isActive ? 'is-active' : ''}`
          }
          ref={firstLinkRef}
        >
          Accueil
        </NavLink>
        <NavHashLink smooth to="/#about-me" className="header__drawer-link">
          À propos
        </NavHashLink>
        <NavHashLink smooth to="/#projects" className="header__drawer-link">
          Projets
        </NavHashLink>
        <NavHashLink smooth to="/#skills" className="header__drawer-link">
          Compétences
        </NavHashLink>
        <NavHashLink smooth to="/#contact" className="header__drawer-link">
          Contact
        </NavHashLink>
      </nav>
    </header>
  );
}

export default Header;
