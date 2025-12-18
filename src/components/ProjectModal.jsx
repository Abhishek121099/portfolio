import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import MagneticButton from './MagneticButton'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const ProjectModal = ({ project, onClose }) => {
  const chartData = project.hasCharts ? {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visitors',
        data: [1200, 1900, 3000, 2500, 2800, 3200],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      },
      {
        label: 'Orders',
        data: [400, 600, 800, 700, 900, 1100],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
      },
    ],
  } : null

  const barData = project.hasCharts ? {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Revenue',
        data: [45000, 62000, 18000],
        backgroundColor: ['#6366f1', '#8b5cf6', '#4f46e5'],
      },
    ],
  } : null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gradient">{project.title}</h2>
            <MagneticButton
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <FaTimes size={20} />
            </MagneticButton>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 mb-6">
            {project.description.map((desc, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed">
                • {desc}
              </p>
            ))}
          </div>

          {project.hasCharts && (
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary-light">Traffic Overview</h3>
                <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary-light">Revenue by Device</h3>
                <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <MagneticButton
              onClick={() => window.open(project.liveLink, '_blank')}
              className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              View Live Demo
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open(project.githubLink, '_blank')}
              className="flex-1 px-6 py-3 glass rounded-lg text-gray-100 font-medium flex items-center justify-center gap-2 hover:bg-white/10"
            >
              <FaGithub />
              View Code
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal

