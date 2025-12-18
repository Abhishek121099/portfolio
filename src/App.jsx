import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import DesignSprints from './sections/DesignSprints'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import { MascotProvider } from './components/mascot/MascotContext'
import MascotController from './components/mascot/MascotController'

function App() {
  return (
    <MascotProvider>
      <div className="App min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DesignSprints />
        <Resume />
        <Contact />
        <MascotController />
      </div>
    </MascotProvider>
  )
}

export default App
