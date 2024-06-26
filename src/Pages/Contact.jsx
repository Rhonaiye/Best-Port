import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;

    try {
      const response = await fetch(formElement.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(new FormData(formElement)).toString()
      });

      if (response.ok) {
        setForm({
          name: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-softWhite p-8 rounded-lg shadow-md my-5">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xpzvgpjq" >
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Send</button>
      </form>
      {status === 'SUCCESS' && <p className="mt-4 text-green-500">Message sent successfully!</p>}
      {status === 'ERROR' && <p className="mt-4 text-red-500">There may have been an error sending your message. Please try again or Contact me manually.</p>}
    </div>
  );
};

export default Contact;
