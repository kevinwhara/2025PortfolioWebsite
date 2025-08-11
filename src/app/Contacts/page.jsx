"use client";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <main className="flex flex-col gap-5 max-w-lg mx-auto py-10">
      <h1 className="text-3xl text-gray-400 cursor-pointer">./<span className="text-blue-700"> contact</span></h1>
      <p>Text me anything you want, we can be a friend!!! Isn't it? I hope so. Or you can directly message me on <a href="https://www.linkedin.com/in/kevinwhara/">Linkedin</a>.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded-lg text-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded-lg text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded-lg text-sm"
          rows="5"
          required
        />
        <button type="submit" className="flex flex-row gap-2 items-center bg-indigo-700 text-white px-4 py-2 rounded">
            <Send size={16}/>
          Send
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
