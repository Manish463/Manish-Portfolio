import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";

const Project = (props) => {
  // Destructuring the props
  const { activeSection } = props.active;
  const serverUri = import.meta.env.VITE_API_SERVER_URI;

  // Declearing hooks
  const value = useContext(ThemeContext);
  const container = useRef(null);
  const [projects, setProjects] = useState({});

  // Useeffect hooks
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      }),
        {
          threshold: 1,
          rootMargin: "0px 100px 0px 100px",
        };
    });

    Object.values(container.current.childNodes).map((item) =>
      observer.observe(item)
    );
  });

  // fetching data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${serverUri}/project`);
        const res = await response.json();
        setProjects(res || []); // we can not access a states value imediatly after inisializing
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`p-8 py-20 md:p-16 flex flex-col gap-2 ${
        value.theme == "light"
          ? "bg-[var(--lightSecBg)]"
          : "bg-[var(--darkSecBg)]"
      }`}
    >
      {/* Page title */}
      <div className="text-center flex flex-col py-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold">
          Projects
        </h2>
        <div className="w-54 h-0.5 bg-gradient-to-r from-transparent via-[var(--primColor)] to-transparent self-center"></div>
      </div>

      {/* Project Cards */}
      <div
        ref={container}
        className="cards w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:gap-12 py-8"
      >
        { projects.length && projects.map((item, ind) => (
            <a
              key={ind}
              href={item.link}
              target="_blank"
              style={{ animationDelay: `${ind * 120}ms` }}
              className={`card transition-all opacity-0 w-72 h-90 border-2 duration-1000 rounded-2xl shadow-xl overflow-hidden mx-auto hover:-translate-y-2 hover:scale-105 ${
                value.theme == "light"
                  ? "bg-[var(--lightCard)] border-[var(--lightBorder)]"
                  : "bg-[var(--darkCard)] border-[var(--darkBorder)]"
              }`}
            >
              <div className="h-3/5 object-cover object-center">
                <img
                  className="h-full"
                  src={`${serverUri}/images/${item.image}`}
                  alt={item.title}
                />
              </div>
              <div className="px-4 py-2 h-2/5">
                <h3 className="text-xl font-bold flex pb-1">
                  {item.title}
                  {/* <a href={item.link} target="_blank">
                    <img
                      className={`top-3 right-3 w-4 ml-1 ${
                        value.theme == "light" ? "" : "invert"
                      }`}
                      src="/icons/live.svg"
                      alt="Live"
                    />
                  </a> */}
                </h3>
                <p className="text-xs">{item.content}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Project;
