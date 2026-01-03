import { useContext } from "react";
import { ThemeContext } from "../context/context";

const FRONTEND = [
  {
    name: "HTML",
    link: "https://skillicons.dev/icons?i=html",
  },
  {
    name: "CSS",
    link: "https://skillicons.dev/icons?i=css",
  },
  {
    name: "JS",
    link: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "React",
    link: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "Tailwind",
    link: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    name: "Redux",
    link: "https://skillicons.dev/icons?i=redux",
  },
];

const BACKEND = [
  {
    name: "NodeJS",
    link: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    name: "ExpressJS",
    link: "https://skillicons.dev/icons?i=express",
  },
  {
    name: "MongoDB",
    link: "https://skillicons.dev/icons?i=mongodb",
  },
];

const TOOLS = [
  {
    name: "Postman",
    link: "https://skillicons.dev/icons?i=postman",
  },
  {
    name: "Git",
    link: "https://skillicons.dev/icons?i=git",
  },
  {
    name: "GitHub",
    link: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "Figma",
    link: "https://skillicons.dev/icons?i=figma",
  },
];

const Skill = () => {
  const value = useContext(ThemeContext);

  return (
    <section className="w-full vflexbox p-6 md:p-14 py-20 md:py-30">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] px-20">
        Skills
      </h2>
      <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--primColor)] to-transparent"></div>
      <div className="skills flex flex-col items-center w-full gap-10 py-6">

        {/* FRONTEND */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm uppercase tracking-widest text-gray-400">
            <span className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
            Frontend
            <span className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5 md:gap-8">
            {FRONTEND.map((icon, i) => (
              <img
                key={icon.name}
                src={icon.link}
                alt={icon.name}
                style={{ animationDelay: `${i * 120}ms` }}
                className="
            w-14 md:w-20 p-3
            rounded-2xl
            bg-white/5 backdrop-blur-md
            shadow-md
            animate-float-up
            hover:scale-110 hover:-translate-y-1
            transition-all duration-300
          "
              />
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-4/5 md:w-3/5 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>

        {/* BACKEND */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm uppercase tracking-widest text-gray-400">
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
            Backend & Database
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5 md:gap-8">
            {BACKEND.map((icon, i) => (
              <img
                key={icon.name}
                src={icon.link}
                alt={icon.name}
                style={{ animationDelay: `${i * 120}ms` }}
                className="
            w-14 md:w-20 p-3
            rounded-2xl
            bg-white/5 backdrop-blur-md
            shadow-md
            animate-float-up
            hover:scale-110 hover:-translate-y-1
            transition-all duration-300
          "
              />
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-4/5 md:w-3/5 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>

        {/* TOOLS */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm uppercase tracking-widest text-gray-400">
            <span className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
            Tools
            <span className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5 md:gap-8">
            {TOOLS.map((icon, i) => (
              <img
                key={icon.name}
                src={icon.link}
                alt={icon.name}
                style={{ animationDelay: `${i * 120}ms` }}
                className="
            w-14 md:w-20 p-3
            rounded-2xl
            bg-white/5 backdrop-blur-md
            shadow-md
            animate-float-up
            hover:scale-110 hover:-translate-y-1
            transition-all duration-300
          "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
