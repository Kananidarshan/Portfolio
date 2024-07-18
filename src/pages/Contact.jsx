import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to an API or email service)
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-r from-gray-600 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4 w-full">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-md"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            Contact No
          </label>
          <input
            type="integer"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
