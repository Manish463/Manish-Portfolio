import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[var(--secColor)] text-white text-center py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let's work together
      </h2>
      <p className="text-blue-100 mb-6 text-sm md:text-md">
        I'm open to internships, freelance projects, or collaborations.
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:ms8114361@gmail.com" className="bg-white text-blue-600 font-semibold px-5 py-3 rounded-lg hover:bg-blue-100">
          Contact Me
        </a>
        <div className='flexbox gap-4'>
          <a href="https://github.com/Manish463" target="_blank" className='animate-scale'>
            <img className='w-12 invert' src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className='animate-scale'>
            <img className='w-12 invert' src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
