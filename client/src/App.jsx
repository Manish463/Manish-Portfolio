import './App.css'
import { useState, useEffect, useRef } from 'react'
import { ThemeContext } from './context/context'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const navigate = useNavigate()

  // Declaring states/hooks
  const [theme, setTheme] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  // Intersection observer API
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skill: useRef(null),
    project: useRef(null),
    contact: useRef(null)
  }

  // Creating a new observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          navigate(`/${entry.target.id}`, {replace: true})
        }
      })
    }, {
      threshold: 0.6,
    })
    Object.values(sections).forEach((ref) => observer.observe(ref.current))

    return () => observer.disconnect();
  }, [])


  // Detecting OS theme
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    setTheme(media.matches ? 'dark' : 'light');
    const handler = () => setTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={`font-[Inter] min-h-screen p-0 m-0 ${theme == 'light' ? 'bg-[var(--lightBg)] text-[var(--lightText)]' : 'bg-[var(--darkBg)] text-[var(--darkText)]'}`}>

        <Navbar active={{ activeSection, setActiveSection }} />
        <section ref={sections.home} id='home'><Home /></section>
        <section ref={sections.about} id='about'><About active={{ activeSection, setActiveSection }} /></section>
        <section ref={sections.skill} id='skill'><Skill /></section>
        <section ref={sections.project} id='project'><Project active={{ activeSection, setActiveSection }} /></section>
        <section ref={sections.contact} id='contact'><Contact /></section>
        <Footer />

      </main>
    </ThemeContext.Provider>
  )
}

export default App
