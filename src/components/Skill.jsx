import { useContext } from "react"
import { ThemeContext } from "../context/context"

const Skill = () => {
    const value = useContext(ThemeContext)

    return (
        <div id="skill" className='w-full min-h-screen vflexbox p-6 md:p-14'>
            <h2 className='text-3xl md:text-5xl font-bold font-[Poppins] pb-4 md:pb-6'>Skills</h2>
            <div className="skills vflexbox w-full gap-2 md:gap-4">
                <div className="frontend w-full">
                    <div className="logos md:px-8 py-4 flexbox flex-wrap gap-4 gap-y-6 sm:gap-4 lg:gap-8">
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='HTML' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt='CSS' />
                    </div>
                </div>
                <div className='w-4/5 md:w-3/5 bg-gray-500 h-[2px]'></div>
                <div className="backend&database w-full">
                    <div className="logos md:px-8 py-4 flexbox flex-wrap gap-4 gap-y-6 sm:gap-4 lg:gap-8">
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt='HTML' />
                        <img className={`w-12 md:w-20 ${value.theme == 'light' ? '' : 'invert'}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='CSS' />
                    </div>
                </div>
                <div className='w-3/5 md:w-2/5 bg-gray-500 h-[2px]'></div>
                <div className="frontend w-full">
                    <div className="logos md:px-8 py-4 flexbox flex-wrap gap-4 gap-y-6 sm:gap-4 lg:gap-8">
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='HTML' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='CSS' />
                        <img className={`w-12 md:w-20 ${value.theme == 'light' ? '' : 'invert'}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='CSS' />
                        <img className={`w-12 md:w-20 ${value.theme == 'light' ? '' : 'invert'}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt='CSS' />
                        <img className='w-12 md:w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt='CSS' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
