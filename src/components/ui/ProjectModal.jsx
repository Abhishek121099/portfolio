import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Problem
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.problem}
              </p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.approach}
              </p>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Outcome
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.outcome}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.challenges}
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Future Improvements
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.improvements}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <FiExternalLink />
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <FiGithub />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

