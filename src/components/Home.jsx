import React from 'react'

const Home = () => {
  return (
    <div id='home' className='min-h-screen gridbox'>

      <div className='vflexbox !items-start p-4 md:px-30 gap-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold animate-fade-in'>
          Hi I'm <span className='text-[var(--primColor)]'>Manish Kumar Sharma</span>
        </h1>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-in delay-100'>
          Full Stack Web Developer
        </h3>
        <p className='sm:text-lg lg:text-xl py-3 animate-fade-in delay-200'>
          I'm a MERN Stack Developer focused on building responsive and dynamic web apps that deliver great user experiences.
        </p>
        <div className="btns mt-5 flex gap-8 md:gap-12 animate-fade-in delay-300">
          <button className='px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--secColor)]'>Download Resuma</button>
          <button className='px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--secColor)]'>Contact</button>
        </div>
      </div>
      <div className='flexbox'>
        <video src="/Developer activity.mp4" autoPlay muted playsInline></video>
      </div>
    </div>
  )
}

export default Home
