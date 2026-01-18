import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <FiBriefcase className="text-white" size={16} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-bold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {exp.period}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">▸</span>
                            <span className="font-medium">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

