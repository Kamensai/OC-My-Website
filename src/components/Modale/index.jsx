import { useEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Modal({ project, onClose }) {
  const pictures = useMemo(
    () => (project.pictures?.length ? project.pictures : [project.cover]),
    [project]
  );
  const [index, setIndex] = useState(0);
  const closeBtnRef = useRef(null);

  const onScreenChange = ({ currentIndex }) => setIndex(currentIndex);

  // ESC + lock scroll + focus
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        className="modal__overlay"
        aria-label="Fermer"
        onClick={onClose}
      />

      <div className="modal__panel">
        <button
          ref={closeBtnRef}
          className="modal__close"
          aria-label="Fermer"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6l-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>

        {/* slider */}
        <div className="modal__slider">
          <AwesomeSlider
            bullets
            selected={index}
            onTransitionEnd={onScreenChange}
          >
            {pictures.map((src, i) => (
              <div key={i} data-src={src} />
            ))}
          </AwesomeSlider>
        </div>

        <div className="modal__content">
          <h3 id="modal-title" className="modal__heading">
            {project.title}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir le projet"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            )}
          </h3>

          {project.client?.name && (
            <div className="modal__meta">
              Client&nbsp;: {project.client.name}
            </div>
          )}

          {project.description && (
            <p className="modal__desc">{project.description}</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
