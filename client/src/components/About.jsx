import { useContext, useRef, useEffect } from "react"
import { ThemeContext } from "../context/context"

const About = (props) => {
  // Destructuring the props
  const { activeSection } = props.active;

  // Declearing hooks
  const value = useContext(ThemeContext)
  const image = useRef(null)
  const content = useRef(null)
  const container = useRef(null)

  // Useeffect hooks
  useEffect(()=>{
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        image.current.classList.add('opacity-100')
        content.current.classList.add('translate-y-px', 'opacity-100')
      }
    },
      {
        threshold: 0.4,
      })

    observer.observe(container.current)
  })

  return (
    <div ref={container} className={`min-h-screen w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 p-6 py-14 md:p-12 ${value.theme == 'light' ? 'bg-[var(--lightSecBg)]' : 'bg-[var(--darkSecBg)]'}`}>
      <div className="image flexbox w-full">
        <img ref={image} className={`w-[50%] opacity-0 transition-all duration-1000 ease-in rounded-full ${value.theme == 'light' ? 'shadow-[var(--lightShadow)]' : 'shadow-[var(--darkShadow)]'}`} src="/images/image.jpg" alt="developer-boy" />
      </div>
      <div className="content vflexbox row-span-2 md:col-span-2 md:p-8">
        <div ref={content} className={`p-2 md:p-6 py-6 md:py-16 rounded-2xl vflexbox gap-6 md:gap-10 translate-y-[50%] transition-all duration-700 ease-in opacity-0`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold">About Me</h2>
          <div className="vflexbox text-sm md:text-lg px-[5vw] gap-2 md:gap-4">
            <p>
              I'm Manish Kumar Sharma, a passionate Full Stack Web Developer (MERN Stack) who loves turning ideas into functional and responsive web applications.
            </p>
            <p>
              I specialize in building clean, interactive, and user-focused interfaces using React and Tailwind CSS, along with robust backend systems powered by Node.js and MongoDB.
            </p>
            <p>
              Currently, I'm seeking opportunities for internships and freelance projects where I can contribute, learn, and grow as a developer.
            </p>
            <p>
              Beyond coding, I enjoy exploring new frameworks, improving UI designs, and optimizing performance for a better user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
