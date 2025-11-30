import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const projectsData = [
  {
    title: 'Simulateur de Double Pendule (C++)',
    description: 'Simulation d\'un double pendule en C++ utilisant la librairie SFML, avec rendu configurable et traçage de trajectoire.',
    longDescription: 'Ce projet simule le comportement chaotique d\'un double pendule en C++ avec la librairie SFML. Il permet de configurer le rendu, les performances, le comportement de la simulation, les conditions initiales et le traçage de la trajectoire.',
    link: 'https://github.com/sachatrouve1/Double_Pendulum_Simulator',
  },
  {
    title: 'Jeu Pong (JavaScript)',
    description: 'Un jeu Pong simple implémenté en HTML5 Canvas et JavaScript, avec contrôle à la souris et un adversaire IA.',
    longDescription: 'Ce projet est une version Pong entièrement basée sur le navigateur, développée avec HTML5 Canvas et JavaScript. Il inclut un contrôle à la souris pour le joueur et une intelligence artificielle simple pour l\'adversaire.',
    link: 'https://github.com/sachatrouve1/Pong',
  },
  {
    title: 'Jeu de la Vie de Conway (JavaScript)',
    description: 'Implémentation du Jeu de la Vie de Conway utilisant JavaScript et Canvas.',
    longDescription: 'Ce projet explore les règles d\'évolution des cellules sur une grille dans le célèbre Jeu de la Vie de Conway. Développé en JavaScript avec l\'API Canvas pour le rendu visuel.',
    link: 'https://github.com/sachatrouve1/Game-of-life',
  },
  {
    title: 'Rice Arch - Hyprland (Hyprladus)',
    description: 'Un "rice" soigné et fonctionnel pour Hyprland, avec un thème global généré par Pywal.',
    longDescription: 'Hyprladus est une configuration personnalisée pour l\'environnement de bureau Hyprland sur Arch Linux. Le thème est généré dynamiquement par Pywal en fonction du fond d\'écran. Le projet inclut un script d\'installation et de nombreux raccourcis pour la gestion des fenêtres, des applications et des médias.',
    link: 'https://github.com/sachatrouve1/Hyprladus',
  },
  {
    title: 'Latice-Cotech (Jeu de plateau)',
    description: 'Un jeu de plateau développé en Java avec JavaFX où deux joueurs s\'affrontent en posant des tuiles pour marquer des points.',
    longDescription: 'Latice-Cotech est un jeu de plateau développé en Java avec JavaFX. Deux joueurs s\'affrontent en posant des tuiles sur un plateau pour marquer des points selon des règles spécifiques. Le projet inclut une interface graphique, une gestion de thèmes, un système de pioche, et un calcul automatique des scores.',
    link: 'https://github.com/edrigot/latice',
  },
  {
    title: 'Uniliste (Projet de groupe)',
    description: 'Un projet de groupe. (Le fichier README n\'a pas pu être trouvé).',
    longDescription: 'Un projet de groupe dont les détails seront ajoutés ultérieurement. (Le fichier README n\'a pas pu être trouvé sur le dépôt GitHub).',
    link: 'https://github.com/2ulian/uniliste',
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section style={{ padding: '50px', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#f0f0f0' }}>
        <h2>Mes Projets</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}
              onClick={() => openModal(project)}
              style={{
                border: '1px solid #00ffff', // Accent color
                padding: '20px',
                width: '300px',
                backgroundColor: '#0d0d0d',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;
