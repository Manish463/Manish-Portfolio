import { useContext, useRef, useEffect, useState } from 'react'
import { ThemeContext } from '../context/context'

const Project = (props) => {
  // Destructuring the props
  const { activeSection } = props.active;
  const serverUri = import.meta.env.VITE_API_SERVER_URI

  // Declearing hooks
  const value = useContext(ThemeContext)
  const container = useRef(null)
  const [projects, setProjects] = useState({})

  // Useeffect hooks
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-px')
        }
      }),
      {
        threshold: 1,
        rootMargin: '0px 100px 0px 100px',
      }
    })

    Object.values(container.current.childNodes).map((item) => observer.observe(item))
  })

  // fetching data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${serverUri}/project`);
        const res = await response.json();
        setProjects(res || []) // we can not access a states value imediatly after inisializing
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className={`min-h-screen p-8 pt-[12vh] md:p-16 ${value.theme == 'light' ? 'bg-[var(--lightSecBg)]' : 'bg-[var(--darkSecBg)]'}`}>
      <h2 className='text-3xl md:text-5xl font-bold font-[Poppins] pb-6 md:pb-12'>Projects:</h2>
      <div ref={container} className="cards w-full flex items-start justify-center flex-wrap gap-6 md:gap-12">

        { projects.length && projects.map((item, ind) => (
          <div key={ind} className={`card transition-all animate-move-up w-72 h-90 border-2 duration-1000 opacity-0 -translate-x-[50%] rounded-2xl shadow-lg overflow-hidden ${value.theme == 'light' ? 'bg-[var(--lightCard)] border-[var(--lightBorder)] shadow-[var(--lightShadow)]' : 'bg-[var(--darkCard)] border-[var(--darkBorder)] shadow-[var(--darkShadow)]'}`}>
            <div className='h-3/5 object-cover object-center'>
              <img className='h-full' src={`${serverUri}/images/${item.image}`} alt={item.title} />
            </div>
            <div className='px-4 py-2 h-2/5'>
              <h3 className='text-xl font-bold flex pb-1'>
                {item.title}
                <a href={item.link}><img className={`top-3 right-3 w-4 ml-1 ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/live.svg" alt="Live" /></a>
              </h3>
              <p className='text-xs'>
                {item.content}
              </p>
            </div>
          </div>
        ))}

        {/* <div className='w-72 h-90 flexbox'>
          <button className='text-blue-500 font-bold'>View All Projects</button>
        </div> */}
      </div>
    </div>
  )
}

export default Project
