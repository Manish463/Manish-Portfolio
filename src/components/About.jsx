import { useContext } from "react"
import { ThemeContext } from "../context/context"

const About = () => {
  const value = useContext(ThemeContext)

  return (
    <div id='about' className={`min-h-screen w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 p-6 md:p-12 ${value.theme == 'light' ? 'bg-[var(--lightSecBg)]' : 'bg-[var(--darkSecBg)]'}`}>
      <div className="image flexbox w-full">
        <img className={`w-[50%] rounded-full animate-appear ${value.theme == 'light' ? 'shadow-[var(--lightShadow)]' : 'shadow-[var(--darkShadow)]'}`} src="/images/image.jpg" alt="developer-boy" />
      </div>
      <div className="content vflexbox row-span-2 md:col-span-2 md:p-8">
        <div className={`p-2 md:p-6 py-6 md:py-16 rounded-2xl vflexbox gap-6 md:gap-10 animate-fade-in`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold animate-fade-in">About Me</h2>
          <p className="vflexbox text-sm md:text-lg px-[5vw] gap-2 md:gap-4 animate-fade-in">
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
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
