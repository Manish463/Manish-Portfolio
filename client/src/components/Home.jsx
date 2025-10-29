import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='min-h-screen gridbox'>

      <div className='vflexbox !items-start p-8 md:px-30'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold animate-fade-in opacity-0 pb-2'>
          Hi I'm <span className='text-[var(--primColor)]'>Manish Kumar Sharma</span>
        </h1>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-in opacity-0 delay-100'>
          Full Stack Web Developer
        </h3>
        <p className='sm:text-lg lg:text-xl py-3 animate-fade-in opacity-0 delay-200'>
          I'm a MERN Stack Developer focused on building responsive and dynamic web apps that deliver great user experiences.
        </p>
        <div className="btns mt-2 flex gap-6 md:gap-8 animate-fade-in opacity-0 delay-300">
          <a href="/resume.pdf" className='px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--primColor)] hover:bg-[var(--secColor)] cursor-pointer'>Download Resuma</a>
          <Link to='contact' smooth={true} duration={1000} className='px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--primColor)] hover:bg-[var(--secColor)] cursor-pointer'>Contact</Link>
        </div>
      </div>
      <div className='flexbox p-6 pb-14'>
        <video className='rounded-2xl' src="/videos/Developer activity.mp4" autoPlay muted playsInline></video>
      </div>
    </div>
  )
}

export default Home