import { Link } from "react-scroll";

const ROLES = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Full Stack Web Developer",
];

const Home = () => {
  return (
    <section className="min-h-screen gridbox">

      {/* hero content section */}
      <div className="vflexbox !items-start p-8 md:px-30">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[Poppins] font-bold animate-fade-up pb-2">
          Hi I'm{" "}
          <span className="text-[var(--primColor)]">Manish Kumar Sharma</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-up my-delay-200">
          <div className="h-8 sm:h-9 lg:h-10 overflow-hidden">
            <ol className="flex flex-col items-start animate-slide-up">
              {ROLES.map((role, index) => (
                <li className="h-8 sm:h-9 lg:h-10" key={index}>
                  <span className="whitespace-nowrap animate-text-typing border-r-4 inline-block border-blue-500 overflow-hidden">
                    {role}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </h3>

        {/* discription */}
        <p className="sm:text-lg lg:text-xl py-3 animate-fade-up my-delay-400">
          I'm a MERN Stack Developer focused on building responsive and dynamic
          web apps that deliver great user experiences.
        </p>

        {/* buttons */}
        <div className="btns mt-2 flex gap-6 md:gap-8 animate-fade-up my-delay-600">
          <a
            href="Manish_Resume.pdf"
            target="_blank"
            className="px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--primColor)] cursor-pointer duration-200 font-semibold hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-[var(--primColor)] duration-200 font-semibold hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* hero image section */}
      <div className="flexbox p-6 pb-14">
        <video
          className="rounded-2xl"
          src="/videos/Developer activity.mp4"
          autoPlay
          muted
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default Home;
