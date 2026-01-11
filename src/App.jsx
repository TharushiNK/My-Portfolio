import './App.css'
import Header from './components/Header'
import FloatingParticles from './components/FloatingParticles'
import Hero from './components/Hero'
import SkillsHorizontal from './components/SkillsHorizontal'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <FloatingParticles />
      <Header />
      <Hero />
      <SkillsHorizontal />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
