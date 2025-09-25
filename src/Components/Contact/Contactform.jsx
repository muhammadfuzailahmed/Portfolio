import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { NavHashLink } from 'react-router-hash-link';

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    if(!name || !email || !message) {
      toast.error("Enter all fields!")
      return
    }
    const formData = new FormData(event.target);

    formData.append("access_key", "e859bbf1-d4f4-4f90-a67f-525d0570085d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Submitted Successfully!");
      setName("")
      setEmail("")
      setMessage("")
    }
  };

  return (
    <>
    <div className='w-full h-auto dark:bg-[#0d0e0e]'>
      <NavHashLink to="/#contact">
        <p  className='dark:text-white transition-all hover:text-gray-500 cursor-pointer ml-10'><span className='mr-3'><i class="fa-solid fa-arrow-left"></i></span> Back</p>
      </NavHashLink>
      <div className='text-center'>
        <h1 className='dark:text-white font-bold text-4xl pt-10'>Say Hello!</h1>
        <div className='w-48 h-2 bg-cyan-400 m-auto rounded-full mb-5 mt-1'></div>
        <div className='text-center mb-6'>
        <p className='dark:text-gray-400'>I'd love to collaborate or discuss opportunities.</p>
        <p className='dark:text-gray-400'>Drop me a message below.</p>
        </div>
      <form onSubmit={onSubmit}>
        <div >
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className='w-96 border-2 dark:border-white border-black px-4 py-2 rounded-md dark:placeholder:text-gray-400 placeholder:text-black dark:text-white outline-none focus:border-cyan-400 transition-all' placeholder='Enter name'/>
        </div>
        <div className='my-8'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className='w-96 border-2 dark:border-white border-black px-4 py-2 rounded-md dark:placeholder:text-gray-400 placeholder:text-black dark:text-white outline-none focus:border-cyan-400 transition-all' placeholder='Enter email'/>
        </div>
        <div className='my-8'>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" rows={6} className='w-96 border-2 dark:border-white px-4 py-2 rounded-md dark:placeholder:text-gray-400 placeholder:text-black border-black dark:text-white outline-none focus:border-cyan-400 transition-all' placeholder='Enter message'></textarea>
        </div>
        <button type="submit" className='border-3 border-cyan-400 px-3 py-1.5 w-46 rounded-md text-cyan-400 cursor-pointer font-bold hover:bg-cyan-500 hover:text-white'>Submit Form</button>
      </form>
      </div>
      </div>
      </>
  );
}

export default Contactform