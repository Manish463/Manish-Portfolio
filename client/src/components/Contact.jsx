import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { ThreeDot } from "react-loading-indicators";

const LINKS = [
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    link: "https://github.com/Manish463",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    link: "https://linkedin.com/in/manish-kumar-sharma-97b995387",
  },
  {
    name: "Email",
    icon: "/icons/email.svg",
    link: "mailto:ms8114361@gmail.com",
  },
];
const Contact = () => {
  const serverUri = import.meta.env.VITE_API_SERVER_URI;
  const [submiting, setSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSubmiting(true);
    try {
      const response = await fetch(`${serverUri}/contact`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.status === 200) {
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    reset();
    setSubmiting(false);
  };

  return (
    <section className="bg-[var(--secColor)] text-white py-12 flex flex-col items-center gap-10">
      <ToastContainer />

      {/* Heading */}
      <div className="text-center space-y-2">
        <div className="flex flex-col items-center py-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
            Contact Me
          </h2>
          <div className="w-54 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <p className="text-gray-200 text-sm md:text-base max-w-lg px-4">
          Feel free to reach out for collaborations, projects, or just a
          friendly chat.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] bg-white rounded-2xl p-8 md:p-10 shadow-xl flex flex-col gap-4 text-black"
      >
        {/* First Name */}
        <div className="w-full">
          <input
            {...register("first_name", {
              required: { value: true, message: "Please enter the first name" },
              minLength: {
                value: 3,
                message: "Name should contain at least 3 characters",
              },
            })}
            type="text"
            placeholder="First Name"
            className="inp-class"
          />
          {errors.first_name && (
            <p className="text-red-600 text-sm mt-1 font-semibold">
              {errors.first_name.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <input
          {...register("last_name")}
          type="text"
          placeholder="Last Name"
          className="inp-class"
        />

        {/* Email */}
        <div className="w-full">
          <input
            {...register("email", {
              required: { value: true, message: "Please enter your email" },
            })}
            type="email"
            placeholder="Email"
            className="inp-class"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1 font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="w-full">
          <textarea
            {...register("message", {
              required: { value: true, message: "Please enter your message" },
            })}
            placeholder="Your message..."
            className="inp-class resize-none h-28"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1 font-semibold">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button className="bg-[var(--primColor)] text-white font-semibold text-lg py-3 rounded-md transition-all duration-300 shadow-md w-full hover:scale-105 active:scale-95">
          {submiting ? <ThreeDot color="#fff" size="medium" /> : "Submit"}
        </button>
      </form>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {LINKS.map((Link, index) => (
          <a
            key={index}
            href={Link.link}
            target="_blank"
            className="transition-transform duration-400 hover:scale-125"
          >
            <img className="w-10 invert" src={Link.icon} alt={Link.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
