import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import './Education.css'

const education = [
  {
    id: 1,
    type: 'degree',
    title: 'Master of IT',
    institution: 'James Cook University',
    year: '2024',
    icon: FaGraduationCap,
    image: '"\images\IMG_3470.jpg"'
  },
  {
    id: 2,
    type: 'degree',
    title: 'Bachelor of Mechanical Engineering',
    institution: 'Zeal College',
    year: '2021',
    icon: FaGraduationCap
  }
]

const certifications = [
  'React Essential Training',
  'Data Analysis (SQL, Tableau, Power BI)',
  'IT Support'
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My academic background and professional certifications</p>
          
          <div className="education-content">
            <div className="education-section">
              <h3 className="subsection-title">Education</h3>
              
              <div className="education-grid">
                {education.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="education-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {item.image && (
                      <div className="education-image-wrapper">
                        <img 
                          src={item.image} 
                          alt={`${item.title} - ${item.institution}`}
                          className="education-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const wrapper = e.target.parentElement;
                            if (wrapper && !wrapper.querySelector('.education-icon')) {
                              const iconDiv = document.createElement('div');
                              iconDiv.className = 'education-icon';
                              iconDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>';
                              wrapper.appendChild(iconDiv);
                            }
                          }}
                        />
                      </div>
                    )}
                    {!item.image && (
                      <div className="education-icon">
                        <item.icon />
                      </div>
                    )}
                    <h4 className="education-title">{item.title}</h4>
                    <p className="education-institution">{item.institution}</p>
                    <span className="education-year">{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <h3 className="subsection-title">Certifications</h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaCertificate className="cert-icon" />
                    <span>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

