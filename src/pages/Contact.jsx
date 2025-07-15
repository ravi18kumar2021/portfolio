import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Here you would handle sending form data (EmailJS, backend API, etc.)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-white">
      <SectionHeader sectionName={"Contact"} />
      <p className="text-gray-300 mb-8 text-lg">
        Have a question, project idea, or just want to say hello? Fill out the form below and I'll get back to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-yellow-400"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 transition px-6 py-2 text-white font-medium rounded"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="text-green-400 mt-4 text-lg">Thanks for reaching out! I'll get back to you soon.</p>
      )}

      <hr className="my-10 border-gray-600" />
      <SocialLinks />
      
    </section>
  );
}
