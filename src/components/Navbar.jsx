import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-scroll";

const Navbar = (props) => {
  // Destructuring the props
  const { activeSection } = props.active;

  // Declearing hooks
  const { theme, setTheme } = useContext(ThemeContext);
  const [mode, setMode] = useState("/sun.svg");
  const [showSideBar, setShowSideBar] = useState(false);
  const menu = useRef(null);

  // const linkTags = useRef(null)
  // Useeffect hooks
  useEffect(() => {
    setMode(theme == "light" ? "/moon.svg" : "/sun.svg");
  }, [theme]);

  useEffect(() => {
    const myObject = menu.current.childNodes;
    const arr = ['home', 'about', 'skill', 'project', 'contact']
    
    arr.forEach((val, ind) => {
      if(val === activeSection) {
        myObject[ind+1].classList.add('bg-[var(--accent)]')
      } else {
        myObject[ind+1].classList.remove('bg-[var(--accent)]')
      }
    })
  }, [activeSection])

  return (
    <div
      className={`w-full h-[10vh] z-10 px-4 md:px-6 py-7 flex justify-between items-center shadow-sm shadow-gray-400 sticky ${showSideBar ? "" : "backdrop-blur-2xl"
        } top-0 left-0`}
    >
      <a href="/">
        <h1 className="text-4xl  font-[Parisienne] text-[var(--primColor)] font-extrabold">
          Manish
        </h1>
      </a>

      <div className="flex gap-3 md:gap-4 lg:gap-6">
        <ul ref={menu} className={` ${showSideBar ? "flex afade-lr" : "hidden"} md:flex z-20 h-[100vh] md:h-auto w-[100vw] md:w-auto absolute md:static flex-col md:flex-row justify-start md:justify-center items-center pt-20 md:pt-0 top-0 left-0 backdrop-blur-sm md:backdrop-blur-0 p-10 md:p-0 gap-5 md:gap-6`}>

          {/* Close button (mobile only) */}
          <button className="absolute top-5 right-5 md:hidden" onClick={() => setShowSideBar(!showSideBar)}>
            <img className={`w-[28px] ${theme === "dark" ? "invert" : ""}`} src="/icons/cross.svg" alt="X" />
          </button>

          {[
            { name: "Home", id: "home" },
            { name: "About Me", id: "about" },
            { name: "Skill", id: "skill" },
            { name: "Project", id: "project" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <Link
              key={item.id}
              smooth={true}
              duration={1000}
              to={item.id}
              onClick={() => setShowSideBar(false)}
              className="no-underline w-full md:w-auto rounded-md"
            >
              <li className={` w-full md:w-auto border-[1px] md:border-0  border-slate-500 md:border-none text-center py-2 md:px-5 rounded-md cursor-pointer font-semibold text-lg hover:bg-[var(--accent)] ${theme === "light" ? "hover:text-[var(--darkText)]" : "hover:text-[var(--lightText)]"}`}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {!showSideBar && (
          <button className="block md:hidden" onClick={() => setShowSideBar(!showSideBar)} >
            <img className={`w-[28px] ${theme == "light" ? "" : "invert"}`} src="/icons/icons8-menu.svg" alt="Menu" />
          </button>
        )}

        <button className={`cursor-pointer invert p-2 rounded-full ${theme == "light" ? "hover:bg-gray-900" : "hover:bg-gray-100"}`}
          onClick={() => setTheme(theme == "light" ? "dark" : "light")} >
          <img src={`icons/${mode}`} alt="Mode" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
