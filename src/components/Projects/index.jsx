import { useState } from 'react';

import Card from '../Card';
import Modale from '../Modale';

import projects from '../../datas/projects.json';

function Projects() {
  const [active, setActive] = useState(null); // project ou null

  const openModal = (projectId) => {
    const p = projects.find((pr) => pr.id === projectId);
    if (p) setActive(p);
  };
  const closeModal = () => setActive(null);

  return (
    <section id="projects" className="projects">
      <div className="title-container">
        <h1>Projets</h1>
      </div>
      <div className="card-wrapper">
        {projects.map((project) => (
          <Card
            key={project.id}
            cardTitle={project.title}
            cardImg={project.cover}
            id={project.id}
            onOpen={openModal}
          />
        ))}
      </div>
      {active && <Modale project={active} onClose={closeModal} />}
    </section>
  );
}

export default Projects;
