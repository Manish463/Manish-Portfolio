import './App.css'
import { useState, useEffect } from 'react'
import { ThemeContext } from './context/context'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  // Detecting OS theme
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    setTheme(media ? 'data' : 'light');
    const handler = () => setTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={`font-[Inter] min-h-screen p-0 m-0 ${theme == 'light' ? 'bg-[var(--lightBg)] text-[var(--lightText)]' : 'bg-[var(--darkBg)] text-[var(--darkText)]'}`}>

        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />

      </main>
    </ThemeContext.Provider>
  )
}

export default App
