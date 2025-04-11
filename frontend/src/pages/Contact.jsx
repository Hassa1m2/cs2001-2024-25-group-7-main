import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("All fields are required.");
      return;
    }

    if (message.length < 300) {
      alert("Must be at least 300 characters.");
      return;
    }

    if (message.length > 1000) {
      alert("Message cannot exceed 1000 characters.");
      return;
    }

    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us Form</h2>
        <p className="text-gray-600 text-center mb-8">Have a question or need support? Reach out to us, and we'll get back to you as soon as possible.</p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 text-center rounded-lg">
            ✅ Your message has been sent successfully! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your message (min 300, max 1000 characters)"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">{formData.message.length} / 1000 characters</p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Other Ways to Reach Us</h3>
          <p className="text-gray-600 mt-2">
            📍 200 Old Avenue, Greater London, UK <br />
            📞 +123 768 6398 <br />
            ✉️ info@mentalhealth.co.uk
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;