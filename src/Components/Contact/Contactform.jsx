import React from 'react'

function Contactform() {
  const onSubmit = async (event) => {
    event.preventDefault();
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
    }
  };

  return (
    <>
    <div className='w-full h-[70vh] dark:bg-[#0d0e0e]'>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" className='w-96 border-2 border-white px-4 py-2 rounded-md dark:placeholder:text-white' placeholder='Enter name'/>
        <input type="email" name="email" className='w-96 border-2 border-white px-4 py-2 rounded-md dark:placeholder:text-white' placeholder='Enter email'/>
        <textarea name="message" className='w-96 border-2 border-white px-4 py-2 rounded-md dark:placeholder:text-white' placeholder='Enter name'></textarea>
        <button type="submit" className='border-2 border-white px-4 py-2 rounded-md dark:text-white'>Submit Form</button>
      </form>
      </div>
      </>
  );
}

export default Contactform