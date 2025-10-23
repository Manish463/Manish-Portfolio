import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';

const Contact = () => {
  const serverUri = import.meta.env.VITE_API_SERVER_URI
  const [submiting, setSubmiting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setSubmiting(true)
    try {
      const response = await fetch(`${serverUri}/contact`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),
      })

      const res = await response.json()

      if (response.status === 200) {
        toast.success(res.message)
      } else {
        toast.success(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

    reset()
    setSubmiting(false)
  }

  return (
    <section className="bg-[var(--secColor)] text-white pt-20 md:pt-26 vflexbox gap-5">
      <ToastContainer />
      <div className={`vflexbox gap-4 md:gap-6 w-full`}>
        <h2 className="text-3xl md:text-5xl font-bold">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='vflexbox gap-5 text-black w-[90%] md:w-[70%] p-6'>
          <div className='w-full'>
            <input {...register("first_name", { required: { value: true, message: "Please enter the first name" }, minLength: { value: 3, message: 'Name should contains at least 3 charactors' } })} type="text" placeholder='First Name' className='inp-class' />
            {errors.first_name && <span className='pl-2 font-semibold text-red-500 text-sm bg-white px-4 py-1 rounded-md'>{errors.first_name.message}</span>}
          </div>
          <input  {...register("last_name")} type="text" placeholder='Last Name' className='inp-class' />
          <div className='w-full'>
            <input  {...register("email", { required: { value: true, message: "Please enter your email" } })} type="email" placeholder='Email' className='inp-class' />
            {errors.email && <span className='pl-2 font-semibold text-red-500 text-sm bg-white px-4 py-1 rounded-md'>{errors.email.message}</span>}
          </div>
          <div className='w-full'>
            <textarea  {...register("message", { required: { value: true, message: "Please enter your message first" } })} placeholder='Your message here....' className='inp-class resize-none h-25' spellCheck={true}></textarea>
            {errors.message && <span className='pl-2 font-semibold text-red-500 text-sm bg-white px-4 py-1 rounded-md'>{errors.message.message}</span>}
          </div>
          <button className="bg-white text-blue-600 font-semibold mt-2 text-lg md:text-xl px-8 py-2 md:px-16 md:py-3 rounded-lg hover:bg-blue-100 w-full">
            {submiting ? <ThreeDot color="#2563EB" size="medium" text="" textColor="" /> : "Submit"}
          </button>
        </form>
      </div>
      <div className='flexbox gap-4 w-full pb-4'>
        <a href="https://github.com/Manish463" target="_blank" className='animate-scale'>
          <img className='w-8 invert' src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/manish-kumar-sharma-97b995387" target="_blank" className='animate-scale'>
          <img className='w-8 invert' src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:ms8114361@gmail.com" target="_blank" className='animate-scale'>
          <img className='w-8' src="/icons/email.svg" alt="Email" />
        </a>
      </div>
    </section>
  )
}

export default Contact
