import { motion } from 'framer-motion';
import { FiZap, FiUsers, FiTarget } from 'react-icons/fi';

const DesignSprints = () => {
  const sprints = [
    {
      id: 1,
      title: 'Brisbane Botanical Garden App Design Sprint',
      organization: 'Brisbane Botanical Garden',
      description: 'Participated in a collaborative sprint to design a mobile app for the Brisbane Botanical Garden.',
      focus: 'Improving visitor experience through interactive maps, plant information, and guided tours.',
      contributions: [
        'UI/UX design and prototyping',
        'Interactive map integration',
        'Plant information system design',
        'Guided tour feature development',
        'Final concept presentation to academic reviewers'
      ],
      icon: FiTarget,
      color: 'from-green-500 to-emerald-600',
      image: '/images/346816285_905071400551882_5363126743439029711_n.jpg'
    },
    {
      id: 2,
      title: 'Student Wellbeing App',
      organization: 'James Cook University',
      description: 'Designed an app concept to support student mental health and well-being.',
      focus: 'Conducted user research to identify key needs and features including mindfulness tools, event notifications, and campus resources.',
      contributions: [
        'User research and needs analysis',
        'Mindfulness tools design',
        'Event notification system',
        'Campus resources integration',
        'User interface design and wireframes',
        'Final pitch presentation'
      ],
      icon: FiUsers,
      color: 'from-blue-500 to-indigo-600',
      image: '/images/PHOTO-2024-05-27-17-28-16.jpg'
    }
  ];

  return (
    <section id="design-sprints" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FiZap className="text-white" size={32} />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Design Sprints & Innovation Workshops
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Collaborative design sprints and innovation workshops focused on creating user-centered solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {sprints.map((sprint, index) => {
            const Icon = sprint.icon;
            return (
              <motion.div
                key={sprint.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="h-full"
              >
                <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden h-full flex flex-col">
                    
                    {/* Image */}
                    {sprint.image && (
                      <div className="mb-6 -mx-6 md:-mx-8 -mt-6 md:-mt-8 rounded-t-xl overflow-hidden">
                        <img
                          src={sprint.image}
                          alt={`${sprint.title} team photo`}
                          className="w-full h-52 md:h-60 object-cover object-center"
                          style={{ objectPosition: 'center 30%' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${sprint.color} mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {sprint.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                        {sprint.organization}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
                        {sprint.description}
                      </p>

                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Focus:
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {sprint.focus}
                        </p>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">
                          Key Contributions:
                        </p>
                        <ul className="space-y-2">
                          {sprint.contributions.map((contribution, i) => (
                            <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sprint.color} mr-3 mt-1 font-bold`}>▸</span>
                              <span className="font-medium">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignSprints;

