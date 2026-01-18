import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
                <img
                  src="/images/HeadshotPro Avatar 2025-02-12T03-18-46-122Z.png"
                  alt="Abhishek Dongare"
                  className="relative w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
                {profile.summary}
              </p>

              <div className="grid gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-100 dark:border-gray-600 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    React Expertise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    Specialized in building production-ready React applications with modern hooks, 
                    reusable components, and optimized performance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-purple-100 dark:border-gray-600 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Collaboration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    Experienced working in Agile environments, collaborating with designers, 
                    backend developers, and stakeholders to deliver exceptional user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

