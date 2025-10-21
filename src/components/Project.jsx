import { useContext } from 'react'
import { ThemeContext } from '../context/context'

const Project = () => {
  const value = useContext(ThemeContext)

  return (
    <div className={`min-h-screen p-8 pt-[12vh] md:p-16 ${value.theme == 'light' ? 'bg-[var(--lightSecBg)]' : 'bg-[var(--darkSecBg)]'}`}>
      <h2 className='text-3xl md:text-5xl font-bold font-[Poppins] pb-6 md:pb-12'>Projects:</h2>
      <div className="cards w-full flex items-start justify-center flex-wrap gap-6 md:gap-8">

        <div className={`card transition-all animate-move-up w-72 h-90 border-2  rounded-2xl shadow-lg overflow-hidden ${value.theme == 'light' ? 'bg-[var(--lightCard)] border-[var(--lightBorder)] shadow-[var(--lightShadow)]' : 'bg-[var(--darkCard)] border-[var(--darkBorder)] shadow-[var(--darkShadow)]'}`}>
          <div className='h-3/5 object-cover object-center'>
            <img className='h-full' src="/images/linktree.png" alt="linktree image" />
          </div>
          <div className='px-4 py-2 h-2/5'>
            <h3 className='text-xl font-bold flex pb-1'>
              Linktree
              <a href="https://linktree-clone-pink.vercel.app"><img className={`top-3 right-3 w-4 ml-1 ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/live.svg" alt="Live" /></a>
            </h3>
            <p className='text-xs'>
              This project is a clone of Linktree designed for learning and practice purposes.
              It replicates the design, features, and responsiveness of the original platform while following clean and maintainable code practices.
            </p>
          </div>
        </div>

        <div className={`card transition-all animate-move-up w-72 h-90 border-2  rounded-2xl shadow-lg overflow-hidden ${value.theme == 'light' ? 'bg-[var(--lightCard)] border-[var(--lightBorder)] shadow-[var(--lightShadow)]' : 'bg-[var(--darkCard)] border-[var(--darkBorder)] shadow-[var(--darkShadow)]'}`}>
          <div className='h-3/5 object-cover object-center'>
            <img className='h-full' src="/images/bitlink.png" alt="Bitlink image" />
          </div>
          <div className='px-4 py-2 h-2/5'>
            <h3 className='text-xl font-bold flex pb-2'>
              Bitlink
              <a href="https://bitlinks-six-rouge.vercel.app/"><img className={`top-3 right-3 w-4 ml-1 ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/live.svg" alt="Live" /></a>
            </h3>
            <p className='text-xs'>
              This project is a clone of Bitlink designed for learning and practice purposes.
              It replicates the design, features, and responsiveness of the original platform while following clean and maintainable code practices.
            </p>
          </div>
        </div>

        <div className={`card transition-all animate-move-up w-72 h-90 border-2  rounded-2xl shadow-lg overflow-hidden ${value.theme == 'light' ? 'bg-[var(--lightCard)] border-[var(--lightBorder)] shadow-[var(--lightShadow)]' : 'bg-[var(--darkCard)] border-[var(--darkBorder)] shadow-[var(--darkShadow)]'}`}>
          <div className='h-3/5 object-cover object-center'>
            <img className='h-full' src="/images/passop.png" alt="PassOP image" />
          </div>
          <div className='px-4 py-2 h-2/5'>
            <h3 className='text-xl font-bold flex pb-2'>
              PassOP
              <a href="https://passop-by-manish.netlify.app/"><img className={`top-3 right-3 w-4 ml-1 ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/live.svg" alt="Live" /></a>
            </h3>
            <p className='text-xs'>
              PassOP is a simple, user-friendly, and secure web app that allows you to manage and organize all your passwords efficiently — directly from your own device.
            </p>
          </div>
        </div>

        <div className={`card transition-all animate-move-up w-72 h-90 border-2  rounded-2xl shadow-lg overflow-hidden ${value.theme == 'light' ? 'bg-[var(--lightCard)] border-[var(--lightBorder)] shadow-[var(--lightShadow)]' : 'bg-[var(--darkCard)] border-[var(--darkBorder)] shadow-[var(--darkShadow)]'}`}>
          <div className='h-3/5 object-cover object-center'>
            <img className='h-full' src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6856658bed2d0e90428588dc/screenshot_2025-06-21-07-56-27-0000.webp&fit=cover&h=500&q=40&w=800" alt="ToDo-List image" />
          </div>
          <div className='px-4 py-2 h-2/5'>
            <h3 className='text-xl font-bold flex pb-2'>
              To-Do
              <a href="https://to-do-list-by-manish463.netlify.app/"><img className={`top-3 right-3 w-4 ml-1 ${value.theme == 'light' ? '' : 'invert'}`} src="/icons/live.svg" alt="Live" /></a>
            </h3>
            <p className='text-xs'>
              To-Do is a simple, user-friendly, responsive and secure web app that allows you to manage and organize your tasks effeciently - directly from your own device.
            </p>
          </div>
        </div>

        {/* <div className='w-72 h-90 flexbox'>
          <button className='text-blue-500 font-bold'>View All Projects</button>
        </div> */}
      </div>
    </div>
  )
}

export default Project
