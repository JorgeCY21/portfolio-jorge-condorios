import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App