import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
};


const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence mode='wait'>
      {project && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            style={{
              background: '#1a1a1a',
              padding: '40px',
              borderRadius: '10px',
              maxWidth: '600px',
              width: '90%',
              border: '1px solid #00ffff',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            }}
            variants={modal}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2>{project.title}</h2>
            <p>{project.longDescription}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 'bold' }}>
              Visiter le projet
            </a>
            <button
              onClick={onClose}
              style={{
                display: 'block',
                marginTop: '20px',
                padding: '10px 20px',
                background: '#00ffff',
                color: '#0d0d0d',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
