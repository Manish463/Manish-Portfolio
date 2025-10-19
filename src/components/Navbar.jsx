import { useContext, useState, useRef, useEffect } from 'react'
import {ThemeContext} from '../context/context'
import { Link } from 'react-scroll'

const Navbar = () => {
  const value = useContext(ThemeContext)
  const [mode, setMode] = useState('/sun.svg')
  const [showSideBar, setShowSideBar] = useState(false)
  const menu = useRef(null)

  useEffect(() => {
    setMode(value.theme == 'light' ? '/moon.svg' : '/sun.svg')
  }, [value.theme])

  return (
    <div className={`w-full h-[10vh] z-10 px-4 md:px-6 py-7 flex justify-between items-center shadow-sm shadow-gray-400 sticky ${ showSideBar ? '' : 'backdrop-blur-2xl'} top-0 left-0`}>
      <a href="/"><h1 className='text-4xl  font-[Parisienne] text-[var(--primColor)] font-extrabold'>Manish</h1></a>

      {/* Navigation for large screen */}
      <div className='flex gap-3 md:gap-4 lg:gap-6'>
        <ul className={`hidden md:flex md:gap-4 lg:gap-6`}>
          <Link smooth={true} duration={1000} to="home" className="no-underline">
            <li className={`px-5 py-2 rounded-md cursor-pointer font-semibold md:text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Home</li>
          </Link>
          <Link smooth={true} duration={1000} to="about" className="no-underline">
            <li className={`px-5 py-2 rounded-md cursor-pointer font-semibold md:text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>About Me</li>
          </Link>
          <Link smooth={true} duration={1000} to="skill" className="no-underline">
            <li className={`px-5 py-2 rounded-md cursor-pointer font-semibold md:text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Skill</li>
          </Link>
          <Link smooth={true} duration={1000} to="project" className="no-underline">
            <li className={`px-5 py-2 rounded-md cursor-pointer font-semibold md:text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Project</li>
          </Link>
          <Link smooth={true} duration={1000} to="contact" className="no-underline">
            <li className={`px-5 py-2 rounded-md cursor-pointer font-semibold md:text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Contact</li>
          </Link>
        </ul>

        {!showSideBar && <button className='block md:hidden' onClick={() => setShowSideBar(!showSideBar)}>
          <img className={`w-[28px] ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/icons8-menu.svg" alt="Menu" />
        </button>}

        {/* Navigation for small screen */}
        <ul ref={menu} className={`${showSideBar ? 'flex afade-lr' : 'hidden'} z-20 h-[100vh] w-[100vw] absolute flex-col justify-start items-center pt-20 top-0 left-0 backdrop-blur-sm p-10 gap-5`}>
          <button className='absolute top-5 right-5' onClick={() => setShowSideBar(!showSideBar)}>
            <img className={`w-[28px] ${value.theme == 'dark' ? 'invert' : ''}`} src="/icons/cross.svg" alt="X" />
          </button>
          <Link smooth={true} duration={1000} to="home" onClick={() => setShowSideBar(!showSideBar)} className="no-underline w-full">
            <li className={`w-full border-[1px] border-slate-500 text-center py-2 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Home</li>
          </Link>
          <Link smooth={true} duration={1000} to="about" onClick={() => setShowSideBar(!showSideBar)} className="no-underline w-full">
            <li className={`w-full border-[1px] border-slate-500 text-center py-2 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>About Me</li>
          </Link>
          <Link smooth={true} duration={1000} to="skill" onClick={() => setShowSideBar(!showSideBar)} className="no-underline w-full">
            <li className={`w-full border-[1px] border-slate-500 text-center py-2 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Skill</li>
          </Link>
          <Link smooth={true} duration={1000} to="project" onClick={() => setShowSideBar(!showSideBar)} className="no-underline w-full">
            <li className={`w-full border-[1px] border-slate-500 text-center py-2 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Project</li>
          </Link>
          <Link smooth={true} duration={1000} to="contact" onClick={() => setShowSideBar(!showSideBar)} className="no-underline w-full">
            <li className={`w-full border-[1px] border-slate-500 text-center py-2 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${value.theme == 'light' ? 'hover:text-[var(--darkText)]' : 'hover:text-[var(--lightText)]'}`}>Contact</li>
          </Link>
        </ul>

        <button className={`cursor-pointer invert p-2 rounded-full ${value.theme == 'light' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`} onClick={() => value.setTheme(value.theme == 'light' ? 'dark' : 'light')}>
          <img src={`icons/${mode}`} alt="Mode" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
