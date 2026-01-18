import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ProjectsReaction = () => {
  const { scene } = useThree();
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectsVisible(true);
            // Trigger animation
            setTimeout(() => setIsProjectsVisible(false), 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <mesh
      position={[2, 0, 0]}
      scale={isProjectsVisible ? [1.2, 1.2, 1.2] : [1, 1, 1]}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={isProjectsVisible ? '#8b5cf6' : '#6366f1'}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export default ProjectsReaction;

