import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../context/context";

const About = (props) => {
  // Destructuring the props
  const { activeSection } = props.active;

  // Declearing hooks
  const value = useContext(ThemeContext);
  const image = useRef(null);
  const content = useRef(null);
  const container = useRef(null);

  // Useeffect hooks
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          image.current.classList.add("animate-appear");
          content.current.classList.add("animate-fade-up");
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(container.current);
  });

  return (
    <div
      ref={container}
      className={`flex flex-col md:flex-row p-6 py-14 md:p-12 gap-5 ${
        value.theme == "light"
          ? "bg-[var(--lightSecBg)]"
          : "bg-[var(--darkSecBg)]"
      }`}
    >
      {/* image section */}
      <div className="image flexbox w-full md:w-2/5 p-6">
        <img
          ref={image}
          className={`w-50 rounded-full img-shadow opacity-0`}
          src="/images/image.jpg"
          alt="developer-boy"
        />
      </div>

      {/* content */}
      <div className="content vflexbox md:p-8">
        <div
          ref={content}
          className={`p-8 md:p-16 rounded-2xl vflexbox gap-6 md:gap-10 opacity-0 border-2 shadow-xl ${
            value.theme == "light"
              ? "border-[var(--lightBorder)] bg-gray-200/40"
              : "border-[var(--darkBorder)] bg-gray-700/40"
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold px-4">
              About Me
            </h2>
            <div className="w-54 h-0.5 bg-gradient-to-r from-transparent via-[var(--primColor)] to-transparent"></div>
          </div>
          <div className="vflexbox text-md md:text-lg px-6 gap-2 md:gap-4">
            <p>
              I'm Manish Kumar Sharma, a passionate Full Stack Web Developer
              (MERN Stack) who loves turning ideas into functional and
              responsive web applications.
            </p>
            <p>
              I specialize in building clean, interactive, and user-focused
              interfaces using React and Tailwind CSS, along with robust backend
              systems powered by Node.js and MongoDB.
            </p>
            <p>
              Currently, I'm seeking opportunities for internships and freelance
              projects where I can contribute, learn, and grow as a developer.
            </p>
            <p>
              Beyond coding, I enjoy exploring new frameworks, improving UI
              designs, and optimizing performance for a better user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
