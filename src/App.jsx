import './App.scss'
import About from './components/about/About'
import { ContactMe } from './components/contact/ContactMe'
import Experience from './components/experience/Experience'
import GoToTop from './components/goToTop/GoToTop'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Hero from './components/top/Hero'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <GoToTop/>
      <ContactMe/>
    </div>
  )
}

export default App
