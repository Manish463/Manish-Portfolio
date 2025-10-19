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
                        <img className={`w-12 md:w-20 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=html" alt='HTML' />
                        <img className={`w-12 md:w-20 delay-200 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=css" alt='CSS' />
                        <img className={`w-12 md:w-20 delay-600 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=js" alt='js' />
                        <img className={`w-12 md:w-20 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=react" alt='react' />
                        <img className={`w-12 md:w-20 delay-400 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=tailwind" alt='tailwind' />
                        <img className={`w-12 md:w-20 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=redux" alt='redux' />
                        <img className={`w-12 md:w-20 delay-200 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=next" alt='next' />
                    </div>
                </div>
                <div className='w-4/5 md:w-3/5 bg-gray-400/30 h-[2px]'></div>
                <div className="backend&database w-full">
                    <div className="logos md:px-8 py-4 flexbox flex-wrap gap-4 gap-y-6 sm:gap-4 lg:gap-8">
                        <img className={`w-12 md:w-20 delay-200 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=nodejs" alt='nodejs' />
                        <img className={`w-12 md:w-20 delay-400 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=express" alt='express' />
                        <img className={`w-12 md:w-20 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=next" alt='next' />
                        <img className={`w-12 md:w-20 delay-200 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=mongodb" alt='mongodb' />
                    </div>
                </div>
                <div className='w-3/5 md:w-2/5 bg-gray-400/30 h-[2px]'></div>
                <div className="tools w-full">
                    <div className="logos md:px-8 py-4 flexbox flex-wrap gap-4 gap-y-6 sm:gap-4 lg:gap-8">
                        <img className={`w-12 md:w-20 delay-400 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=postman" alt='postman' />
                        <img className={`w-12 md:w-20 delay-600 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=netlify" alt='netlify' />
                        <img className={`w-12 md:w-20 delay-600 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=vercel" alt='vercel' />
                        <img className={`w-12 md:w-20 delay-400 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=git" alt='git' />
                        <img className={`w-12 md:w-20 rounded-xl animate-scale transition-transform animate-floatUp`} src="https://skillicons.dev/icons?i=github" alt='github' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
